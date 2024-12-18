'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Prompt from '@/components/Prompt'
import PromptList from '@/components/PromptList'
import { getRandomPrompt, findPromptCategory } from './utils/promptUtils'

const prompts = {
	"Health & Well-being": [
		"How has your physical health changed this year?",
		"What new healthy habits have you adopted?",
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
	],
	"Education & Development": [
		"What new skills did you learn this year?",
		"How have you grown intellectually?",
	],
	"Location & Tangibles": [
		"How has your living situation changed or improved?",
		"What meaningful objects did you acquire or let go of?",
	],
	"Adventure & Creativity": [
		"What new experiences did you have this year?",
		"How have you expressed your creativity?",
	],
	"Values & Purpose": [
		"How have your values been clarified or changed?",
		"In what ways did you live out your purpose?",
	],
	"State of the Self": [
		"How has your self-awareness grown?",
		"What personal challenges have you overcome?",
	],
}

export default function Home() {
	const [currentPrompt, setCurrentPrompt] = useState('')
	const [showList, setShowList] = useState(false)

	useEffect(() => {
        setCurrentPrompt(getRandomPrompt(prompts))
    }, [])

	const cyclePrompt = () => {
		setCurrentPrompt(getRandomPrompt(prompts, currentPrompt))
	}

	const selectPrompt = (prompt: string) => {
		setCurrentPrompt(prompt)
		setShowList(false)
	}

	const currentCategory = findPromptCategory(prompts, currentPrompt)

	return (
		<div className="flex h-screen bg-gradient-to-br from-blue-50 to-green-50">
			<PromptList
				prompts={prompts}
				isOpen={showList}
				onClose={() => setShowList(false)}
				onSelectPrompt={selectPrompt}
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
				<div className="text-sm text-blue-600 mb-4">{currentCategory}</div>
				<Prompt prompt={currentPrompt} onNext={cyclePrompt} />
			</main>
		</div>
	)
}

