# Healing Hijamah — Recommended Action Items

Companion to [website-review.md](website-review.md). This is the "what to actually do" list for the
**revision** (`healing-hijamah.vercel.app`), plus design/workflow recommendations and my candid take
on the calls you've made.

Guiding principle: **the customer didn't come to learn — they came to fix a problem.** Every screen
should move them toward *book now*, answer one of their three real questions
(*Will this fix my problem? What does it cost? When can I be seen?*), or get out of the way.

---

## Tier 1 — Fix the conversion path (do these first)

These are the difference between a brochure and a booking engine.

1. **Real-time booking, pizza-shop style.** Replace the inquiry form with a live scheduler
   (Square Appointments, Acuity, or Calendly) — pick a service, see open slots, pay a deposit, get an
   instant confirmation. No "we'll be in touch."
2. **Show price.** Put a real number or "from $X" on every service/package. Price is the #1 silent
   bounce reason.
3. **One clear primary action, everywhere.** Pick a single verb — **"Book your session"** — and use it
   on every button. Retire the mix of "Schedule a Consultation / Learn More / Start Your Healing
   Journey." (See "Where I push back" on CTA frequency.)
4. **Sticky Book button.** A persistent header/floating "Book" so the action is always one tap away,
   especially on mobile.
5. **Lead with the answer above the fold.** On first paint (mobile included): *who* (Khadijah, R.N.,
   women-only), *what* (hijama for pain/stress/wellness), *price cue*, and *Book*. No tall hero of pure
   ambiance before the substance.

## Tier 2 — Trust & content, tightened

6. **Cut testimonials to 2–3 powerful ones.** Curate the strongest, most *problem-specific* stories
   (e.g., migraine relief, chronic back pain). Move the rest behind a "Read more reviews" link for
   skeptics. A wall of 8 reads as noise; 3 specific ones convert.
7. **Re-aim the articles at the three questions, not hijama philosophy.** Replace
   "The Healing Power of Hijāmah…" essays with short, scannable, *problem-framed* pages:
   *"Hijama for migraines — what to expect, what it costs, how to book."* Each ends in Book.
8. **Curated outbound "Learn more," not a blog you have to maintain.** For deep education, link to a few
   authoritative sources rather than competing as a publisher. (See "Where I push back" — keep a
   *small* amount of your own problem-pages for SEO and trust; don't go pure-outbound.)
9. **Fill the policy gaps customers act on:** preparation (eat/hydrate/clothing), aftercare (activity,
   bruising timeline, what's normal), what to bring, and reschedule-vs-cancel deposit rules.
10. **State service area + hours.** Mobile customers can't book if they can't tell you serve them.

## Tier 3 — Design & polish

11. **Reduce scroll and vertical padding.** Treat the homepage as a control panel, not a scroll-tour.
    Each section earns its height; collapse decorative whitespace, especially on mobile.
12. **Tighten hero height on mobile** so the Book button and price cue are visible without scrolling.
13. **Consistent nav routing.** "Articles" is a bare `#articles` anchor while siblings are real routes;
    make them consistent.

---

## Design changes I recommend (revision)

- **Above-the-fold control panel** (mobile-first): headline + credential + one-line "what it fixes" +
  "from $X" + **Book your session**. Everything else is below.
- **Sticky/floating Book CTA** that follows the scroll.
- **Compress the page**: fewer, shorter sections; less hero ambiance; denser, more confident layout.
- **One CTA identity**: same color, same label, same shape every time it appears.
- **"Why people come" block** that maps a *problem* → the right session → Book (replaces the
  product-first wet/dry/massage framing as the primary entry).
- **Trust strip** near the top: R.N. credential, women-only, hygiene/single-use, 2–3 star testimonials —
  not buried at the bottom.

## Workflow changes I recommend

- **Self-serve booking + deposit** to cut no-shows (doctor/pizza parity).
- **Intake AFTER booking, not before.** Collect health history on a post-booking form — never gate the
  booking itself behind a questionnaire. Booking first, paperwork second.
- **Automated confirmation + SMS reminders.** Most schedulers do this out of the box; it's the single
  biggest no-show reducer.
- **Mobile-appointment flow**: capture address + run a service-area check *inside* the booking step, so
  out-of-area clients are handled before they pay.

---

## Where I push back (you asked for candid)

You said "I have you on Opus for a reason" — so here's where I'd adjust your calls:

- **CTA frequency — I disagree with "don't repeat after each section."** Repeating the *same* CTA at the
  end of natural decision points (after testimonials, after the price, after an article) is a proven
  win, not clutter. The problem on the current site isn't *too many* CTAs — it's that they're *different
  and decorative* ("Schedule a Consultation," "Learn More," "Start Your Healing Journey"). Fix: **one
  identical Book button, repeated at decision points, plus one sticky one.** That satisfies your "clear
  and front" instinct without removing the conversion nudges. Removing them entirely would cost
  bookings.

- **"No original content, just link out" — I half-disagree.** Pure outbound links (a) send your buyer to
  someone else's site mid-decision and they may not come back, (b) give you *zero* SEO — Google ranks
  *your* domain for *your* words, not for links you point outward, and (c) thin "two sentences + a link"
  pages can read as low-effort and dent trust. **Better middle path:** keep a *small* set (3–4) of short,
  genuinely-yours, problem-framed pages — they double as SEO landing pages *and* answer "will this fix
  my problem" — and use outbound links as *supporting references inside* them, not as the destination.
  You're right that you shouldn't try to out-blog dedicated content sites. You just shouldn't hand them
  your traffic either.

- **Where I fully agree:** immediate booking, fewer testimonials, less scroll/ambiance, price up front,
  and articles re-aimed at the three real questions. These are the right instincts and they're the
  highest-leverage changes on the site.

---

## Suggested sequence

1. Stand up the scheduler + deposit, expose price. *(Tier 1: 1–5)*
2. Curate testimonials, re-frame articles, fill policy gaps. *(Tier 2: 6–10)*
3. Compress the layout and ship the control-panel hero. *(Tier 3: 11–13)*

If we prototype the revised site, each of these becomes a before/after we can preview from the project
hub.
</content>
