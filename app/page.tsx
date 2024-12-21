'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, SkipForward, SkipBack, ChevronLeft, ChevronRight, MoreVertical, Check, Trash2 } from 'lucide-react'
import Prompt from '@/components/Prompt'
import PromptList from '@/components/PromptList'

import { AnimatePresence, motion } from "framer-motion";

import { findPromptCategory, PromptState } from './utils/promptUtils'
import { Textarea } from '@/components/ui/textarea'
import Summary from '@/components/Summary'

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
	const [currentPrompt, setCurrentPrompt] = useState<PromptState>({ prompt: '', completed: false, response: '' })
	const [showList, setShowList] = useState(false)
	const [showProspecting, setShowProspecting] = useState(false)
	const [currentPrompts, setCurrentPrompts] = useState(reflectionPrompts);
	const [promptStates, setPromptStates] = useState<{
		reflecting: { [key: string]: PromptState };
		prospecting: { [key: string]: PromptState };
	}>({
		reflecting: {},
		prospecting: {}
	});
	const [currentPromptIndex, setCurrentPromptIndex] = useState(0)
	const [showMenu, setShowMenu] = useState(false)
	const [hoveredButton, setHoveredButton] = useState<string | null>(null)
	const [showSummary, setShowSummary] = useState(false)


	useEffect(() => {
		try {
			const storedReflecting = localStorage.getItem('reflectionPromptStates');
			const storedProspecting = localStorage.getItem('prospectingPromptStates');


			const reflecting = storedReflecting ? JSON.parse(storedReflecting) : {};
			const prospecting = storedProspecting ? JSON.parse(storedProspecting) : {};

			// Validate data structure
			const isValidReflecting = reflecting && typeof reflecting === 'object';
			const isValidProspecting = prospecting && typeof prospecting === 'object';

			// Always update state if we have valid data
			if (isValidReflecting || isValidProspecting) {
				const newState = {
					reflecting: isValidReflecting ? reflecting : {},
					prospecting: isValidProspecting ? prospecting : {}
				};
				setPromptStates(newState);
			}
		} catch (error) {
			console.error('Error loading prompt states:', error);
		}
	}, [])

	useEffect(() => {
		if (promptStates.reflecting && Object.keys(promptStates.reflecting).length > 0) {
			localStorage.setItem('reflectionPromptStates', JSON.stringify(promptStates.reflecting));
		}

		if (promptStates.prospecting && Object.keys(promptStates.prospecting).length > 0) {
			localStorage.setItem('prospectingPromptStates', JSON.stringify(promptStates.prospecting));
		}
	}, [promptStates]);

	useEffect(() => {
		const allPrompts = Object.values(currentPrompts).flat();
		const newPrompt = allPrompts[currentPromptIndex];
		const stateKey = showProspecting ? 'prospecting' : 'reflecting';

		setCurrentPrompt({
			prompt: newPrompt,
			completed: promptStates[stateKey][newPrompt]?.completed || false,
			response: promptStates[stateKey][newPrompt]?.response || ''
		});
	}, [currentPrompts, currentPromptIndex, promptStates, showProspecting]);

	useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			const allPrompts = Object.values(currentPrompts).flat()

			if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
				markCompleted()
				return
			}

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
				default:
					break
			}
		}

		window.addEventListener('keydown', handleKeyPress)
		return () => window.removeEventListener('keydown', handleKeyPress)
	}, [currentPromptIndex, currentPrompt.completed, currentPrompts, currentPrompt])


	useEffect(() => {
		setCurrentPromptIndex(0)
		setCurrentPrompts(showProspecting ? prospectingPrompts : reflectionPrompts)
	}, [showProspecting])

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
		setShowSummary(false)
	}

	const markCompleted = () => {
		const stateKey = showProspecting ? 'prospecting' : 'reflecting';
		setPromptStates(prev => ({
			...prev,
			[stateKey]: {
				...prev[stateKey],
				[currentPrompt.prompt]: { ...currentPrompt, completed: true }
			}
		}));
		setCurrentPromptIndex(currentPromptIndex + 1)
	};

	const deletePrompt = () => {
		const stateKey = showProspecting ? 'prospecting' : 'reflecting';
		setPromptStates(prev => {
			const newState = { ...prev };
			delete newState[stateKey][currentPrompt.prompt];
			return newState;
		});
		cyclePrompt('next');
	};

	const setResponse = (response: string) => {
		const stateKey = showProspecting ? 'prospecting' : 'reflecting';
		setPromptStates(prev => ({
			...prev,
			[stateKey]: {
				...prev[stateKey],
				[currentPrompt.prompt]: { ...currentPrompt, response }
			}
		}));
	}

	const clearPromptStates = () => {
		setPromptStates({
			reflecting: {},
			prospecting: {}
		});
	}

	const exportPromptState = () => {
		const dataStr = JSON.stringify(promptStates, null, 2);
		const blob = new Blob([dataStr], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = 'promptStates.json';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		URL.revokeObjectURL(url);
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
				promptState={promptStates}
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
				{
					!showSummary && (
						<div className="text-2xl font-bold text-blue-600 mb-4">
							{showProspecting ? 'Next Year' : 'This Year'}
						</div>
					)
				}
				<motion.button
					className="absolute top-4 right-16 text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors duration-200 inline-flex items-center gap-2 rounded-md px-3 py-2"
					onClick={() => {
						setShowProspecting(!showProspecting)
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
						{!showProspecting ? <SkipForward className="w-4 h-4" /> : <SkipBack className="w-4 h-4" />}
					</motion.div>
					<span>
						{!showProspecting ? 'Next Year' : 'This Year'}
					</span>
				</motion.button>
				<div className="absolute top-4 right-4">
					<motion.button
						className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors duration-200 p-2 rounded-lg"
						onClick={() => setShowMenu(!showMenu)}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						<MoreVertical />
					</motion.button>
					{showMenu && (
						<div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
							<ul>
								<li
									className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
									onClick={() => {
										clearPromptStates();
										setShowMenu(false);
									}}
								>
									Start Over
								</li>
								<li
									className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
									onClick={() => {
										exportPromptState();
										setShowMenu(false);
									}}
								>
									Export
								</li>
								<li
									className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
									onClick={() => setShowSummary(!showSummary)}>
									Summary
								</li>
							</ul>
						</div>
					)}
				</div>
				{
					showSummary ? (
						<Summary promptState={promptStates} setShowSummary={setShowSummary} />
					) :
						(
							<>

								<div className="text-sm text-blue-600 mb-4">{currentCategory}</div>
								<div className="flex items-center justify-center gap-4 mb-4">
									<Button
										variant="outline"
										size="icon"
										onClick={() => setShowList(true)}
									>
										<MoreVertical className="w-4 h-4" />
									</Button>
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
									<Button
										variant="outline"
										size="sm"
										className={`${currentPrompt.completed ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'} hover:bg-opacity-80`}
										onClick={markCompleted}
										disabled={currentPrompt.completed}
										onMouseEnter={() => setHoveredButton('complete')}
										onMouseLeave={() => setHoveredButton(null)}
									>
										<Check className="w-4 h-4" />
										<AnimatePresence>
											{hoveredButton === 'complete' && (
												<motion.span
													initial={{ width: 0, opacity: 0 }}
													animate={{ width: 'auto', opacity: 1 }}
													exit={{ width: 0, opacity: 0 }}
													className="ml-2 overflow-hidden whitespace-nowrap"
												>
													{currentPrompt.completed ? 'Completed' : 'Mark Completed'}
												</motion.span>
											)}
										</AnimatePresence>
									</Button>
									<Button
										variant="outline"
										size="sm"
										className="bg-red-100 text-red-700 hover:bg-opacity-80"
										onClick={deletePrompt}
										onMouseEnter={() => setHoveredButton('delete')}
										onMouseLeave={() => setHoveredButton(null)}
									>
										<Trash2 className="w-4 h-4" />
										<AnimatePresence>
											{hoveredButton === 'delete' && (
												<motion.span
													initial={{ width: 0, opacity: 0 }}
													animate={{ width: 'auto', opacity: 1 }}
													exit={{ width: 0, opacity: 0 }}
													className="ml-2 overflow-hidden whitespace-nowrap"
												>
													Delete
												</motion.span>
											)}
										</AnimatePresence>
									</Button>
								</div>
								<Prompt prompt={currentPrompt} onNext={() => cyclePrompt('next')} />
								<Textarea
									className="max-w-2xl w-full"
									placeholder="Jot down your thoughts here..."
									value={currentPrompt.response}
									onChange={(e) => setResponse(e.target.value)}
									rows={3}
								/>
							</>
						)
				}
			</main>
		</div >
	)
}

