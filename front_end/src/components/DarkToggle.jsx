import { useEffect, useState } from 'react'

export default function DarkToggle() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('edustream:dark')
      if (saved !== null) return JSON.parse(saved)
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch {
      return false
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('edustream:dark', JSON.stringify(dark))
    } catch {}
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <button
      onClick={() => setDark(d => !d)}
      className="px-3 py-1 rounded-md border dark:border-gray-700"
      aria-pressed={dark}
    >
      {dark ? '☾ Dark' : '☼ Light'}
    </button>
  )
}
