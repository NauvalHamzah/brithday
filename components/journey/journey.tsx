'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { flattenJourney, type JourneyConfig } from '@/lib/journey-types'
import { BlockRenderer } from './block-renderer'
import { FinalScreen } from './final-screen'
import { ActionButton } from './action-button'



export function Journey({ config }: { config: JourneyConfig }) {
  const getInitialIndex = () => {
    if (typeof window === 'undefined') return 0

    const params = new URLSearchParams(window.location.search)
    const step = Number(params.get('step'))

    if (Number.isNaN(step)) return 0

    return Math.max(0, Math.min(step, steps.length - 1))
  }

  const steps = useMemo(() => flattenJourney(config), [config])
  const [index, setIndex] = useState(getInitialIndex)
  //const [index, setIndex] = useState(0)
  const topRef = useRef<HTMLDivElement | null>(null)

  const atEnd = index >= steps.length
  const step = atEnd ? null : steps[index]

  // Bring each new step into view from the top for a clean, page-turn feel.
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [index])

  if (atEnd) {
    return (
      <main className="journey-surface min-h-svh">
        <FinalScreen ending={config.ending} onRestart={() => setIndex(0)} />
      </main>
    )
  }

  const isTransition = step!.block.type === 'chapterTransition'
  const continueLabel =
    index === steps.length - 1 ? 'Finish the journey' : 'Continue'

  return (
    <main className="journey-surface flex min-h-svh flex-col">
      <div ref={topRef} aria-hidden className="h-0" />

      <div className="flex flex-1 flex-col items-center px-5 pb-32 pt-12 sm:pt-16">
        {/* Subtle chapter label (not a counter) for grounding */}
        {!isTransition ? (
          <motion.p
            key={`label-${step!.chapterId}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-primary/80"
          >
            {/* {step!.chapterTitle} */}
          </motion.p>
        ) : null}

        <div className="flex w-full max-w-xl flex-1 flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={step!.key}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <BlockRenderer block={step!.block} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Sticky continue affordance */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 flex justify-center bg-linear-to-t from-background via-background/85 to-transparent px-5 pb-7 pt-12">
        <div className="pointer-events-auto">
          <ActionButton onClick={() => setIndex((i) => i + 1)}>
            {continueLabel}
            <ArrowRight className="h-5 w-5" aria-hidden />
          </ActionButton>
        </div>
      </div>
    </main>
  )
}
