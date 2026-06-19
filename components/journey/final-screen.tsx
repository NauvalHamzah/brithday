'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import type { JourneyConfig } from '@/lib/journey-types'
import { ActionButton } from './action-button'

interface FinalScreenProps {
  ending: JourneyConfig['ending']
  onRestart: () => void
}

export function FinalScreen({ ending, onRestart }: FinalScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex min-h-svh flex-col items-center justify-center px-6 py-20 text-center"
    >
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 200, damping: 14 }}
      >
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{
            delay: 1.2,
            duration: 2.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Heart
            className="h-14 w-14 text-primary"
            fill="currentColor"
            aria-hidden
          />
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="font-serif mt-8 text-balance text-6xl font-semibold leading-tight text-ink sm:text-7xl"
      >
        {ending.message}
      </motion.h1>

      {ending.note ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="font-hand mt-6 max-w-md text-pretty text-xl leading-relaxed text-ink-soft"
        >
          {ending.note}
        </motion.p>
      ) : null}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.2 }}
        className="mt-12"
      >
        <ActionButton variant="soft" onClick={onRestart}>
          Begin again
        </ActionButton>
      </motion.div>
    </motion.div>
  )
}
