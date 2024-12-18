import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface PromptListProps {
	prompts: Record<string, string[]>
	isOpen: boolean
	onClose: () => void
	onSelectPrompt: (prompt: string) => void
}

export default function PromptList({ prompts, isOpen, onClose, onSelectPrompt }: PromptListProps) {
	return (
		<motion.div
			initial={{ x: -320 }}
			animate={{ x: isOpen ? 0 : -320 }}
			transition={{ duration: 0.3, ease: "easeInOut" }}
			className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-lg overflow-y-auto z-10"
		>
			<div className="sticky top-0 bg-white z-20 p-4 flex justify-between items-center border-b">
				<h2 className="text-xl font-semibold text-blue-800">All Prompts</h2>
				<Button variant="ghost" size="icon" onClick={onClose}>
					<X />
				</Button>
			</div>
			<div className="p-4">
				{Object.entries(prompts).map(([category, categoryPrompts]) => (
					<div key={category} className="mb-6">
						<h3 className="text-lg font-medium text-blue-600 mb-2">{category}</h3>
						<ul className="space-y-2">
							{categoryPrompts.map((prompt, index) => (
								<li
									key={index}
									className="text-gray-700 hover:bg-blue-50 p-2 rounded transition-colors duration-200 cursor-pointer"
									onClick={() => onSelectPrompt(prompt)}
								>
									{prompt}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</motion.div>
	)
}

