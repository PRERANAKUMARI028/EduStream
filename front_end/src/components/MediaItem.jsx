import React, { useRef, useEffect } from 'react'

export default function MediaItem({ item }) {
  const mediaRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const media = mediaRef.current
    const canvas = canvasRef.current
    if (!media || !canvas) return
    const ctx = canvas.getContext('2d')

    function resizeCanvas() {
      canvas.width = media.clientWidth
      canvas.height = media.clientHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    function drawProgress() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const duration = media.duration || 1
      const current = media.currentTime || 0
      const pct = Math.max(0, Math.min(1, current / duration))
      // simple translucent progress bar at bottom
      ctx.fillStyle = 'rgba(255,255,255,0.08)'
      ctx.fillRect(0, canvas.height - 8, canvas.width, 8)
      ctx.fillStyle = 'rgba(34,197,94,0.9)' // greenish
      ctx.fillRect(0, canvas.height - 8, canvas.width * pct, 8)
      // title overlay
      ctx.font = '14px sans-serif'
      ctx.fillStyle = 'rgba(0,0,0,0.45)'
      ctx.fillRect(0, 0, canvas.width, 28)
      ctx.fillStyle = 'white'
      ctx.fillText(item.title || '', 8, 18)
    }

    media.addEventListener('timeupdate', drawProgress)
    media.addEventListener('loadedmetadata', drawProgress)

    return () => {
      media.removeEventListener('timeupdate', drawProgress)
      media.removeEventListener('loadedmetadata', drawProgress)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [item])

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-2">
      <div className="media-container">
        {item.type === 'video' ? (
          <video
            ref={mediaRef}
            className="w-full rounded"
            controls
            src={item.src}
            crossOrigin="anonymous"
          />
        ) : (
          <audio ref={mediaRef} className="w-full" controls src={item.src} />
        )}
        {/* overlay canvas */}
        <canvas ref={canvasRef} className="media-canvas rounded pointer-events-none" />
      </div>
      <div className="mt-2 text-sm">{item.title}</div>
    </div>
  )
}
