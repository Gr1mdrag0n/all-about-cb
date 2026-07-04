// The Small Talk conversation. Answers are paragraphs.
export interface ChatQA {
  q: string
  a: string[]
}

export const CHAT_OPENERS: ChatQA[] = [
  {
    q: 'First things first. What’s your coffee order?',
    a: [
      'An Ethiopia Bensa from De Mello, ground fresh every morning. 20 grams in, 320 millilitres out. Water at 93 degrees, a 30 second bloom, then a slow pour through a V60. Yes, I weigh it.',
    ],
  },
  {
    q: 'So what do you do?',
    a: [
      'I do a little bit of everything. But at its core, I like solving problems, automating them, and making things easier for everyone. A developer at heart, but someone who naturally gravitated towards team leadership.',
    ],
  },
  {
    q: 'What’s the thing you’re proudest of?',
    a: [
      'Implementing agile from the ground up. We went from the most disorganized team in the firm to the one everyone else came to for how it’s done.',
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
      'People who’d rather fix the thing than file three tickets about it. I like it when trust is the default, and when a good idea gets picked up no matter where it came from. Good coffee helps too. I’ve been known to bring my own beans, just in case.',
    ],
  },
  {
    q: 'What’s this I hear about a social committee?',
    a: [
      'I keep ending up in charge of those. At my last company I joined the social committee and slowly worked my way to running it. At CEM I restarted it, and the same thing happened. I like leading, but leading by example. The funny part is that I’m not actually that social. I just like bringing people together over a good beverage, beer, coffee, whatever, and getting to know them.',
    ],
  },
  {
    q: 'What do you do away from a screen?',
    a: [
      'Coffee, obviously. I run, I read, I take photos. I write lists, and then there’s the deeply satisfying business of checking things off them. Board games when I can get people to a table, a good whisky when I can’t. I’ve been learning French for a few years, with Spanish starting to creep in. And I eat more food than seems reasonable, which is what the running is for.',
    ],
  },
]

export const CHAT_PHOTOGRAPHY: ChatQA[] = [
  {
    q: 'And the photography? Where did that start?',
    a: [
      'I joined the photography world in high school, as a technical specialist at a studio. That originally meant Photoshop and Lightroom, editing and printing other people’s pictures, but in recent years I’ve begun to take photos of my own. It also gave me a passion for design and implementing beautiful user interfaces. And the occasional shot of me staring off into the distance while posing for pictures.',
    ],
  },
]

export const CHAT_CATS: ChatQA[] = [
  {
    q: 'I heard there are cats.',
    a: [
      'Just the one. Despair, or Pair for short. He’s the manager at my home cafe, and he has the tie to prove it.',
    ],
  },
]

export const HOT_PHRASES: [number, string][] = [
  [0.92, 'just brewed'],
  [0.8, 'still too hot'],
  [0.65, 'take a sip'],
  [0.45, 'halfway there'],
  [0.3, 'getting cold'],
  [0.18, 'second cup?'],
  [0.07, 'cold. classic.'],
]
export const HOT_EMPTY = 'down to the dregs'

export const ICED_PHRASES: [number, string][] = [
  [0.92, 'just poured'],
  [0.8, 'ice still clinking'],
  [0.65, 'take a sip'],
  [0.45, 'halfway there'],
  [0.3, 'mostly melted'],
  [0.18, 'watered down'],
  [0.07, 'all water now'],
]
export const ICED_EMPTY = 'just ice left'
