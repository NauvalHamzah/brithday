'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { BlurRevealBlock } from '@/lib/journey-types'
import { RevealedContent } from '../revealed-content'

const MAX_BLUR = 18

export function BlurReveal({ block }: { block: BlurRevealBlock }) {
  const [value, setValue] = useState(0)
  const [aspectRatio, setAspectRatio] = useState<number | null>(null)

  const prompt = block.prompt ?? 'Slide to bring this memory into focus.'

  const revealed = value >= 99
  const blur = useMemo(() => ((100 - value) / 100) * MAX_BLUR, [value])

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="polaroid w-full max-w-sm rounded-[2px] p-3 pb-4">
        <div
          className="relative overflow-hidden rounded-[2px] bg-muted"
          style={{
            aspectRatio: aspectRatio ?? '1 / 1', // fallback while loading
          }}
        >
          <img
            src={block.photo.src || '/placeholder.svg'}
            alt={block.photo.alt}
            crossOrigin="anonymous"
            onLoad={(e) => {
              const img = e.currentTarget
              setAspectRatio(img.naturalWidth / img.naturalHeight)
            }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
            style={{
              filter: `blur(${blur}px)`,
              transform: revealed ? 'scale(1)' : 'scale(1.06)',
            }}
          />

          <AnimatePresence>
            {revealed && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="pointer-events-none absolute inset-0 ring-2 ring-inset ring-accent/60"
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="slider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex w-full max-w-sm flex-col items-center gap-4 text-center"
          >
            <p className="text-pretty text-base leading-relaxed text-ink">
              {prompt}
            </p>

            <input
              id={`blur-${block.photo.src}`}
              type="range"
              min={0}
              max={100}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="journey-range w-full"
              aria-valuetext={`${value}% revealed`}
            />

            <div className="flex w-full items-center justify-between text-xs font-medium uppercase tracking-widest text-ink-soft">
              <span>Blurred</span>
              <span>Clear</span>
            </div>
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