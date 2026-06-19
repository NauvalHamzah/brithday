import type { JourneyConfig } from './journey-types'

/**
 * Placeholder journey.
 *
 * Every string and photo here is temporary and meant to be replaced with real
 * memories. The structure demonstrates each interaction type at least once.
 */
export const journey: JourneyConfig = {
  chapters: [
    {
      id: 'opening',
      title: 'opening',
      blocks: [
        {
          type: 'chapterTransition',
          title: 'Hi Birthday Girl ❤️',
          subtitle: 'Come with me for a little journey through the years'
        }
      ]
    },
    {
      id: 'childhood',
      title: 'Childhood',
      blocks: [
        {
          type: 'chapterTransition',
          title: `Let's start from the very beginning.`,
        },
        {
          type: 'story',
          heading: 'A cute little girl',
          paragraphs: [           
            'loved dearly by Mommy and Daddy.',
          ],
          photo: {
            src: '/child/4.jpg',
            alt: '',
          },
        },
        {
          type: 'story',
          heading: 'Looks like posing for photos started early 😆',
          paragraphs: [           
          ],
          photo: {
            src: '/child/3.jpg',
            alt: '',
          },
        },
        {
          type: 'blurReveal',
          photo: {
            src: '/child/2.jpg',
            alt: '',
          },
          prompt: 'Slide to bring this moment back into focus.',
          caption: 'Do you even remember even take this photo?',
        },
        {
          type: 'story',
          heading: 'Spot the Birthday Girl 👀',
          paragraphs: [  
            'Which one are you? And what was happening that day? Lets see if your memory is as good as I think it is.'         
          ],
          photo: {
            src: '/child/1.jpg',
            alt: '',
          },
        },
        
      ]
    },
    {
      id: 'school',
      title: 'school',
      blocks: [
        {
          type: 'chapterTransition',
          title: 'Turning the Page',
          subtitle: 'The years went by, the little girl grew up, and many more memories were waiting just around the corner.'
        },
        {
          type: 'photoBomb',
          photos: [
            {src: '/school/1.jpg', alt: '',},
            {src: '/school/2.jpg', alt: '',},
          ],
          caption: 'Hi there, im an RSBI student!'
        },
        {
          type: 'photoBomb',
          photos: [
            {src: '/school/4.jpg', alt: '',},
            {src: '/school/6.jpg', alt: '',},
          ],
          caption: 'Somewhere in these school days, our paths crossed for the very first time.'
        },  
        {
          type: 'puzzle',
          grid: 2,
          photo: {
            src: '/school/5.jpg',
            alt: '',
          },
          prompt: 'Piece this early memory back together.',
          caption: 'Remember this selfie?',
        }, 
        {
          type: 'blurReveal',
          photo: {
            src: '/school/3.jpg',
            alt: '',
          },
          prompt: 'Slide to bring this moment back into focus.',
          caption: 'After the performance',
        },                     
      ]
    },
    {
      id: 'collage',
      title: 'Collage',
      blocks: [
        {
          type: 'chapterTransition',
          title: 'New Chapters',
          subtitle: 'New places, new people, and new dreams waiting to be chased.'
        },
        {
          type: 'photoBomb',
          photos: [
            { src: '/collage/7.jpg', alt: '', },
            { src: '/collage/9.jpg', alt: '', },
          ],
          caption: 'A new chapter brought new friendships. Some lasted for a season, and some became part of your story forever.'
        },
        {
          type: 'photoBomb',
          photos: [
            { src: '/collage/6.jpg', alt: '', },
            { src: '/collage/7.jpg', alt: '', },
          ],
          caption: 'Activist!!!'
        },
        {
          type: 'photoBomb',
          photos: [
            { src: '/collage/5.jpg', alt: '', },
            { src: '/collage/12.jpg', alt: '', },
            { src: '/collage/13.jpg', alt: '', },
          ],
          caption: 'Behind every achievement was hard work, dedication, and countless hours that most people never got to see.'
        },
        {
          type: 'photoBomb',
          photos: [
            { src: '/collage/3.jpg', alt: '', },
            { src: '/collage/4.jpg', alt: '', },
            { src: '/collage/1.jpg', alt: '', },            
          ],
          caption: 'Until finally You Made It 🎓'
        },  
      ]
    },
        {
      id: 'teaching',
      title: 'Teaching Days',
      blocks: [
        {
          type: 'chapterTransition',
          title: 'Doing your Passion',
          subtitle: 'You were learning, growing, and inspiring others along the way.'
        },
        {
          type: 'photoBomb',
          photos: [
            { src: '/career/2.jpg', alt: '', },
          ],
          caption: 'More than sharing knowledge, you shared your time, patience, and care. The best teachers are remembered not only for what they teach, but for how they make people feel.'
        },
        {
          type: 'photoBomb',
          photos: [
            { src: '/career/3.jpg', alt: '', },
          ],
          caption: 'Its easy to see why your students loved you. Your kindness, dedication, and genuine care left an impact far beyond the lessons themselves.'
        },
        {
          type: 'photoBomb',
          photos: [
            { src: '/career/1.jpg', alt: '', },
          ],
          caption: 'Whatever you do, you always give it your all. And somehow, achievements keep following wherever your hard work takes you.'
        },
      ]
    },
  ],
  ending: {
    message: 'You Are Loved',
    note: 'Every chapter, every road, every photo — they all lead here, to you.',
  },
}
