'use client'

import { motion } from 'framer-motion'
import type { StoryBlock as StoryBlockType } from '@/lib/journey-types'
import { Polaroid } from '../polaroid'

export function StoryBlock({ block }: { block: StoryBlockType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center gap-7"
    >
      {block.photo ? (
        <div className="w-full max-w-xs">
          <Polaroid photo={block.photo} rotation={2} />
        </div>
      ) : null}

      <div className="paper-card w-full rounded-3xl p-6 sm:p-8">
        {block.heading ? (
          <h3 className="font-serif mb-4 text-balance text-2xl font-semibold leading-snug text-ink sm:text-3xl text-center">
            {block.heading}
          </h3>
        ) : null}
        <div className="flex flex-col gap-4">
          {block.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-pretty text-lg leading-relaxed text-ink text-center"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
