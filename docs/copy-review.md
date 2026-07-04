# Copy Review

*Editor review of all visible copy in the coffee-chat mock (v15), 2026-07-03.*

**Caradec's verdicts (applied in mock v16):**
- 1 APPLIED (cat: "Just the one.") — note: "I've always loved animals." kept pending finding 5.
- 2 APPLIED with override: kept his words closely — "That's a good question. I do a little bit of everything. But at its core, I like solving problems, automating them, and making things easier for everyone. A developer at heart, but someone who naturally gravitated towards team leadership."
- 3 APPLIED (north star → "the one everyone else came to for how it's done").
- 4 APPLIED (Scrum Master grammar fix).
- 5 through 10: PENDING his ruling.

**Overall verdict:** The chat section mostly sounds like Caradec until it hits two answers ("what do you do" and "proudest of") where the voice slips into resume-speak and one stock AI-assistant phrase; the resume and toolbox sections are clean and in character throughout. The single real hard-rule risk is in the cats answer, where "these days" quietly implies a cat that came before Despair. Everything else is tightening, not rewriting.

## Findings

1. **Location:** Chat — "I heard there are cats." answer
   **Current:** "One, these days. Despair, or Pair for short. He's the manager at my home cafe, and he has the tie to prove it. I've always loved animals."
   **Issue:** "these days" implies there used to be more than one cat, which is exactly the reference the departed-cat rule forbids, even indirectly.
   **Suggested revision:** "Just the one. Despair, or Pair for short. He's the manager at my home cafe, and he has the tie to prove it."
   **[fix]**

2. **Location:** Chat — "So what do you do?" answer
   **Current:** "That's a good question. A little bit of everything. At its core, I like solving problems, automating them, and making things easier for everyone. A developer at heart, but one who naturally gravitated toward leading teams."
   **Issue:** "That's a good question" is a stock assistant stalling phrase, and "naturally gravitated toward" plus the three-part list ("solving problems, automating them, and making things easier") reads like it was written about him rather than said by him.
   **Suggested revision:** "A little bit of everything. I like solving problems and automating the boring parts of them. Started as a developer and ended up leading the team instead."
   **[fix]**

3. **Location:** Chat — "What's the thing you're proudest of?" answer
   **Current:** "Implementing agile from the ground up. We went from the most disorganized team in the firm to its north star for organization and tracking."
   **Issue:** "north star" is corporate shorthand that doesn't match the plain, dry register of the rest of his answers.
   **Suggested revision:** "Implementing agile from the ground up. We went from the most disorganized team in the firm to the one everyone else came to for how it's done."
   **[fix]**

4. **Location:** Paperwork — CEM Benchmarking entry, "Moved the codebase" bullet
   **Current:** "Moved the codebase from SVN to Git and introduced Scrum as the team's first Scrum Master."
   **Issue:** As written, the sentence reads as if Scrum itself was introduced "as the team's first Scrum Master," rather than Caradec taking that role.
   **Suggested revision:** "Moved the codebase from SVN to Git and introduced Scrum, taking on the team's first Scrum Master role."
   **[fix]**

5. **Location:** Chat — cats answer, last line
   **Current:** "I've always loved animals."
   **Issue:** Generic tacked-on line that doesn't say anything specific to him or to Despair; feels like filler added to round out the paragraph.
   **Suggested revision:** Cut it. The answer is stronger ending on the tie line.
   **[consider]**

6. **Location:** Paperwork — all "when" and "role" lines
   **Current:** e.g. "2019 – Present", "Director, Engineering · July 2026 – Present"
   **Issue:** These use en dashes for every date range across every entry, which runs against the no-dash rule if that rule is meant to cover the resume, not just prose.
   **Suggested revision:** Replace with "to": "2019 to Present", "Director, Engineering · July 2026 to Present," etc., applied consistently across all five entries.
   **[consider — confirm whether the no-dash rule extends to date ranges before changing all of them]**

7. **Location:** Closing section CTA line
   **Current:** "Need another cup? Let's get in touch and grab one."
   **Issue:** Stacks two different invitations ("get in touch" and "grab one") into one clause, which reads slightly clunky.
   **Suggested revision:** "Need another cup? Get in touch, and let's grab one."
   **[consider]**

