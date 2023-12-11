import { createContext } from 'react'

export const uiContext = createContext({
	isDarkMode: false,
	setIsDarkMode: (isDarkMode: boolean) => {},
})