'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { WhySpecialBlock } from '@/lib/journey-types'
import { ActionButton } from '../action-button'
import { Polaroid } from '../polaroid'

export function WhySpecial({ block }: { block: WhySpecialBlock }) {
  const [revealed, setRevealed] = useState(false)
  const question = block.question ?? 'Why do you think I kept this photo?'
  const revealLabel = block.revealLabel ?? 'Reveal'

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full max-w-xs">
        <Polaroid photo={block.photo} rotation={-1.5} />
      </div>

      <p className="font-serif max-w-md text-balance text-center text-xl font-medium leading-snug text-ink">
        {question}
      </p>

      <AnimatePresence mode="wait" initial={false}>
        {!revealed ? (
          <motion.div
            key="reveal-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ActionButton variant="soft" onClick={() => setRevealed(true)}>
              {revealLabel}
            </ActionButton>
          </motion.div>
        ) : (
          <motion.div
            key="explanation"
            initial={{ opacity: 0, height: 0, y: 8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md overflow-hidden"
          >
            <div className="paper-card relative rounded-3xl p-6 sm:p-7">
              <span
                aria-hidden
                className="font-serif pointer-events-none absolute -top-3 left-5 select-none text-5xl leading-none text-primary/30"
              >
                &ldquo;
              </span>
              <p className="text-pretty text-lg leading-relaxed text-ink">
                {block.explanation}
              </p>
              {block.story ? (
                <p className="font-hand mt-4 text-lg leading-snug text-ink-soft">
                  {block.story}
                </p>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
