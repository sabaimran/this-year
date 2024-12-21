import { motion } from "framer-motion"
import { PromptState } from "@/app/utils/promptUtils"
import { Textarea } from "./ui/textarea"

interface PromptProps {
	prompt: PromptState
	onNext: () => void
	deletePrompt: () => void
	markCompleted: () => void
}


export default function Prompt({ prompt, deletePrompt, markCompleted }: PromptProps) {
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
			<Textarea
				className="w-full"
				placeholder="Write your response here..."
				rows={3}
			/>
		</motion.div>
	)
}