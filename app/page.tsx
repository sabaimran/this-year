'use client'

import { useEffect, useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, SkipForward, SkipBack, ChevronLeft, ChevronRight } from 'lucide-react'
import Prompt from '@/components/Prompt'
import PromptList from '@/components/PromptList'

import { motion } from "framer-motion";

import { getRandomPrompt, findPromptCategory, PromptState } from './utils/promptUtils'

const reflectionPrompts = {
	"Health & Well-being": [
		"How has your physical health changed?",
		"What new healthy habits have you adopted?",
		"Are you enjoying life?",
		"What made you feel stress this year?",
		"Are you taking any medications?",
	],
	"Money & Finances": [
		"What financial goals did you achieve?",
		"How has your relationship with money evolved?",
	],
	"Work & Career": [
		"What was your biggest professional accomplishment?",
		"How has your work-life balance changed?",
	],
	"Social Life & Relationships": [
		"Which relationships grew stronger?",
		"How have you become a better friend/partner/family member?",
		"Are you & your partner aware of each others' needs and desires?",
	],
	"Education & Development": [
		"What new skills did you learn?",
		"How have you grown intellectually?",
	],
	"Location & Tangibles": [
		"How has your living situation changed or improved?",
		"What meaningful objects did you acquire or let go of?",
		"Do you have material sufficiency?",
		"Does your home support your goals and values?",
	],
	"Adventure & Creativity": [
		"What new experiences did you have?",
		"How have you expressed your creativity?",
		"When did you feel connected to your inner child?",
	],
	"Values & Purpose": [
		"How have your values been clarified or changed?",
		"In what ways did you live out your purpose?",
		"Do you have a sense of purpose and direction in life?",
		"Are you living in alignment with your values?",
		"What do you truly value?",
	],
	"State of the Self": [
		"What did you learn about yourself?",
		"What personal challenges have you overcome?",
		"What is holding you back from achieving your full potential?",
		"Where did you not try hard enough?",
		"What do you want out of life?",
	],
}

const prospectingPrompts = {
	"Health & Well-being": [
		"How will you improve your physical health?",
		"What new healthy habits will you adopt?",
	],
	"Money & Finances": [
		"What are your financial goals?",
		"How do you want your relationship with money to evolve?",
	],
	"Work & Career": [
		"What are you hoping to achieve professionally?",
		"How will you show up at work?",
	],
	"Social Life & Relationships": [
		"How will you be a better friend, partner, or family member?",
	],
	"Education & Development": [
		"What new skills do you want to learn?",
	],
	"Location & Tangibles": [
		"Where do you want to live?",
	],
	"Adventure & Creativity": [
		"How will you connect with your creativity?",
		"How will you explore?",
	],
	"Values & Purpose": [
		"How will you live out your values?",
	],
	"State of the Self": [
		"What do you want to be like?",
		"If you only had one year to live, what would you do differently?",
		"What would be awesome and fulfilling?",
	],
}