8. **Location:** Paperwork — CEM Benchmarking entry, "Handle 200+ IT tickets" bullet
   **Current:** "Handle 200+ IT tickets a year through a Helpdesk pipeline I designed, answering within 24 hours with fewer than 10% resolved late."
   **Issue:** "Helpdesk" is capitalized mid-sentence like a proper noun when it isn't one, and the sentence carries two stats which makes it read a touch dense.
   **Suggested revision:** "Handle 200+ IT tickets a year through a help desk pipeline I designed, answering within 24 hours and resolving fewer than 10% late."
   **[nitpick]**

9. **Location:** Chat — "So what do you do?" answer, phrase within finding 2
   **Current:** "making things easier for everyone"
   **Issue:** Vague claim with no specifics; "everyone" oversells scope.
   **Suggested revision:** Covered by the finding 2 rewrite, which drops the phrase entirely.
   **[nitpick]**

10. **Location:** Pull quote (Purple Room)
    **Current:** "You catch it by checking, not by remembering." / "Caradec, somewhere around the second cup"
    **Issue:** Known placeholder per your note. Flagging here only so it stays visible on the punch list; see candidate replacements below.
    **Suggested revision:** N/A — for later.
    **[consider]**

## What's working, don't touch

- The coffee order answer, already approved.
- "How'd you get here?" answer — plain, sequential, no padding.
- The social committee answer, especially "I like leading, but leading by example" and "I just like bringing people together over a good beverage."
- "Away from a screen" answer, including the callback to coffee — reads like a deliberate wink, not a redundancy.
- The parallel captions "Also a photographer." / "Also a cat person." — nice matching rhythm across the two bands.
- "Small Talk" nav label — decided, leave it.
- All eight coffee-cup scroll phrases (just brewed / still too hot / take a sip / halfway there / getting cold / second cup? / cold. classic. / down to the dregs) — dry, well-paced, no notes.
- "For the recruiters" and "in rotation" tags on the Paperwork and Toolbox headings.
- Softchoice, daVinci, and Maxwell Photography bullets — concise, no filler.
- Question sequence overall (coffee order → what do you do → proudest → path → social committee → away from screen → cats) matches the intended flow with no reordering needed.

## Candidate pull-quote lines (future options only, not fixes)

1. "Yes, I weigh it." — pulled straight from the coffee order answer; short, dry, and shows the precision without saying it.
2. "I like leading, but leading by example." — from the social committee answer; already quote-ready as is.
3. "The deeply satisfying business of checking things off them." — distilled from the away-from-screen answer, works as a standalone line about how he operates.

## Round 2 (2026-07-04) — two independent editor passes, post /coffee log + /uses

Scope: everything shipped since round 1, including new content (place-to-work
answer, the /coffee bean-log section, all of /uses). Two editors reviewed
independently — one for voice/tense consistency, one reading cold as a
first-time visitor. Both converged on the same top finding.

**Applied:**
- Place-to-work answer tightened: dropped the generic opener ("People who
  care about doing things properly...") for the specific "fix the thing
  instead of filing three tickets" line that was already the strongest part
  of the answer; fixed a dropped contraction ("I have been" → "I've been").
- `/coffee` intro rewritten to stop promising a plural "rotation" and then
  immediately walking it back — now frames De Mello as the one vouched-for
  spot up front, so "the rest of the rotation is still under review" reads
  as a forward joke instead of a correction. Also dropped a redundant
  "actually" (four uses of the word across /coffee and /uses; kept it only
  in the two headline spots, "What's actually in the grinder" / "What I
  actually use").
- `/coffee`'s cat caption changed from "regional manager" to "quality
  control" — Despair's "manager" bit already fires twice by design (the
  homepage cat-band, then the chat answer); a third use on /coffee pushed
  past the "very very minor" cat rule.

**Resolved (2026-07-04, Caradec's calls):**
- Hero bio / "So what do you do?" duplication → dropped the hero bio line
  entirely (`.hero-bio` removed from App.tsx and its CSS). The "So what do
  you do?" answer keeps its round-1 wording untouched.
- "That's a good question." opener → dropped. Answer now opens directly on
  "I do a little bit of everything."
- Photography answer's closing line → left as-is, per Caradec.

**Reviewed and dismissed:** one editor flagged the daVinci/Maxwell bullets
as generic resume filler — that directly contradicts the round-1 "what's
working, don't touch" verdict on those same bullets, so left as-is.
