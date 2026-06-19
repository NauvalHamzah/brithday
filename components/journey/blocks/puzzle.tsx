'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { PuzzleBlock } from '@/lib/journey-types'
import { cn } from '@/lib/utils'
import { ActionButton } from '../action-button'
import { RevealedContent } from '../revealed-content'

function shuffle<T>(input: T[]): T[] {
  const arr = [...input]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function isSolved(order: number[]): boolean {
  return order.every((tileId, cell) => tileId === cell)
}

function makeShuffledOrder(count: number): number[] {
  const identity = Array.from({ length: count }, (_, i) => i)
  if (count <= 1) return identity

  let order = shuffle(identity)
  let guard = 0

  while (isSolved(order) && guard < 20) {
    order = shuffle(identity)
    guard++
  }

  return order
}

function tileBackgroundPosition(tileId: number, grid: number): string {
  const row = Math.floor(tileId / grid)
  const col = tileId % grid

  const x = (col / (grid - 1)) * 100
  const y = (row / (grid - 1)) * 100

  return `${x}% ${y}%`
}

export function Puzzle({ block }: { block: PuzzleBlock }) {
  const grid = block.grid
  const count = grid * grid

  const prompt =
    block.prompt ??
    `Rebuild the photo — tap two tiles to swap them, or drag one onto another.`

  const [order, setOrder] = useState<number[]>(() =>
    makeShuffledOrder(count),
  )
  const [selected, setSelected] = useState<number | null>(null)
  const [solved, setSolved] = useState(false)
  const [moves, setMoves] = useState(0)

  // NEW: store image aspect ratio
  const [aspectRatio, setAspectRatio] = useState<number | null>(null)

  const dragFrom = useRef<number | null>(null)

  const swap = useCallback((a: number, b: number) => {
    if (a === b) return

    setOrder((prev) => {
      const next = [...prev]

      ;[next[a], next[b]] = [next[b], next[a]]

      if (isSolved(next)) {
        setTimeout(() => setSolved(true), 150)
      }

      return next
    })

    setMoves((m) => m + 1)
  }, [])

  const handleCellActivate = useCallback(
    (cell: number) => {
      if (solved) return

      if (selected === null) {
        setSelected(cell)
        return
      }

      if (selected === cell) {
        setSelected(null)
        return
      }

      swap(selected, cell)
      setSelected(null)
    },
    [selected, solved, swap],
  )

  const reshuffle = useCallback(() => {
    setOrder(makeShuffledOrder(count))
    setSelected(null)
    setSolved(false)
    setMoves(0)
  }, [count])

  useEffect(() => {
    if (solved && !isSolved(order)) {
      setSolved(false)
    }
  }, [order, solved])

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Hidden image used to detect natural dimensions */}
      <img
        src={block.photo.src}
        alt=""
        className="hidden"
        onLoad={(e) => {
          const img = e.currentTarget

          if (img.naturalWidth && img.naturalHeight) {
            setAspectRatio(
              img.naturalWidth / img.naturalHeight,
            )
          }
        }}
      />

      <p className="max-w-sm text-pretty text-center text-base leading-relaxed text-ink">
        {prompt}
      </p>

      <div className="polaroid w-full max-w-sm rounded-[2px] p-3 pb-4">
        <div
          className="relative overflow-hidden rounded-[2px] bg-muted"
          style={{
            aspectRatio: aspectRatio ?? '4 / 3',
          }}
        >
          <div
            className="grid h-full w-full gap-[3px] bg-paper-edge p-[3px]"
            style={{
              gridTemplateColumns: `repeat(${grid}, minmax(0, 1fr))`,
            }}
            role="group"
            aria-label={`${grid} by ${grid} image reconstruction puzzle`}
          >
            {order.map((tileId, cell) => {
              const correctHere = tileId === cell

              return (
                <motion.button
                  key={cell}
                  type="button"
                  layout
                  disabled={solved}
                  onClick={() => handleCellActivate(cell)}
                  draggable={!solved}
                  onDragStart={() => {
                    dragFrom.current = cell
                    setSelected(cell)
                  }}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault()

                    if (dragFrom.current !== null) {
                      swap(dragFrom.current, cell)
                    }

                    dragFrom.current = null
                    setSelected(null)
                  }}
                  whileTap={{ scale: 0.94 }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                  className={cn(
                    'relative cursor-pointer overflow-hidden rounded-[2px] outline-none',
                    'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
                    selected === cell &&
                      'z-10 ring-2 ring-primary ring-offset-1 ring-offset-paper',
                  )}
                  style={{
                    backgroundImage: `url(${block.photo.src})`,
                    backgroundSize: `${grid * 100}% ${grid * 100}%`,
                    backgroundPosition:
                      tileBackgroundPosition(tileId, grid),
                  }}
                  aria-label={`Tile currently in position ${
                    cell + 1
                  }${correctHere ? ', correct' : ''}`}
                >
                  <span
                    aria-hidden
                    className={cn(
                      'pointer-events-none absolute inset-0 transition-opacity duration-300',
                      correctHere && !solved
                        ? 'bg-accent/15 opacity-100'
                        : 'opacity-0',
                    )}
                  />
                </motion.button>
              )
            })}
          </div>

          <AnimatePresence>
            {solved ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: 'easeOut',
                }}
                className="absolute inset-0"
              >
                <img
                  src={block.photo.src || '/placeholder.svg'}
                  alt={block.photo.alt}
                  crossOrigin="anonymous"
                  className="h-full w-full object-contain"
                />

                <motion.span
                  aria-hidden
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="pointer-events-none absolute inset-0 ring-2 ring-inset ring-accent/70"
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {solved ? (
          <RevealedContent
            key="done"
            caption={block.caption}
          />
        ) : (
          <motion.div
            key="controls"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-3"
          >
            <p className="text-sm font-medium text-ink-soft">
              {moves === 0
                ? 'Select a tile to begin.'
                : `Moves: ${moves}`}
            </p>

            <ActionButton
              variant="soft"
              onClick={reshuffle}
            >
              Shuffle again
            </ActionButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}