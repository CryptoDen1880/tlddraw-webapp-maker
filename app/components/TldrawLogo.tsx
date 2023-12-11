
import { useState, useEffect, use, useContext } from 'react'
import { useBreakpoint } from '@tldraw/tldraw'
import logoWhite from '../brain-text-white.webp'
import logoBlack from '../brain-text-black.webp'
import Image from 'next/image'
import { useEditor } from '@tldraw/tldraw'
import { uiContext } from '../page'

export function TldrawLogo() {
	const breakpoint = useBreakpoint()
	const { user } = useEditor()
	const { isDarkMode, setIsDarkMode } = useContext(uiContext)

	useEffect(() => {
		setIsDarkMode(user.getIsDarkMode())
	}, [user])

	console.log('isDarkMode', isDarkMode)
	return (
		<a
			className={`tldrawLogo ${breakpoint < 5 ? 'tldrawLogo__mobile' : ''}`}
			href="https://metavision-ai.io/"
		>
			<Image src={isDarkMode ? logoWhite : logoBlack} style={{ width: '120px', height: 'auto' }} height={'200'} width={'120'} alt="MetaVisionAI" />
		</a>
	)
}
