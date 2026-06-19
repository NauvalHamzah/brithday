'use client'

import { motion } from 'framer-motion'
import type { PhotoBlock as PhotoBlockType } from '@/lib/journey-types'
import { Polaroid } from '../polaroid'

export function PhotoBlock({ block }: { block: PhotoBlockType }) {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-sm"
      >
        <Polaroid
          photo={block.photo}
          caption={block.caption}
          rotation={block.rotation ?? -2}
        />
      </motion.div>
    </div>
  )
}
