import { getWordOfTheDay } from '../lib/wordOfTheDay'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function HomePage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const params = await searchParams
  const showFrame = params.frame === 'true' || params.frame === '1'
  
  const entry = getWordOfTheDay()
  
  // Generate a simple pronunciation (lowercase in brackets)
  const pronunciation = entry.word.toLowerCase()

  return (
    <main style={{ 
      display: 'grid', 
      placeItems: 'center', 
      minHeight: '100dvh', 
      padding: 'clamp(1rem, 5vw, 3rem)' 
    }}>
      <article 
        className={showFrame ? 'frame' : undefined}
        style={{ 
          width: 'min(520px, 100%)',
          padding: 'clamp(2rem, 6vw, 4rem) clamp(1.5rem, 5vw, 3rem)',
          aspectRatio: '4 / 5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* Word */}
        <h1 className="word">{entry.word}</h1>
        
        {/* Pronunciation, Part of Speech, Language */}
        <div className="meta">
          <span className="pronunciation">[{pronunciation}]</span>
          {entry.partOfSpeech && (
            <span className="part-of-speech">{entry.partOfSpeech}</span>
          )}
          <span className="language"> • English</span>
        </div>

        {/* Separator Line */}
        <hr className="separator" />

        {/* Definition */}
        <p className="definition">{entry.definition.toLowerCase()}</p>

        {/* See Also (Synonyms) */}
        {entry.synonyms && entry.synonyms.length > 0 && (
          <p className="see-also">
            <span className="see-also-label">see also:</span>{' '}
            {entry.synonyms.join(', ')}
          </p>
        )}
      </article>
    </main>
  )
}
