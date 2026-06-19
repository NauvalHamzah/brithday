'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { PhotoBlock } from '@/lib/journey-types'

type PhotoBombBlock = {
  photos: PhotoBlock['photo'][]
  caption?: string
}



export function PhotoBomb({ block }: { block: PhotoBombBlock }) {
  const [current, setCurrent] = useState(0)

  const remainingPhotos = block.photos.slice(current)

  const handleNext = () => {
    if (current < block.photos.length - 1) {
      setCurrent((prev) => prev + 1)
    }
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative h-[420px] w-full max-w-sm">
        <AnimatePresence>
          {remainingPhotos.map((photo, index) => {
            const isTop = index === 0

            const rotation = [-4, 3, -2, 5, -1][index % 5]

            return (
              <motion.div
                key={`${photo.src}-${current}-${index}`}
                className="absolute inset-0 cursor-pointer"
                style={{
                  zIndex: remainingPhotos.length - index,
                }}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1 - index * 0.03,
                  y: index * 12,
                  rotate: rotation,
                }}
                exit={
                  isTop
                    ? {
                        x: 500,
                        rotate: rotation + 15,
                        opacity: 0,
                        transition: {
                          duration: 0.5,
                        },
                      }
                    : undefined
                }
                onClick={isTop ? handleNext : undefined}
              >
                <div className="polaroid h-full rounded-[2px] p-3 pb-4 shadow-lg">
                  <img
                    src={photo.src || '/placeholder.svg'}
                    alt={photo.alt}
                    className="h-full w-full rounded-[2px] object-cover"
                  />
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {current < block.photos.length - 1 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-muted-foreground"
        >
          Tap the photo to see the next memory
        </motion.p>
      )}

      {current === block.photos.length - 1 && block.caption && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-sm text-center"
        >
          <p className="font-serif text-lg text-ink">{block.caption}</p>
        </motion.div>
      )}
    </div>
  )
}