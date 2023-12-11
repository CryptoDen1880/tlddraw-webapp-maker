import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export const runtime = 'edge'; // 'nodejs' is the default
 
export async function POST(request: NextRequest) {
  if (request.body === null) throw new Error('No body found');

  const body = await request.json() || {}

  const apiKey = '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'

	if (!apiKey) {
		throw new Error(
			'You need to provide an API key. Make sure OPENAI_API_KEY is set in your .env file.'
		)
	}

	try {
		const repsonse = await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
			},
			body: JSON.stringify(body),
		})

    return NextResponse.json(await repsonse.json());
	} catch (e) {
		console.error(e)
		//throw new Error('Sorry, there was an error fetching from OpenAI')
    return NextResponse.json(
      {
        body: e,
        query: request.nextUrl.search,
        cookies: request.cookies.getAll(),
      },
      {
        status: 500,
      },
    );
	}
}