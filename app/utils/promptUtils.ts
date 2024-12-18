export function getRandomPrompt(prompts: Record<string, string[]>, currentPrompt?: string): string {
	const allPrompts = Object.values(prompts).flat()
	let newPrompt: string
	do {
		newPrompt = allPrompts[Math.floor(Math.random() * allPrompts.length)]
	} while (newPrompt === currentPrompt && allPrompts.length > 1)
	return newPrompt
}

export function findPromptCategory(prompts: Record<string, string[]>, prompt: string): string {
	for (const [category, categoryPrompts] of Object.entries(prompts)) {
		if (categoryPrompts.includes(prompt)) {
			return category
		}
	}
	return "'Uncategorized'"
}