export default function Home() {
	const [currentPrompt, setCurrentPrompt] = useState<PromptState>({ prompt: '', completed: false })
	const [showList, setShowList] = useState(false)
	const [showProspecting, setShowProspecting] = useState(false)
	const [currentPrompts, setCurrentPrompts] = useState(reflectionPrompts);
	const [promptStates, setPromptStates] = useState<{ [key: string]: PromptState }>({})
	const [currentPromptIndex, setCurrentPromptIndex] = useState(0)

	useEffect(() => {
		const storedPromptStates = localStorage.getItem('promptStates')
		if (storedPromptStates) {
			setPromptStates(JSON.parse(storedPromptStates))
		}
	}, [])

	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			const allPrompts = Object.values(currentPrompts).flat()

			switch (event.key) {
				case 'ArrowLeft':
					if (currentPromptIndex > 0) {
						cyclePrompt('prev')
					}
					break
				case 'ArrowRight':
					if (currentPromptIndex < allPrompts.length - 1) {
						cyclePrompt('next')
					}
					break
				case 'c':
					if (!currentPrompt.completed) {
						markCompleted()
					}
					break
				case 'd':
					deletePrompt()
					break
				default:
					break
			}
		}

		window.addEventListener('keydown', handleKeyPress)
		return () => window.removeEventListener('keydown', handleKeyPress)
	}, [currentPromptIndex, currentPrompt.completed, currentPrompts])

	useEffect(() => {
		const allPrompts = Object.values(currentPrompts).flat()
		const newPrompt = allPrompts[currentPromptIndex]
		setCurrentPrompt({ prompt: newPrompt, completed: promptStates[newPrompt]?.completed || false })
	}, [currentPrompts, currentPromptIndex, promptStates])

	useEffect(() => {
		const newPrompt = getRandomPrompt(currentPrompts)
		setCurrentPrompt({ prompt: newPrompt, completed: promptStates[newPrompt]?.completed || false })
	}, [currentPrompts])

	useEffect(() => {
		localStorage.setItem('promptStates', JSON.stringify(promptStates))
	}, [promptStates])

	useEffect(() => {
		setCurrentPromptIndex(0)
		setCurrentPrompts(showProspecting ? prospectingPrompts : reflectionPrompts)
	}, [showProspecting])

	useEffect(() => {
		const randomPrompt = getRandomPrompt(currentPrompts)
		setCurrentPrompt({ prompt: randomPrompt, completed: promptStates[randomPrompt]?.completed || false })
	}, [])


	const cyclePrompt = (direction: 'next' | 'prev') => {
		const allPrompts = Object.values(currentPrompts).flat()
		let newIndex = direction === 'next' ? currentPromptIndex + 1 : currentPromptIndex - 1

		if (newIndex < 0) {
			newIndex = 0
		} else if (newIndex >= allPrompts.length) {
			newIndex = allPrompts.length - 1
		}

		setCurrentPromptIndex(newIndex)
	}

	const selectPrompt = (prompt: string) => {
		const allPrompts = Object.values(currentPrompts).flat()
		const index = allPrompts.indexOf(prompt)
		if (index !== -1) {
			setCurrentPromptIndex(index)
		}
		setShowList(false)
	}


	const markCompleted = () => {
		setPromptStates(prev => ({
			...prev,
			[currentPrompt.prompt]: { ...currentPrompt, completed: true }
		}))
		setCurrentPrompt(prev => ({ ...prev, completed: true }))
	}

	const deletePrompt = () => {
		setPromptStates(prev => {
			const newState = { ...prev }
			delete newState[currentPrompt.prompt]
			return newState
		})
		cyclePrompt('next')
	}

	const currentCategory = findPromptCategory(currentPrompts, currentPrompt.prompt)
	const allPrompts = Object.values(currentPrompts).flat()

	return (
		<div className={`flex h-screen ${showProspecting ? 'bg-gradient-to-br from-purple-50 to-green-50' : 'bg-gradient-to-br from-blue-50 to-green-50'}`}>
			<PromptList
				reflectionPrompts={reflectionPrompts}
				prospectingPrompts={prospectingPrompts}
				isOpen={showList}
				onClose={() => setShowList(false)}
				onSelectPrompt={selectPrompt}
				showProspecting={showProspecting}
			/>
			<main className="flex-grow flex flex-col items-center justify-center p-4 relative transition-all duration-300 ease-in-out"
				style={{ marginLeft: showList ? '320px' : '0' }}>
				<Button
					variant="ghost"
					size="icon"
					className="absolute top-4 left-4 text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors duration-200"
					onClick={() => setShowList(!showList)}
				>
					<Menu />
				</Button>
				<div className="text-2xl font-bold text-blue-600 mb-4">
					{showProspecting ? 'Next Year' : 'This Year'}
				</div>
				<motion.button
					className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors duration-200 inline-flex items-center gap-2 rounded-md px-3 py-2"
					onClick={() => {
						setShowProspecting(!showProspecting)
						const randomPrompt = getRandomPrompt(showProspecting ? reflectionPrompts : prospectingPrompts)
						setCurrentPrompt({ prompt: randomPrompt, completed: promptStates[randomPrompt]?.completed || false })
					}}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					initial={false}
					animate={{
						backgroundColor: showProspecting ? 'rgb(239 246 255)' : 'rgb(243 244 246)',
					}}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 20
					}}
				>
					<motion.div
						initial={false}
						animate={{ rotate: 360 }}
						transition={{ duration: 0.3 }}
					>
						{showProspecting ? <SkipForward className="w-4 h-4" /> : <SkipBack className="w-4 h-4" />}
					</motion.div>
					<span>
						{showProspecting ? 'Next Year' : 'This Year'}
					</span>
				</motion.button>
				<div className="text-sm text-blue-600 mb-4">{currentCategory}</div>
				<div className="flex items-center justify-center gap-4 mb-4">
					<Button
						variant="outline"
						size="icon"
						onClick={() => cyclePrompt('prev')}
						disabled={currentPromptIndex === 0}
						className={currentPromptIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}
					>
						<ChevronLeft className="w-4 h-4" />
					</Button>
					<Button
						variant="outline"
						size="icon"
						onClick={() => cyclePrompt('next')}
						disabled={currentPromptIndex === allPrompts.length - 1}
						className={currentPromptIndex === allPrompts.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}
					>
						<ChevronRight className="w-4 h-4" />
					</Button>
				</div>
				<Prompt prompt={currentPrompt} onNext={() => cyclePrompt('next')} markCompleted={markCompleted} deletePrompt={deletePrompt} />
			</main>
		</div >
	)
}

