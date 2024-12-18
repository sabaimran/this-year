import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

interface PromptProps {
	prompt: string
	onNext: () => void
}

export default function Prompt({ prompt, onNext }: PromptProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			key={prompt}
			transition={{
				type: "spring",
				stiffness: 200,
				damping: 20
			}}
			className="max-w-2xl w-full text-center relative"
		>
			<h2 className="text-3xl font-light text-blue-800 mb-8">{prompt}</h2>
			<Button
				onClick={onNext}
				variant="ghost"
				size="icon"
				className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 text-blue-600 hover:text-blue-800 hover:bg-blue-100 transition-colors duration-200"
			>
				<RefreshCw className="h-6 w-6" />
			</Button>
		</motion.div>
	)
}

