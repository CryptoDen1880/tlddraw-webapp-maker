'use client'

import { createContext, useState } from 'react'
import dynamic from 'next/dynamic'
import '@tldraw/tldraw/tldraw.css'
import { MakeRealButton } from './components/MakeRealButton'
import { TldrawLogo } from './components/TldrawLogo'
import { ResponseShapeUtil } from './ResponseShape/ResponseShape'
import { RiskyButCoolAPIKeyInput } from './components/RiskyButCoolAPIKeyInput'
const Tldraw = dynamic(async () => (await import('@tldraw/tldraw')).Tldraw, {
	ssr: false,
})

export const uiContext = createContext({
	isDarkMode: false,
	setIsDarkMode: (isDarkMode: boolean) => {},
})

const shapeUtils = [ResponseShapeUtil]

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false)

	function handleEvent(name: any, data: any) {
		// do something with the event
		if (name === 'toggle-dark-mode') {
			setIsDarkMode(!isDarkMode)
		}
	}

	return (
		<uiContext.Provider value={{ isDarkMode, setIsDarkMode }}>
			<div className="editor">
				<Tldraw
					persistenceKey="make-real"
					shareZone={<MakeRealButton />}
					shapeUtils={shapeUtils}
					onUiEvent={handleEvent}
				>
					<TldrawLogo />
					
					{/* <RiskyButCoolAPIKeyInput /> */}
				</Tldraw>
			</div>
		</uiContext.Provider>
	)
}


export default dynamic(() => Promise.resolve(App), {
	ssr: false,
});