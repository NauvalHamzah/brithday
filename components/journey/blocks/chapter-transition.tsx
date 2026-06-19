'use client'

import { motion } from 'framer-motion'
import type { ChapterTransitionBlock } from '@/lib/journey-types'

export function ChapterTransition({ block }: { block: ChapterTransitionBlock }) {
  return (
    <div className="flex flex-col items-center text-center">
      {block.eyebrow ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary"
        >
          <span className="h-px w-8 bg-primary/50" />
          {block.eyebrow}
          <span className="h-px w-8 bg-primary/50" />
        </motion.div>
      ) : null}

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="font-serif mt-5 text-balance text-5xl font-semibold leading-tight text-ink sm:text-6xl"
      >
        {block.title}
      </motion.h2>

      {block.subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-hand mt-5 max-w-md text-pretty text-xl leading-relaxed text-ink-soft"
        >
          {block.subtitle}
        </motion.p>
      ) : null}
    </div>
  )
}
