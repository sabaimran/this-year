import { PromptState } from '@/app/utils/promptUtils'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface SummaryProps {
    promptState: {
        reflecting: { [key: string]: PromptState }
        prospecting: { [key: string]: PromptState }
    }
    setShowSummary: (showSummary: boolean) => void
}

const Summary = ({ promptState, setShowSummary }: SummaryProps) => {

    const [allCompletedPrompts, setAllCompletedPrompts] = useState<{ prompt: PromptState, type: string }[]>([])

    useEffect(() => {
        const reflectingCompleted = Object.values(promptState.reflecting)
            .filter(prompt => prompt.completed)
            .map(prompt => ({ prompt, type: 'reflecting' }))
        const prospectingCompleted = Object.values(promptState.prospecting)
            .filter(prompt => prompt.completed)
            .map(prompt => ({ prompt, type: 'prospecting' }))

        setAllCompletedPrompts([...reflectingCompleted, ...prospectingCompleted])
    }, [promptState])

    return (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-50 to-green-50 p-4">
            <h1 className="text-3xl font-bold text-blue-600 mb-8">2024</h1>
            {allCompletedPrompts.length > 0 ? (
                <div className="w-full max-w-4xl space-y-4 max-h-screen overflow-y-auto">
                    {allCompletedPrompts.map(({ prompt, type }, index) => (
                        <motion.div
                            key={index}
                            className={`bg-white p-4 rounded-lg shadow-md ${type === 'reflecting' ? 'border-blue-600' : 'border-green-600'}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h2 className={`text-xl font-semibold mb-2 ${type === 'reflecting' ? 'text-blue-700' : 'text-green-700'}`}>{prompt.prompt}</h2>
                            <p className="text-gray-700">{prompt.response}</p>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No completed prompts yet.</p>
            )}
            <Button
                variant="outline"
                size="sm"
                className="mt-8"
                onClick={() => setShowSummary(false)}
            >
                Go Back
            </Button>
        </div>
    )
}

export default Summary