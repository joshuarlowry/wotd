import { NextResponse } from 'next/server'
import { getWordOfTheDay } from '../../../lib/wordOfTheDay'

export async function GET() {
  const entry = getWordOfTheDay()
  return NextResponse.json(entry, {
    headers: {
      // Cache for 60s at the edge; allow 5 minutes stale while revalidating
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  })
}
