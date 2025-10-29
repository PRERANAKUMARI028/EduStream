import React from 'react'
import DarkToggle from './components/DarkToggle'
import MediaGallery from './components/MediaGallery'
import SignupForm from './components/SignupForm'
import Dashboard from './components/Dashboard'

export default function App() {
  const sampleMedia = [
    { id: 'vid1', type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Sample Video: Big Buck Bunny' },
    { id: 'aud1', type: 'audio', src: 'https://www.w3schools.com/html/horse.mp3', title: 'Sample Audio' }
  ]

  return (
    
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <header className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">EduStream — Prototype</h1>
        <DarkToggle />
      </header>

      <main className="max-w-5xl mx-auto p-4 space-y-8">
        <section>
          <h2 className="text-lg font-medium mb-2">Media Gallery</h2>
          <MediaGallery items={sampleMedia} />
        </section>

        <section>
          <h2 className="text-lg font-medium mb-2">Signup (Realtime validation)</h2>
          <SignupForm />
        </section>

        <section>
          <h2 className="text-lg font-medium mb-2">Dashboard (Analytics sample)</h2>
          <Dashboard />
        </section>
      </main>
    </div>
  )
}
