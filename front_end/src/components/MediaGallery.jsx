import React from 'react'
import MediaItem from './MediaItem'

export default function MediaGallery({ items = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map(it => (
        <MediaItem key={it.id} item={it} />
      ))}
    </div>
  )
}
