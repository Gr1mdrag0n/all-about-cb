// The Small Talk conversation. Answers are paragraphs.
export interface ChatQA {
  q: string
  a: string[]
}

export const CHAT_OPENERS: ChatQA[] = [
  {
    q: 'First things first. What’s your go-to coffee?',
    a: [
      'An Ethiopia Bensa from De Mello, ground fresh. 20 grams in, 320 ml out. Water at 93 degrees, a 30 second bloom, then a slow pour through a V60.',
    ],
  },
  {
    q: 'So what do you do?',
    a: [
      'When it comes to the development world, I do a little bit of everything. But at its core, I like solving problems, automating them, and making things easier for everyone (especially myself). A developer at heart, but someone who naturally gravitated towards team leadership.',
    ],
  },
  {
    q: 'What’s the thing you’re proudest of?',
    a: [
      'Implementing agile from the ground up. We went from the most disorganized team in the firm to the one that everyone looks to when it comes to getting organized and tracking things.',
    ],
  },
]

export const CHAT_MIDDLE: ChatQA[] = [
  {
    q: 'How’d you get here?',
    a: [
      'I studied computer science at the University of Toronto Scarborough, did survey programming at a market research firm, and ended up leading the programming team there. Then I joined a benchmarking firm as a software engineer and just kept getting handed more. I’m quick, naturally curious, and always looking to learn new things, and that seems to compound.',
    ],
  },
  {
    q: 'What do you look for in a place to work?',
    a: [
      'A company that would rather fix the thing than keep doing it the old way. I like it when a company lets people grow and explore new things that ultimately help everyone move forward. Good coffee helps too. I’ve been known to scope out the coffee shops well before I even show up.',
    ],
  },
  {
    q: 'What do you do away from a screen?',
    a: [
      'I run, I read, I take photos. I write lists, and then there’s the deeply satisfying business of checking things off them. I’ve been learning French for a few years, and recently picked up Bangla so I can talk with my in-laws. Food is a big one too: like the coffee, I keep a list, and I’ve got an uncanny memory for a dish and exactly what I thought of it.',
    ],
  },
]

export const CHAT_RUNNING: ChatQA[] = [
  {
    q: 'How’d you get into running?',
    a: [
      'A few years ago I was heading up the stairs to my place and had to do that awkward little pause at the top, the one where you look like you’re admiring the view while secretly dying. At some point I decided I didn’t want to feel that way, so I worked my way up to running a 5K. I remember thinking, wow, I can’t believe I did that: the kid who used to skip gym class, running five kilometres straight. I must be seriously fit. So I looked up what other 5K times were out there, and how long a marathon actually is. When I saw 42.2 kilometres, over eight times what I’d just run, I realized I was not that fit at all.',
      'Fitness is a beautiful scale, though, and even a 5K is an amazing thing. But it stuck with me, and I figured I should push a little further. So I did a 10K. Then a half marathon. And this year, I’m running my first full marathon.',
    ],
  },
]

export const CHAT_PHOTOGRAPHY: ChatQA[] = [
  {
    q: 'When did you pick up photography?',
    a: [
      'In high school. I’d been teaching myself Photoshop, and I got put in touch with an old-school photographer making the jump from film to digital who needed a hand with it. We clicked, and he started bringing me along to his events. That was back in 2007, so we’ve been at it the better part of twenty years now, and I still help out on shoots when I can. Somewhere along the way I picked up a camera of my own and fell hard for landscape and wildlife photography. I don’t get out to shoot nearly as often as I’d like, but when I do I come back with hundreds of frames, lose hours to culling them, and still end up with a few I’m genuinely proud of. It’s also where my love of designing and building beautiful interfaces comes from.',
    ],
  },
]

export const HOT_PHRASES: [number, string][] = [
  [0.92, 'just brewed'],
  [0.8, 'still too hot'],
  [0.65, 'prime temp'],
  [0.45, 'halfway there'],
  [0.3, 'getting cold'],
  [0.18, 'second cup?'],
]

export const ICED_PHRASES: [number, string][] = [
  [0.92, 'just poured'],
  [0.65, 'prime window'],
  [0.45, 'halfway'],
  [0.3, 'starting to melt'],
  [0.18, 'watered down'],
]
