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
            { src: '/school/1.jpg', alt: '', },
            { src: '/school/2.jpg', alt: '', },
          ],
          caption: `There are literally hundreds of photos of you from that period, but I bet you'd hide your face before making it through half of them. 😂❤️`
        },
        {
          type: 'photoBomb',
          photos: [
            { src: '/school/4.jpg', alt: '', },
            { src: '/school/6.jpg', alt: '', },
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
          caption: 'Sorry i cannot find a photo where we were in frame together',
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
          title: 'Passion looks good on you ❤️',
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
    {
      id: 'marriage',
      title: 'Marriage',
      blocks: [
        {
          type: 'chapterTransition',
          title: 'Life Had More Surprises Ahead',
          subtitle: 'After years of growing separately, somehow our paths crossed again.'
        },
        {
          type: 'story',
          heading: 'Hi There 👋',
          paragraphs: [
            'I was still a little shy, but I was already very happy to see you again.',
          ],
          photo: {
            src: '/marriage/1.jpg',
            alt: '',
          }
        },
        {
          type: 'puzzle',
          grid: 2,
          photo: {
            src: '/marriage/2.jpg',
            alt: '',
          },
          prompt: 'Solve this! When and Where?',
          caption: '9 ayam',
        },
        {
          type: 'photoBomb',
          photos: [
            { src: '/marriage/20.jpeg', alt: '', },
            { src: '/marriage/21.jpeg', alt: '', },
            { src: '/marriage/4.jpg', alt: '', },
          ],
          caption: 'Looking at these photos makes me wonder... when will we hike together again?'
        },
        {
          type: 'cropReveal',
          photo: {
            src: '/marriage/19.jpeg',
            alt: '',
          },
          focus: '25% 90%',
          zoom: 4,
          translateX: 350,
          translateY: 500,
          caption: 'How about this memory? I think youll know it pretty quickly.',
        },
        {
          type: 'photoBomb',
          photos: [
            { src: '/marriage/5.jpg', alt: '', },
            { src: '/marriage/17.jpeg', alt: '', },
            { src: '/marriage/18.jpeg', alt: '', },
            { src: '/marriage/22.jpeg', alt: '', },
            { src: '/marriage/23.jpeg', alt: '', },
            { src: '/marriage/25.jpeg', alt: '', },
            { src: '/marriage/26.jpeg', alt: '', },
            { src: '/marriage/27.jpeg', alt: '', },
          ],
          caption: 'Trips, laughter, random plans, and all the small moments that made us happy.'
        },
        {
          type: 'puzzle',
          grid: 3,
          photo: {
            src: '/marriage/10.jpeg',
            alt: '',
          },
          prompt: 'Piece this photo together... and remember the day we became a team.',
          caption: 'SAH',
        },
        {
          type: 'photoBomb',
          photos: [
            { src: '/marriage/7.jpeg', alt: '', },
            { src: '/marriage/8.jpeg', alt: '', },
            { src: '/marriage/9.jpeg', alt: '', },
          ],
          caption: 'Just Us. Our first adventure as husband and wife.'
        },
        {
          type: 'whySpecial',
          photo: {
            src: '/marriage/13.jpeg',
            alt: '',
          },
          question: 'Without any context, do you remember?',
          explanation:
            'That baso telor at Ragunan',
        },
        {
          type: 'photo',
          photo: { src: '/marriage/28.jpg', alt: '', },
          caption: 'This was the part you liked the least — when I had to leave and we had to face the distance again. Thank you for being strong through those days.'
        },
      ]
    },
    {
      id: 'pregnant',
      title: 'pregnant',
      blocks: [
        {
          type: 'chapterTransition',
          title: 'And Then Came Some Surprising News',
          subtitle: 'A tiny piece of news that would change our lives forever.'
        },
        {
          type: 'blurReveal',
          photo: {
            src: '/pregnant/7.jpeg',
            alt: '',
          },
          prompt: 'This will be too easy to guess',
          caption: 'At first, it was just a small object. But it carried the biggest surprise we could have imagined.',
        },
        {
          type: 'puzzle',
          grid: 2,
          photo: {
            src: '/pregnant/8.jpg',
            alt: '',
          },
          caption: 'Someone Was Saying Hello 👶',
          prompt: 'Put this memory back together and meet the little person who was already stealing our hearts.',
        },
        {
          type: 'photoBomb',
          photos: [
            { src: '/pregnant/4.jpeg', alt: '', },
            { src: '/pregnant/1.jpeg', alt: '', },
            { src: '/pregnant/2.jpeg', alt: '', },
            { src: '/pregnant/5.jpeg', alt: '', },
          ],
          caption: 'Just the two of us... and someone quietly joining every photo.'
        },
        {
          type: 'photoBomb',
          photos: [
            { src: '/pregnant/3.jpeg', alt: '', },
            { src: '/pregnant/6.jpeg', alt: '', },
          ],
          caption: `Pregnancy wasn't always easy. There were difficult days, uncomfortable moments, and challenges along the way, more than these photos can show. But you kept going, carrying our little one with so much strength and love.`
        },
      ]
    },
    {
      id: 'motherhood',
      title: 'motherhood',
      blocks: [
        {
          type: 'chapterTransition',
          title: 'And Then You deliver',
          subtitle: 'After months of waiting, guessing, and dreaming, the day finally arrived.'
        },
        {
          type: 'whySpecial',
          photo: {
            src: '/motherhood/11.jpeg',
            alt: '',
          },
          question: 'Why is this photo special?',
          explanation:
            'Because behind this smile was one of the hardest and bravest things youve ever done.',
        },
        {
          type: 'photoBomb',
          photos: [
            { src: '/motherhood/9.jpeg', alt: '', },
            { src: '/motherhood/10.jpeg', alt: '', },
          ],
          caption: `It's hard to believe he was ever this small.`
        },
        {
          type: 'cropReveal',
          photo: {
            src: '/motherhood/15.jpeg',
            alt: '',
          },
          focus: '25% 90%',
          zoom: 4,
          translateX: -150,
          translateY: 150,
          caption: `After spending every day together for three months, it was time to go back to work. I know it wasn't easy.`,
        },
        {
          type: 'photo',
          photo: { src: '/motherhood/17.jpeg', alt: '', },
          caption: 'No matter how tired you were, you kept showing up, giving your love, your energy, and your best to our little boy.'
        },
        {
          type: 'whySpecial',
          photo: {
            src: '/motherhood/16.jpeg',
            alt: '',
          },
          question: 'Why is this photo special?',
          explanation:
            `You probably won't agree, but I think you look beautiful here. Not because everything is perfect, but because this is what love looks like.`,
        },
        {
          type: 'photo',
          photo: { src: '/motherhood/12.jpeg', alt: '', },
          caption: 'The sleepless nights, the worries, the endless energy you give every day... all for this smile.'
        },
        {
          type: 'photoBomb',
          photos: [
            { src: '/motherhood/13.jpeg', alt: '', },
            { src: '/motherhood/8.jpeg', alt: '', },
            { src: '/motherhood/14.jpeg', alt: '', },
            { src: '/motherhood/7.jpeg', alt: '', },
            { src: '/motherhood/6.jpeg', alt: '', },
            { src: '/motherhood/1.jpeg', alt: '', },
            { src: '/motherhood/3.jpeg', alt: '', },
          ],
          caption: 'Some of my favorite memories are the ordinary days we spend together.'
        },
      ]
    },
    {
      id: 'ending',
      title: 'ending',
      blocks: [
        {
          type: 'chapterTransition',
          title: 'And Here We Are',
          subtitle: 'From a little girl with big dreams to the incredible woman, wife, and mother you are today. Thank you for letting me be part of your journey.'
        },
        {
          type: 'chapterTransition',
          title: 'On Your Birthday',
          subtitle: `Thank you.
                  Thank you for every sacrifice that often goes unnoticed.
                  Thank you for your patience, your strength, and your love.
                  Thank you for being such a wonderful wife and an amazing mother to our little boy.`
        },
        {
          type: 'chapterTransition',
          title: 'My Prayer For You',
          subtitle: `May Allah always bless you with good health, happiness, and peace.
May He protect you in every step you take, ease every burden you carry, and fill your heart with joy and contentment.
May all the kindness you give to others return to you many times over.`
        },
        {
          type: 'chapterTransition',
          title: 'And my Hope',
          subtitle: `I hope you continue to chase your dreams, discover new happiness, and create many beautiful memories in the years ahead.
I hope life will be kind to you.
And whenever it isn't, I hope you remember that you never have to face it alone.`
        },
        {
          type: 'chapterTransition',
          title: 'One Last Thing',
          subtitle: `No matter how many years pass,
no matter how much life changes,
I hope you never forget this:`
        }
      ]
    },
  ],
  ending: {
    message: 'You Are Loved',
    note: 'Happy Birthday, Sayang.',
  },
}
