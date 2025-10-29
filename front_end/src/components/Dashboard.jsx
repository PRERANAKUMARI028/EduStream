import React, { useEffect, useRef } from 'react'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default function Dashboard() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d')
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Course A', 'Course B', 'Course C', 'Course D'],
        datasets: [{
          label: 'Progress %',
          data: [80, 55, 40, 95],
          backgroundColor: 'rgba(99,102,241,0.8)'
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true, max: 100 } }
      }
    })
    return () => chart.destroy()
  }, [])

  return (
    <div className="bg-white dark:bg-gray-800 rounded p-4 shadow max-w-xl">
      <canvas ref={canvasRef} />
    </div>
  )
}
