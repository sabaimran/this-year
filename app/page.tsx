'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, SkipForward, SkipBack } from 'lucide-react'
import Prompt from '@/components/Prompt'
import PromptList from '@/components/PromptList'

import { getRandomPrompt, findPromptCategory } from './utils/promptUtils'

const reflectionPrompts = {
	"Health & Well-being": [
		"How has your physical health changed this year?",
		"What new healthy habits have you adopted?",
		"Are you enjoying life?",
		"What made you feel stress this year?",
		"Are you taking any medications?",
	],
	"Money & Finances": [
		"What financial goals did you achieve this year?",
		"How has your relationship with money evolved?",
	],
	"Work & Career": [
		"What was your biggest professional accomplishment?",
		"How has your work-life balance improved?",
	],
	"Social Life & Relationships": [
		"Which relationships grew stronger this year?",
		"How have you become a better friend/partner/family member?",
		"Are you & your partner aware of each others' needs and desires?",
	],
	"Education & Development": [
		"What new skills did you learn this year?",
		"How have you grown intellectually?",
	],
	"Location & Tangibles": [
		"How has your living situation changed or improved?",
		"What meaningful objects did you acquire or let go of?",
		"Do you have material sufficiency?",
		"Does your home support your goals and values?",
	],
	"Adventure & Creativity": [
		"What new experiences did you have this year?",
		"How have you expressed your creativity?",
		"When did you feel connected to your inner child?",
	],
	"Values & Purpose": [
		"How have your values been clarified or changed?",
		"In what ways did you live out your purpose?",
		"Do I have a sense of purpose and direction in life?",
		"Am I living in alignment with my values?",
		"What do I truly value?",
	],
	"State of the Self": [
		"What did you learn about yourself?",
		"What personal challenges have you overcome?",
		"What is holding me back from achieving my full potential?",
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
	const [currentPrompt, setCurrentPrompt] = useState('')
	const [showList, setShowList] = useState(false)
	const [showProspecting, setShowProspecting] = useState(false)
	const [currentPrompts, setCurrentPrompts] = useState(reflectionPrompts);

	useEffect(() => {
		setCurrentPrompts(showProspecting ? prospectingPrompts : reflectionPrompts)
	}, [showProspecting])

	useEffect(() => {
		setCurrentPrompt(getRandomPrompt(currentPrompts))
	}, [])

	const cyclePrompt = () => {
		setCurrentPrompt(getRandomPrompt(currentPrompts, currentPrompt))
	}

	const selectPrompt = (prompt: string) => {
		setCurrentPrompt(prompt)
		setShowList(false)
	}

	const currentCategory = findPromptCategory(currentPrompts, currentPrompt)

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
				<Button
					variant="ghost"
					className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors duration-200 flex items-center space-x-2"
					onClick={() => {
						setShowProspecting(!showProspecting)
						setCurrentPrompt(getRandomPrompt(showProspecting ? reflectionPrompts : prospectingPrompts))
					}}
				>
					{
						showProspecting ?
							<SkipForward /> :
							<SkipBack />
					}
					<span className="badge-label">
						{showProspecting ? 'Next Year' : 'This Year'}
					</span>
				</Button>
				<div className="text-sm text-blue-600 mb-4">{currentCategory}</div>
				<Prompt prompt={currentPrompt} onNext={cyclePrompt} />
			</main>
		</div >
	)
}

