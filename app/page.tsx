export default function HomePage() {
  return (
    <main style={{ display: 'grid', placeItems: 'center', minHeight: '100dvh', padding: '3rem' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', marginBottom: '1rem' }}>Word of the Day</h1>
        <p style={{ color: '#666', fontSize: '1.125rem' }}>Starter Next.js app deployed on Vercel.</p>
      </div>
    </main>
  )
}
