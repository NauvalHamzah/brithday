/**
 * Data model for the interactive memory journey.
 *
 * The journey is fully data-driven: every chapter is described by a config
 * object containing an ordered list of content blocks. The presentation layer
 * renders these blocks generically, so new memories can be added simply by
 * editing the journey data — no layout changes required.
 */

export type Photo = {
  /** Public path to the image, e.g. "/memories/childhood.png" */
  src: string
  /** Always provide descriptive alt text for accessibility. */
  alt: string
}

export type BlockType =
  | 'chapterTransition'
  | 'photo'
  | 'story'
  | 'cropReveal'
  | 'blurReveal'
  | 'whySpecial'
  | 'puzzle'

/** A short label shown to orient the reader as a new chapter opens. */
export interface ChapterTransitionBlock {
  type: 'chapterTransition'
  /** Small eyebrow text, e.g. "Chapter One" */
  eyebrow?: string
  title: string
  subtitle?: string
}

/** A simple polaroid photo with an optional handwritten caption. */
export interface PhotoBlock {
  type: 'photo'
  photo: Photo
  caption?: string
  /** Slight rotation for the scrapbook feel, in degrees. */
  rotation?: number
}

/** A passage of narrative text, optionally beside a photo. */
export interface StoryBlock {
  type: 'story'
  heading?: string
  /** Paragraphs of the story. Each string is rendered as its own paragraph. */
  paragraphs: string[]
  photo?: Photo
}

/** Reveal a cropped detail of a photo, then expand to the full image. */
export interface CropRevealBlock {
  type: 'cropReveal'
  photo: Photo
  /** Override the default prompt question. */
  question?: string
  /** Override the default reveal button label. */
  revealLabel?: string
  caption?: string
  story?: string
  /** Object-position focus for the crop, e.g. "50% 30%". */
  focus?: string
  zoom?: number
  translateX?: number
  translateY?: number
}

/** A blurred photo that the reader sharpens by dragging a slider. */
export interface BlurRevealBlock {
  type: 'blurReveal'
  photo: Photo
  prompt?: string
  caption?: string
  story?: string
}

/** An emotional prompt that expands to reveal why a photo was kept. */
export interface WhySpecialBlock {
  type: 'whySpecial'
  photo: Photo
  question?: string
  revealLabel?: string
  /** The heartfelt explanation, shown after the reader reveals it. */
  explanation: string
  story?: string
}

/** An image-reconstruction puzzle (2x2 or 3x3). */
export interface PuzzleBlock {
  type: 'puzzle'
  photo: Photo
  /** Grid size: 2 produces a 2x2 puzzle, 3 produces a 3x3 puzzle. */
  grid: 2 | 3
  prompt?: string
  caption?: string
}

type PhotoBombBlock = {
  type: 'photoBomb'
  photos: {
    src: string
    alt: string
  }[]
  caption?: string
}

export type ContentBlock =
  | ChapterTransitionBlock
  | PhotoBlock
  | StoryBlock
  | CropRevealBlock
  | BlurRevealBlock
  | WhySpecialBlock
  | PuzzleBlock
  | PhotoBombBlock

export interface Chapter {
  id: string
  title: string
  blocks: ContentBlock[]
}

export interface JourneyConfig {
  chapters: Chapter[]
  ending: {
    message: string
    note?: string
  }
}

/**
 * A flattened step in the journey. The controller walks a single linear
 * sequence of steps, where each step is one block belonging to a chapter.
 */
export interface JourneyStep {
  /** Stable key for animation + state isolation. */
  key: string
  chapterId: string
  chapterTitle: string
  block: ContentBlock
}

/** Flatten a journey config into an ordered list of renderable steps. */
export function flattenJourney(config: JourneyConfig): JourneyStep[] {
  const steps: JourneyStep[] = []
  for (const chapter of config.chapters) {
    chapter.blocks.forEach((block, index) => {
      steps.push({
        key: `${chapter.id}-${index}`,
        chapterId: chapter.id,
        chapterTitle: chapter.title,
        block,
      })
    })
  }
  return steps
}
