'use client'

import dynamic from 'next/dynamic'
import '@tldraw/tldraw/tldraw.css'
import { MakeRealButton } from './components/MakeRealButton'
import { TldrawLogo } from './components/TldrawLogo'
import { ResponseShapeUtil } from './ResponseShape/ResponseShape'
import { RiskyButCoolAPIKeyInput } from './components/RiskyButCoolAPIKeyInput'
const Tldraw = dynamic(async () => (await import('@tldraw/tldraw')).Tldraw, {
	ssr: false,
})

const shapeUtils = [ResponseShapeUtil]

function App() {
	return (
		<div className="editor">
			<Tldraw
				persistenceKey="make-real"
				shareZone={<MakeRealButton />}
				shapeUtils={shapeUtils}
			>
				<TldrawLogo />
				
				{/* <RiskyButCoolAPIKeyInput /> */}
			</Tldraw>
		</div>
	)
}


export default dynamic(() => Promise.resolve(App), {
	ssr: false,
});