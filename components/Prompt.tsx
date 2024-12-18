import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Check, RefreshCw, Trash2 } from "lucide-react"
import { PromptState } from "@/app/utils/promptUtils"

interface PromptProps {
	prompt: PromptState
	onNext: () => void
	deletePrompt: () => void
	markCompleted: () => void
}

export default function Prompt({ prompt, onNext, deletePrompt, markCompleted }: PromptProps) {
	const [hoveredButton, setHoveredButton] = useState<string | null>(null)

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			key={prompt.prompt}
			transition={{
				type: "spring",
				stiffness: 200,
				damping: 20
			}}
			className="max-w-2xl w-full text-center relative"
		>
			<h2 className="text-3xl font-light text-blue-800 mb-8">{prompt.prompt}</h2>
			<div className="flex gap-4 mt-4 justify-center">
				{/* <Button
					onClick={onNext}
					variant="outline"
					size="sm"
					className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors duration-200"
					onMouseEnter={() => setHoveredButton('refresh')}
					onMouseLeave={() => setHoveredButton(null)}
				>
					<RefreshCw className="h-4 w-4" />
					<AnimatePresence>
						{hoveredButton === 'refresh' && (
							<motion.span
								initial={{ width: 0, opacity: 0 }}
								animate={{ width: 'auto', opacity: 1 }}
								exit={{ width: 0, opacity: 0 }}
								className="ml-2 overflow-hidden whitespace-nowrap"
							>
								Refresh
							</motion.span>
						)}
					</AnimatePresence>
				</Button> */}
				<Button
					variant="outline"
					size="sm"
					className={`${prompt.completed ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'} hover:bg-opacity-80`}
					onClick={markCompleted}
					disabled={prompt.completed}
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
								{prompt.completed ? 'Completed' : 'Mark Completed'}
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
		</motion.div>
	)
}