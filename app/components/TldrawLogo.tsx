import { useBreakpoint } from '@tldraw/tldraw'

export function TldrawLogo() {
	const breakpoint = useBreakpoint()
	return (
		<a
			className={`tldrawLogo ${breakpoint < 5 ? 'tldrawLogo__mobile' : ''}`}
			href="https://1c03-2a02-c7c-9a7b-af00-98b-fd65-d998-c4ea.ngrok-free.app/"
		>
			<h1><span>meta</span>Vision<span>AI</span></h1>
		</a>
	)
}
