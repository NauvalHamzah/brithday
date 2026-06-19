'use client'

import type { ContentBlock } from '@/lib/journey-types'
import { ChapterTransition } from './blocks/chapter-transition'
import { PhotoBlock } from './blocks/photo-block'
import { StoryBlock } from './blocks/story-block'
import { CropReveal } from './blocks/crop-reveal'
import { BlurReveal } from './blocks/blur-reveal'
import { WhySpecial } from './blocks/why-special'
import { Puzzle } from './blocks/puzzle'
import { PhotoBomb } from './blocks/photo-bomb'

/**
 * Data-driven block renderer. Maps a content block to its presentation
 * component. Adding a new block type means adding a case here and a type in
 * journey-types.ts — content stays cleanly separated from presentation.
 */
export function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'chapterTransition':
      return <ChapterTransition block={block} />
    case 'photo':
      return <PhotoBlock block={block} />
    case 'story':
      return <StoryBlock block={block} />
    case 'cropReveal':
      return <CropReveal block={block} />
    case 'blurReveal':
      return <BlurReveal block={block} />
    case 'whySpecial':
      return <WhySpecial block={block} />
    case 'puzzle':
      return <Puzzle block={block} />
    case 'photoBomb':
      return <PhotoBomb block={block} />    
    default:
      return null
  }
}
