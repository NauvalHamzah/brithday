'use client'

import { cn } from '@/lib/utils'
import type { Photo } from '@/lib/journey-types'

interface PolaroidProps {
  photo: Photo
  caption?: string
  rotation?: number
  className?: string
  imgClassName?: string
  priority?: boolean
  children?: React.ReactNode
}

/**
 * A polaroid-style frame: an off-white paper border around a square-ish photo
 * with room for a handwritten caption at the bottom.
 */
export function Polaroid({
  photo,
  caption,
  rotation = 0,
  className,
  imgClassName,
  children,
}: PolaroidProps) {
  return (
    <div
      className={cn('polaroid rounded-[2px] p-3 pb-4', className)}
      style={{ rotate: `${rotation}deg` }}
    >
      <div className="relative overflow-hidden rounded-[2px] bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src || '/placeholder.svg'}
          alt={photo.alt}
          crossOrigin="anonymous"
          className={cn('block h-auto w-full object-cover', imgClassName)}
        />
        {children}
      </div>
      {caption ? (
        <p className="font-hand mt-3 px-1 text-center text-lg leading-snug text-ink">
          {caption}
        </p>
      ) : null}
    </div>
  )
}
