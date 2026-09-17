# BankNilami.com Institutional Website

## Goal
Build a polished, responsive public website for **bankNilami.com — Auction Information Hub**, using the supplied corporate profile as the source of truth. The visual direction will retain the profile’s navy, white, and restrained gold identity while elevating it into a modern institutional platform for banks and financial institutions.

## Site structure
Create these public pages with shared navigation, footer, and unique search/social metadata:

- `/` — full conversion-focused homepage
- `/about` — company positioning, operating model, and institutional value
- `/services` — six service areas and engagement model
- `/auction-process` — full six-stage auction and realisation journey
- `/auctions` — filterable demo property discovery experience with clear sample-data labels
- `/auction/$id` — reusable demo auction detail template
- `/partners` — the seven supplied institutional partners only
- `/track-record` — supplied performance metrics and value proposition
- `/contact` — validated enquiry form and office/contact details
- `/privacy-policy`, `/terms`, `/disclaimer` — clear policy pages using appropriately cautious language

The project’s existing production React/TanStack foundation will be retained instead of converting frameworks. It provides the requested TypeScript, Tailwind, server rendering, file-based routes, and SEO support.

## Visual system
- Establish a token-based palette: deep institutional navy, crisp off-white surfaces, steel-blue supporting tones, and a restrained gold accent.
- Use strong editorial typography, squared/low-radius geometry, fine borders, and spacious but information-dense layouts.
- Add restrained motion: section reveals, card lift, button feedback, timeline transitions, and reduced-motion support.
- Avoid generic real-estate styling, excessive gradients, invented logos, decorative blobs, and unsupported claims.
- Use an original high-quality architectural hero image and generated property imagery for clearly labelled demo listings.

## Shared experience
- Sticky desktop navigation with active states and two clear actions.
- Accessible mobile navigation with keyboard support.
- Reusable page headers, section headings, buttons, cards, statistics, timeline stages, partner marks, auction cards, filters, contact form, CTA band, footer, and scroll-to-top control.
- Central content/data modules for services, journey stages, partners, statistics, demo auctions, and navigation so future APIs can replace static data cleanly.

## Homepage
Build the requested sections in this order:

1. Hero with exact positioning statement, two actions, institutional visual, and four verified statistics.
2. Financial-institution trust strip.
3. Split introduction to the managed auction ecosystem.
4. Six-card “What We Deliver” grid.
5. Highly visual six-stage auction timeline, horizontal on desktop and vertical on mobile.
6. Secured asset-to-settlement value flow.
7. Seven supplied partner institutions.
8. Dark track-record statement with viewport-triggered counters.
9. Six reasons to partner.
10. Large core statement on protecting value and delivering realisation.
11. Demo property discovery with filters and explicit sample labels.
12. Enterprise MIS/dashboard concept.
13. Transparency and compliance section with the supplied legal caveat.
14. “Let’s Resolve. Let’s Realise.” CTA.
15. Partner enquiry form and location/contact details.

## Auction experience
- Seed a small set of clearly fictional **DEMO / SAMPLE** records, never represented as live auctions.
- Support useful client-side filtering and a reset/empty state on `/auctions`.
- Build `/auction/$id` with property overview, gallery, location, institution, date, reserve price, EMD, possession status, description, dates, terms, documents, and enquiry action.
- Unknown IDs display a clear unavailable/demo state without inventing additional listings.

## Forms and interactions
- Validate required contact fields and email/phone formats.
- Provide submitting, success, and error-ready states without claiming an enquiry was sent.
- Keep submission API-ready while clearly stating that email delivery is not connected yet.
- Add focus states, semantic labels, keyboard navigation, accessible menus, and responsive layouts.

## Search and discoverability
- Add a unique title, description, Open Graph title/description, social card type, and canonical URL for every content page.
- Add semantic headings, organization/local business structured data, robots rules, and a generated sitemap covering all stable routes.
- Use the supplied business name, contact details, offices, positioning, and natural auction-related search language without keyword stuffing.

## Quality checks
- Verify the homepage, menu, filters, enquiry validation, demo details, and unknown auction state in the running preview.
- Check desktop and mobile layouts, especially timeline orientation, auction card stacking, statistics grid, navigation, and long text wrapping.
- Confirm there are no browser errors, broken links, missing images, unsupported claims, or inaccessible controls.

## Boundaries
- No authentication, admin dashboard, database, real auction feed, document system, CRM, notifications, or email delivery will be added now.
- The “institutional dashboard” is a polished product concept, not a working private portal.
- All partner names, statistics, locations, contact details, and corporate claims remain limited to the supplied brief and profile.
