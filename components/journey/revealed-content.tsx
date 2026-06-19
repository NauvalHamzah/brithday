'use client'

import { motion } from 'framer-motion'

interface RevealedContentProps {
  caption?: string
  story?: string
}

/**
 * The caption + short story shown once an interactive block is completed.
 * Animates in gently to reward the reader.
 */
export function RevealedContent({ caption, story }: RevealedContentProps) {
  if (!caption && !story) return null
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center gap-2 text-center"
    >
      {caption ? (
        <p className="font-hand text-2xl leading-snug text-ink">{caption}</p>
      ) : null}
      {story ? (
        <p className="max-w-md text-pretty text-base leading-relaxed text-ink-soft">
          {story}
        </p>
      ) : null}
    </motion.div>
  )
}
