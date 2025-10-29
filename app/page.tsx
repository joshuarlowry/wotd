import { getWordOfTheDay } from '../lib/wordOfTheDay'

export default function HomePage() {
  const entry = getWordOfTheDay()

  return (
    <main style={{ display: 'grid', placeItems: 'center', minHeight: '100dvh', padding: '3rem' }}>
      <div style={{ width: 'min(720px, 100%)' }}>
        <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '0.5rem' }}>Word of the Day</h1>
          <p style={{ color: '#666' }}>A minimal Next.js demo</p>
        </header>

        <section
          style={{
            borderRadius: '16px',
            padding: '1.5rem',
            border: '1px solid rgba(0,0,0,0.1)',
            background: 'color-mix(in oklab, canvas, canvasText 3%)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.05)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>{entry.word}</div>
              {entry.partOfSpeech && (
                <div style={{ color: '#666', fontStyle: 'italic', marginTop: '0.25rem' }}>{entry.partOfSpeech}</div>
              )}
            </div>
            <div style={{ color: '#666' }}>Date: {entry.date}</div>
          </div>

          <div style={{ marginTop: '1rem', fontSize: '1.125rem', lineHeight: 1.6 }}>{entry.definition}</div>

          {entry.example && (
            <blockquote style={{ margin: '1rem 0 0', paddingLeft: '1rem', borderLeft: '3px solid rgba(0,0,0,0.1)', color: '#555' }}>
              “{entry.example}”
            </blockquote>
          )}

          {entry.synonyms && entry.synonyms.length > 0 && (
            <div style={{ marginTop: '1rem', color: '#444' }}>
              <span style={{ fontWeight: 600 }}>Synonyms:</span>{' '}
              <span>{entry.synonyms.join(', ')}</span>
            </div>
          )}

          <div style={{ marginTop: '1rem', color: '#777', fontSize: '0.95rem' }}>Source: demo dataset</div>
        </section>

        <footer style={{ textAlign: 'center', marginTop: '1rem', color: '#777' }}>
          <small>
            API endpoint: <code>/api/word-of-the-day</code>
          </small>
        </footer>
      </div>
    </main>
  )
}
