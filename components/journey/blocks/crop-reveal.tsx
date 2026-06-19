'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { CropRevealBlock } from '@/lib/journey-types'
import { ActionButton } from '../action-button'
import { RevealedContent } from '../revealed-content'

export function CropReveal({ block }: { block: CropRevealBlock }) {
  const [revealed, setRevealed] = useState(false)
  const question = block.question ?? 'Do you recognize this memory?'
  const revealLabel = block.revealLabel ?? 'Reveal Memory'
  const focus = block.focus ?? '50% 50%'
  const zoom = block.zoom ?? 2.5
  const translateX = block.translateX ?? 0
  const translateY = block.translateY ?? 0

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="polaroid w-full max-w-sm rounded-[2px] p-3 pb-4">
        <div className="relative aspect-square overflow-hidden rounded-[2px] bg-muted">
          <motion.img
            src={block.photo.src || '/placeholder.svg'}
            alt={block.photo.alt}
            crossOrigin="anonymous"
            className="absolute inset-0 h-full w-full object-cover"
            initial={false}
            animate={{
              scale: revealed ? 1 : zoom,
              x: revealed ? 0 : translateX,
              y: revealed ? 0 : translateY
            }}
            style={{ objectPosition: focus }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Soft vignette while cropped to emphasize the mystery */}
          <AnimatePresence>
            {!revealed ? (
              <motion.div
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="pointer-events-none absolute inset-0"
                style={{
                  boxShadow:
                    'inset 0 0 60px 12px oklch(0.28 0.03 55 / 0.35)',
                }}
              />
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="prompt"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <p className="font-serif text-balance text-xl font-medium text-ink">
              {question}
            </p>
            <ActionButton onClick={() => setRevealed(true)}>
              {revealLabel}
            </ActionButton>
          </motion.div>
        ) : (
          <RevealedContent
            key="revealed"
            caption={block.caption}
            story={block.story}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
