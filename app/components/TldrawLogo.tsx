import { useBreakpoint } from '@tldraw/tldraw'
import logo from '../brain-text.webp'
import Image from 'next/image'

export function TldrawLogo() {
	const breakpoint = useBreakpoint()
	return (
		<a
			className={`tldrawLogo ${breakpoint < 5 ? 'tldrawLogo__mobile' : ''}`}
			href="https://metavision-ai.io/"
		>
			<Image src={logo} style={{ width: '120px', height: 'auto' }} height={'200'} width={'120'} alt="MetaVisionAI" />
		</a>
	)
}
