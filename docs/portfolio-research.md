# Portfolio Research — what the best personal sites do, and what fits ours

*Deep-research run 2026-07-04: 6 search angles, 23 sources fetched, 109 claims extracted,
top 25 adversarially verified (3 skeptic votes each) → 21 confirmed. Synthesis below.
For Caradec's review before any implementation.*

## First: what the research VALIDATES about the current site

Good news — several of our instincts are independently confirmed:

- **Scrub, don't hijack, was right.** NN/g's testing found scrolljacking disorients most
  users, gets mistaken for bugs, and that task-oriented visitors (a recruiter checking a
  portfolio) "get severely agitated and just move on." Our cup, name, and pinned Room are
  all scroll-*linked*, never scroll-*hijacking* — the taste line we drew is the industry one.
  [nngroup.com/articles/scrolljacking-101]
- **Easter eggs are a celebrated genre, not a fringe gimmick.** One Page Love maintains a
  curated tag of 94 easter-egg sites. The cord and the bar are in good company.
  [onepagelove.com/tag/easter-eggs]
- **Single-page, typography-led portfolios remain a mainstream celebrated pattern** on
  Awwwards (tags: Minimal, Typography-focused, Single-page; devices: animation, scrolling,
  parallax, microinteractions). We're inside the canon, not off it. [awwwards.com/websites/portfolio]
- **Personality is a positive hiring signal.** Hiring managers told The Muse a generic site
  makes them doubt a candidate's creativity: "a personal site should be personal." The
  coffee-chat conceit is a feature, not a risk. [themuse.com]
- **Precedent for the pet:** Bruno Simon's famous 3D portfolio hides his dog Sudo as a
  mascot, plus an animated emoji in the browser tab title. Despair is in a grand tradition.
  [bruno_simon case study, medium.com]

## The one verified GAP

**Hiring managers' #1 item is a two-to-five-line self-introduction** stating who you are
and your value, near the top. [themuse.com] Our hero is three words and "let's chat" — the
first sentence *about* you arrives at question two. A single quiet line under the hero words
would close this without breaking the vibe. (Role-agnostic, from his own words, e.g. built
from "I like solving problems, automating them, and making things easier for everyone.")

## The content landscape: slash pages

There's a named IndieWeb convention — **slash pages** (catalogued at slashpages.net) — for
root-level pages that describe the person: /now (Derek Sivers), /uses (Wes Bos), /colophon,
/defaults, /changelog, plus ~60 others down to novelty (/chipotle, /hats). The staples are
high-signal identity content; the long tail is where gimmick lives. [slashpages.net,
indieweb.org/colophon, therealadam.com]

Verified idea with our name on it: jamesg.blog's personal-website ideas list explicitly
proposes **"a list of coffee shops you like in a city and what you liked about them"** and
**"a list of the coffee cups you own and the stories behind them."** [jamesg.blog]

## Prioritized shortlist (fit × effort)

1. **The hero bio line.** One sentence under the three words. Closes the only verified
   hiring gap; needs ten minutes and Caradec's wording. *(content, tiny)*
2. **/coffee — "Where I'd take you."** A curated Toronto coffee-shop list (De Mello is
   already name-dropped in the chat). It literalizes the closing CTA ("let's grab one"),
   is verified as a recognized content idea, is 100% role-agnostic, and no other
   engineering leader has it. Could live as a small linked page in the site's existing
   visual language. *(content, medium)*
3. **/colophon — "How this site was made."** A short footer-linked page: Vite/React/TS,
   Fraunces/Vibur, the CC0 cup-art credit, and a line about the design process. Devs and
   design-literate visitors read colophons; everyone else never sees it. Convention says
   keep it short. *(content, small)*
4. **Tab-title microdetail.** The browser tab reacts: e.g. title gains the cup emoji, and
   when you flip the lights it swaps (☕ → 🥤), or the title changes when the tab is
   backgrounded ("your coffee's getting cold"). Bruno Simon precedent; costs a few lines.
   *(visual/micro, tiny)*
5. **/uses — "The Kit."** The physical version of the Toolbox: camera bodies and lenses,
   the grinder and V60, the desk. Photographer + coffee identity in one established page
   type. *(content, small-medium — needs his gear list)*
6. **One Despair recurrence.** A mascot needs at least two appearances to be a mascot:
   e.g. Pair's silhouette curled in the corner of /coffee or the colophon. Respects the
   "very very minor" cat rule. *(visual, tiny)*
7. **BENCH — /now ("Lately").** Verified staple, but it's a *living* page and Caradec's
   rule is minimal upkeep. Only adopt with an honest cadence (quarterly), else skip.
8. **BENCH — deeper "how I think" write-ups.** Hiring managers want context and thinking,
   even from failed projects [themuse.com] — but chat-question versions were already
   rejected as too job-targeted. If it ever happens, it's a low-key notes page, not the chat.

## Refuted / unverified (for honesty)

- Refuted (0-3): a claim overstating colophons' purpose as principle-consolidation.
- Unverified (rate-limit, not refuted): slashpages.net's origin attribution to Robb Knight;
  a "Manual of Me" page recommendation. Treated as plausible, uncited.

**Sources:** slashpages.net · indieweb.org/colophon · jamesg.blog/2024/03/10/100-more-personal-website-ideas ·
therealadam.com/2024/07/08/slash-pages-microfeatures.html · nngroup.com/articles/scrolljacking-101 ·
awwwards.com/websites/portfolio · onepagelove.com/tag/easter-eggs ·
themuse.com/advice/can-a-personal-website-help-your-job-search-what-6-hiring-managers-really-think ·
medium.com/@bruno_simon/bruno-simon-portfolio-case-study
