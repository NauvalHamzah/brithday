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
      id: 'childhood',
      title: 'Childhood',
      blocks: [
        {
          type: 'chapterTransition',
          title: 'Childhood',
          subtitle: 'Where it all began — small hands and endless summers.',
        },
        {
          type: 'photoBomb',
          photos: [
            {src: '/memories/childhood.png', alt: 'Two young children playing in a sunlit backyard',},
            {src: '/memories/growing-up.png', alt: 'Two young children playing in a sunlit backyard',},
            {src: '/memories/high-school.png', alt: 'Two young children playing in a sunlit backyard',}
          ],
        },
        {
          type: 'puzzle',
          grid: 2,
          photo: {
            src: '/memories/childhood.png',
            alt: 'Two young children playing in a sunlit backyard',
          },
          prompt: 'Piece this early memory back together.',
          caption: 'The summer we were inseparable.',
        },
        {
          type: 'cropReveal',
          photo: {
            src: '/memories/childhood.png',
            alt: 'Two young children playing in a sunlit backyard',
          },
          focus: '25% 90%',
          zoom: 3,
          translateX: 100,
          translateY: -200,
          caption: 'Golden hour, grass stains, and not a care in the world.',
          story:
            'I keep coming back to this one. You can almost hear us laughing.',
        },
      ],
    },
    {
      id: 'growing-up',
      title: 'Growing Up',
      blocks: [
        {
          type: 'chapterTransition',
          eyebrow: 'Chapter Two',
          title: 'Growing Up',
          subtitle: 'Bigger bikes, bigger dreams, the same hearts.',
        },
        {
          type: 'story',
          heading: 'Learning the long way',
          paragraphs: [
            'Somewhere along the way the days got longer and the world got wider. We learned how to fall and how to get back up — usually within the same afternoon.',
            'The neighborhood became a map of small adventures, and we knew every shortcut by heart.',
          ],
          photo: {
            src: '/memories/growing-up.png',
            alt: 'Two friends riding bicycles down a tree-lined street',
          },
        },
        {
          type: 'cropReveal',
          photo: {
            src: '/memories/growing-up.png',
            alt: 'Two friends riding bicycles down a tree-lined street',
          },
          focus: '50% 50%',
          zoom: 3,
          translateX: 100,
          translateY: -200,          
          caption: 'Racing home before the streetlights came on.',
          story: 'We thought those bikes could take us anywhere. They did.',
        },
      ],
    },
    {
      id: 'high-school',
      title: 'High School',
      blocks: [
        {
          type: 'chapterTransition',
          eyebrow: 'Chapter Three',
          title: 'High School',
          subtitle: 'Loud hallways, late nights, and finding ourselves.',
        },
        {
          type: 'story',
          heading: 'The in-between years',
          paragraphs: [
            'Everything felt enormous — every test, every crush, every Friday night. We were figuring out who we wanted to be, one mistake at a time.',
            'And through all of it, there was always someone saving you a seat.',
          ],
          photo: {
            src: '/memories/high-school.png',
            alt: 'Teenage friends laughing together at a school event',
          },
        },
        {
          type: 'cropReveal',
          photo: {
            src: '/memories/high-school.png',
            alt: 'Teenage friends laughing together at a school event',
          },
          focus: '50% 40%',
          caption: 'Caught mid-laugh, like always.',
          story: 'Nobody could make me laugh quite like this.',
        },
        {
          type: 'whySpecial',
          photo: {
            src: '/memories/high-school.png',
            alt: 'Teenage friends laughing together at a school event',
          },
          explanation:
            'Because this is the exact moment I stopped feeling alone. You looked over, and somehow I knew everything would be okay.',
          story:
            'I kept this photo in my locker for three years. It never stopped meaning that.',
        },
      ],
    },
    {
      id: 'different-roads',
      title: 'Different Roads',
      blocks: [
        {
          type: 'chapterTransition',
          eyebrow: 'Chapter Four',
          title: 'Different Roads',
          subtitle: 'The chapter where life pulled us in two directions.',
        },
        {
          type: 'story',
          heading: 'For a while, apart',
          paragraphs: [
            'Then came the part nobody warns you about. New cities, new people, time zones that never quite lined up.',
            'We did not stop caring. We just started living lives that did not fit in the same frame for a while. The road kept going, even when we could not see where it led.',
          ],
          photo: {
            src: '/memories/different-roads.png',
            alt: 'An empty winding road at golden hour',
          },
        },
      ],
    },
    {
      id: 'reconnection',
      title: 'Reconnection',
      blocks: [
        {
          type: 'chapterTransition',
          eyebrow: 'Chapter Five',
          title: 'Reconnection',
          subtitle: 'A familiar face, right when it was needed most.',
        },
        {
          type: 'whySpecial',
          photo: {
            src: '/memories/reconnection.png',
            alt: 'Two old friends embracing in a cafe reunion',
          },
          question: 'Why do you think I kept this photo?',
          explanation:
            'Because the years between us disappeared the second we sat down. It was proof that some people are home, no matter how long you have been away.',
          story: 'We talked until the cafe closed, and it still was not enough.',
        },
        {
          type: 'blurReveal',
          photo: {
            src: '/memories/reconnection.png',
            alt: 'Two old friends embracing in a cafe reunion',
          },
          prompt: 'Slide to bring this moment back into focus.',
          caption: 'The day we picked up exactly where we left off.',
          story: 'Some things blur with time. This one came right back.',
        },
      ],
    },
    {
      id: 'falling-in-love',
      title: 'Falling In Love',
      blocks: [
        {
          type: 'chapterTransition',
          eyebrow: 'Chapter Six',
          title: 'Falling In Love',
          subtitle: 'Quietly, then all at once.',
        },
        {
          type: 'cropReveal',
          photo: {
            src: '/memories/falling-in-love.png',
            alt: 'A couple walking hand in hand along a beach at sunset',
          },
          focus: '50% 60%',
          caption: 'The walk where everything changed.',
          story: 'I did not want the beach, or the evening, or us, to ever end.',
        },
        {
          type: 'blurReveal',
          photo: {
            src: '/memories/falling-in-love.png',
            alt: 'A couple walking hand in hand along a beach at sunset',
          },
          prompt: 'Reveal the evening, little by little.',
          caption: 'Hand in hand, the long way home.',
          story: 'Every step felt like a promise.',
        },
        {
          type: 'whySpecial',
          photo: {
            src: '/memories/falling-in-love.png',
            alt: 'A couple walking hand in hand along a beach at sunset',
          },
          explanation:
            'Because this is the first photo where I look genuinely, completely happy. You did that.',
          story: 'I still catch myself smiling at it.',
        },
      ],
    },
    {
      id: 'marriage',
      title: 'Marriage',
      blocks: [
        {
          type: 'chapterTransition',
          eyebrow: 'Chapter Seven',
          title: 'Marriage',
          subtitle: 'A promise, surrounded by everyone we love.',
        },
        {
          type: 'puzzle',
          grid: 3,
          photo: {
            src: '/memories/marriage.png',
            alt: 'A couple sharing their first dance at their wedding',
          },
          prompt: 'Rebuild the moment we said forever.',
          caption: 'Our first dance.',
        },
        {
          type: 'blurReveal',
          photo: {
            src: '/memories/marriage.png',
            alt: 'A couple sharing their first dance at their wedding',
          },
          prompt: 'Bring our first dance back into focus.',
          caption: 'Just the two of us, and a room full of love.',
          story: 'The music could have stopped and we would not have noticed.',
        },
      ],
    },
    {
      id: 'motherhood',
      title: 'Motherhood',
      blocks: [
        {
          type: 'chapterTransition',
          eyebrow: 'Chapter Eight',
          title: 'Motherhood',
          subtitle: 'A new kind of love, impossibly large.',
        },
        {
          type: 'whySpecial',
          photo: {
            src: '/memories/motherhood.png',
            alt: 'A mother cradling her newborn by a sunlit window',
          },
          explanation:
            'Because in this photo I am holding everything I never knew I was waiting for. Nothing was ever the same after this morning.',
          story: 'The whole world went quiet, and then it began again.',
        },
        {
          type: 'blurReveal',
          photo: {
            src: '/memories/motherhood.png',
            alt: 'A mother cradling her newborn by a sunlit window',
          },
          prompt: 'Slide to reveal the morning everything changed.',
          caption: 'First light, first day.',
          story: 'I memorized every detail. I never want to forget it.',
        },
      ],
    },
    {
      id: 'today',
      title: 'Today',
      blocks: [
        {
          type: 'chapterTransition',
          eyebrow: 'Chapter Nine',
          title: 'Today',
          subtitle: 'Everything we built, all in one place.',
        },
        {
          type: 'cropReveal',
          photo: {
            src: '/memories/today.png',
            alt: 'A happy family gathered together outdoors',
          },
          focus: '50% 45%',
          caption: 'All of us, here, now.',
          story:
            'If younger me could see this picture, I think they would be proud.',
        },
      ],
    },
  ],
  ending: {
    message: 'You Are Loved',
    note: 'Every chapter, every road, every photo — they all lead here, to you.',
  },
}
