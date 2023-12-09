import { useBreakpoint } from '@tldraw/tldraw'

export function TldrawLogo() {
	const breakpoint = useBreakpoint()
	return (
		<a
			className={`tldrawLogo ${breakpoint < 5 ? 'tldrawLogo__mobile' : ''}`}
			href="https://metavision-ai.io/"
		>
			<h1><span>meta</span>Vision<span>AI</span></h1>
		</a>
	)
}
