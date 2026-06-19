'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ActionButtonProps {
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'soft'
  className?: string
  type?: 'button' | 'submit'
}

/**
 * A warm, rounded button used for in-block actions (Reveal Memory, etc.)
 * and journey navigation. Includes gentle press/hover motion.
 */
export function ActionButton({
  onClick,
  children,
  variant = 'primary',
  className,
  type = 'button',
}: ActionButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold tracking-wide shadow-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        variant === 'primary'
          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
          : 'border border-border bg-paper text-ink hover:bg-secondary',
        className,
      )}
    >
      {children}
    </motion.button>
  )
}
