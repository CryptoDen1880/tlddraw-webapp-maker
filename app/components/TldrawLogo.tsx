
import { useState, useEffect, use, useContext } from 'react'
import { useBreakpoint } from '@tldraw/tldraw'
import logoWhite from '../logo-white.png'
import logoBlack from '../logo-white.png'
import Image from 'next/image'
import { useEditor } from '@tldraw/tldraw'
import { uiContext } from '../context/uiContext'

export function TldrawLogo() {
	const breakpoint = useBreakpoint()
	const { user } = useEditor()
	const { isDarkMode, setIsDarkMode } = useContext(uiContext)

	useEffect(() => {
		const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
		setIsDarkMode(prefersDarkMode)
		user.updateUserPreferences({ isDarkMode: prefersDarkMode })
	}, [user])

	return (
		<a
			className={`tldrawLogo ${breakpoint < 5 ? 'tldrawLogo__mobile' : ''}`}
			href="https://app.markup-ai.com/"
		>
			<Image src={isDarkMode ? logoWhite : logoBlack} style={{ width: '120px', height: 'auto' }} height={'200'} width={'120'} alt="MetaVisionAI" />
		</a>
	)
}
