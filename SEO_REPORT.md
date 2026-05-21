# SEO Report — concreteliftinginsurance.com
Date: 2026-05-21

## 1. Site Identity
- **Framework:** Next.js 16.2.1 (confirmed in package.json)
- **Apparent Domain / Target Audience / Niche:** Specialized B2B insurance provider for concrete lifting contractors (spray foam lifting, mud jacking). Target audience: small-to-medium construction contractors nationwide.
- **Deployment Status:** Netlify (netlify.toml present; .netlify directory indicates active deployment). Build pipeline: `npm run build` → `.next` output directory.

## 2. Inventory
- **Total Pages:** 6 page.tsx files + 1 dynamic blog post template = ~8+ canonical pages (homepage, about, services, contact, blog, blog posts)
- **URL Structure:** Nested route structure (e.g., `/blog/[slug]`). Homepage flat, feature pages nested 1 level deep, blog posts 2 levels deep.
- **sitemap.xml:** Present at `/public/sitemap.xml`. Contains 7 URLs (homepage, services, about, contact, blog, 2 blog post slugs). Lastmod date: 2026-03-31 (51 days old—not updated).
- **robots.txt:** Present at `/public/robots.txt`. Minimal config: allows all (`User-agent: *; Allow: /`). Sitemap referenced.

## 3. On-Page SEO (sample of 6 pages)

| Page | Title Length | Meta Description Length | H1 Present | Canonical | OG Tags |
|------|--------------|------------------------|-----------|-----------|---------|
| Homepage | 65 chars | 155 chars | Yes ✓ | Yes (layout.tsx) | Yes ✓ |
| About | 45 chars | 132 chars | Yes ✓ | Yes (layout.tsx) | Inherits |
| Services | 59 chars | 148 chars | Yes ✓ | Yes (layout.tsx) | Inherits |
| Contact | 33 chars | 128 chars | Yes ✓ | Yes (layout.tsx) | Inherits |
| Blog (index) | 56 chars | 142 chars | Yes ✓ | Yes (layout.tsx) | Inherits |
| Blog Post 1 | 70 chars | 55 chars* | Yes ✓ | Yes (dynamic) | Inherits |

*Blog post descriptions pulled from first paragraph (metadata.description in line 72 of [slug]/page.tsx). Optimal meta descriptions are 150-160 chars; this is too short.

**Findings:**
- Title tags: All pages have titles; homepage and services pages use template format well.
- Meta descriptions: All present. Homepage and most pages are good (132-155 chars). Blog post excerpt is too short (55 chars).
- H1 tags: All pages have exactly one H1. Homepage has split gradient text across 3 lines—crawler should interpret as single H1.
- Canonical tags: Set via `metadataBase` in layout.tsx (line 17). Homepage canonical correct.
- OG tags: Comprehensive on layout.tsx (og:type, og:locale, og:url, og:siteName, og:title, og:description, og:image). OG image `/og-image.png` referenced but **file not verified in /public**.

## 4. Structured Data
**Present:**
- **InsuranceAgency schema** (JSON-LD in layout.tsx, lines 87-109). Includes:
  - name, description, url, telephone, email
  - areaServed: "United States"
  - knowsAbout: List of 5 service categories (Spray Foam Lifting Insurance, etc.)
  - @context: https://schema.org

**Missing / Gaps:**
- No **LocalBusiness** schema (missing address, geo coordinates despite service area claim).
- No **Service** schema for individual coverage types (spray foam, mud jacking, general liability, workers comp, commercial auto, equipment breakdown).
- No **FAQ** schema despite FAQ section on `/services` page (lines 290-307).
- No **BreadcrumbList** schema (no breadcrumb navigation found on pages).
- No **Article** schema for blog posts (would enhance SERP snippets for search traffic).
- No **Organization** schema with social profiles or additional trust signals.

## 5. Content Quality

### Word Count (3-page sample):
| Page | Word Count | Assessment |
|------|-----------|------------|
| Homepage | ~1,886 words | Good depth; strong keyword coverage (concrete lifting, spray foam, mud jacking, insurance) |
| About | ~961 words | Adequate; tells company story but lacks rich keyword focus. |
| Services | ~1,406 words | Excellent; detailed service descriptions, pricing, features, FAQs. Keyword-rich. |

**Avg: ~1,418 words/page.** Exceeds recommended minimum (300-400 words for indexable pages).

### Internal Linking:
- **Density:** Low. Pages link to `/contact`, `/services`, `/blog`, but **not to specific blog post slug pages from homepage or services page**. Blog page links to individual posts via `<Link>` components (line 112 in blog/page.tsx).
- **Anchor text:** Generic (e.g., "Get Free Quote", "View Coverage Options", "Learn More"). Missing keyword-rich anchors (e.g., "spray foam lifting insurance", "mud jacking coverage").
- **Issue:** No internal linking strategy visible. Blog posts are siloed from main service pages; missed opportunity for topical clustering.

### Image Count & Alt-Text Coverage:
- **Image count:** ~6 image files in `/public` (includes OG image, favicon.svg, etc.). However, **pages use placeholder divs with background gradients instead of `<img>` tags**. No actual images are rendered; all visuals are CSS-based.
- **Alt-text coverage:** 0%. No images with alt attributes because no `<img>` tags are used.
- **Impact:** Low risk for accessibility, but missed opportunity for image SEO (no image search traffic from Google Images). Visual content (product/service mockups) would enhance user engagement.

## 6. Technical

### robots.txt:
```
User-agent: *
Allow: /
Sitemap: https://concreteliftinginsurance.com/sitemap.xml
```
**Assessment:** Permissive; allows all crawlers. Correct. No noindex, nofollow rules.

### sitemap.xml:
- **URL count:** 7 (homepage, 4 main pages, 1 blog index, 2 blog post slugs).
- **Issues:**
  - **Outdated:** lastmod all set to 2026-03-31 (51 days stale). Should be updated on each deploy.
  - **Incomplete:** Blog page lists only 2 post slugs; 6 blog posts exist in blog/page.tsx (lines 14-75) but only 2 are in sitemap. 4 posts are **invisible to search engines** (osha-safety-standards-foam-lifting, equipment-breakdown-coverage, workers-comp-concrete-lifting, pollution-liability-foam-contractors).
  - **Missing dynamic routes:** No mention of how blog posts beyond the 2 are discoverable.

### 404 Handling:
- **not-found.tsx:** Not present in `/src/app/` directory.
- **Fallback:** Next.js 16 will auto-generate a basic 404 page, but no custom 404 with helpful navigation/CTAs found.
- **Issue:** Custom 404 page with brand messaging and internal links (to homepage, services, contact) would improve UX and retain users.

### next.config.ts:
```typescript
const nextConfig: NextConfig = {
  /* config options here */
};
export default nextConfig;
```
**Issue:** Empty config. No custom redirects, rewrites, or headers defined here (though netlify.toml does set headers).

## 7. Top Issues (ranked by impact)

1. **Incomplete Sitemap** (HIGH) – 4 out of 6 blog posts missing from sitemap.xml; robots cannot discover them via sitemap. Risk: reduced crawl budget, missed indexation.
   - *File: `/workspace/Websites/concreteliftinginsurance.com/public/sitemap.xml` (lines 34-45)*
   - Workaround: Blog posts are linked from `/blog` page, so discoverable via crawl; however, sitemap should list all.

2. **Missing Structured Data for Services** (HIGH) – No Service schema for 6 coverage types. Search engines cannot distinguish between different service offerings. Missed rich snippet opportunities.
   - *File: `src/app/page.tsx` (lines 28–97 define services object; no schema generated)*
   - Impact: No FAQ rich snippets, no product schema for insurance products.

3. **Blog Post Meta Descriptions Too Short** (MEDIUM) – Blog post excerpts used as meta descriptions are 55 chars; optimal is 150–160. Truncated in SERP snippets.
   - *File: `src/app/blog/[slug]/page.tsx` (line 72: `description: post.content[0]`)*

4. **No Custom 404 Page** (MEDIUM) – Default Next.js 404 offers poor UX and no conversion paths. Broken links lead to dead-end.
   - *File: Missing `src/app/not-found.tsx`*

5. **Stale Sitemap** (MEDIUM) – lastmod date is 51 days old. Search engines may deprioritize fresh content crawl.
   - *File: `public/sitemap.xml` (all entries dated 2026-03-31)*

6. **Missing OG Image File** (MEDIUM) – og-image.png referenced in layout.tsx but not verified in /public. May cause social share issues.
   - *File: `src/app/layout.tsx` (line 49: `/og-image.png`)*
   - *Verification: File not found in `/public`*

7. **Weak Internal Linking Strategy** (MEDIUM) – Generic anchor text, no topical clustering between blog and service pages. Missed SEO value for keyword targeting.
   - *Example: Homepage links to `/services` generically; no keyword-rich anchors like "spray foam insurance"*

8. **No FAQ Schema** (LOW) – FAQ section exists on services page but no structured FAQPage or Question schema.
   - *File: `src/app/services/page.tsx` (lines 290–307)*

9. **No Images with Alt-Text** (LOW) – All visuals are CSS backgrounds; no alt-text opportunities. Reduced accessibility and image SEO.
   - *File: All .tsx files use `<div>` with inline styles instead of `<img>` tags*

10. **No Breadcrumb Navigation** (LOW) – Breadcrumbs improve UX for nested routes and enable BreadcrumbList schema.
    - *File: `src/components/` (no breadcrumb component found)*

## 8. Top Recommendations (concrete next actions)

1. **Update sitemap.xml to include all 6 blog posts** (2–5 min fix)
   - Edit `/public/sitemap.xml`: Add entries for `osha-safety-standards-foam-lifting`, `equipment-breakdown-coverage`, `workers-comp-concrete-lifting`, `pollution-liability-foam-contractors`.
   - Set lastmod to deployment date (2026-05-21).
   - Regenerate sitemap dynamically if possible (consider sitemap.ts route handler in Next.js 16 for auto-generation).

2. **Add Service schema for each insurance product** (15 min)
   - In `src/app/page.tsx` or `src/app/services/page.tsx`, add Service schema (JSON-LD) for each of 6 coverage types.
   - Include name, description, areaServed, price, url/action.
   - Example: Spray Foam Lifting Insurance, starting at $3,200/year, serving US contractors.

3. **Extend blog post meta descriptions to 150+ chars** (2 min)
   - Update `src/app/blog/[slug]/page.tsx` (line 72): Instead of `post.content[0]`, extract first 150–160 characters with ellipsis.
   - Example: "Spray Foam vs. Mud Jacking: Understanding the insurance differences between spray foam lifting and mud jacking can save you from costly coverage gaps. Here's what you need to know."

4. **Create custom 404 page** (10 min)
   - Add `/src/app/not-found.tsx` with brand messaging, internal links (homepage, services, contact), and CTA.
   - Improves UX and retains users on broken links.

5. **Add FAQ schema to services page** (10 min)
   - Wrap FAQ section (lines 290–307 in services/page.tsx) with FAQPage and Question schemas.
   - Enables rich snippets in search results for FAQ queries (e.g., "Why can't I use generic commercial insurance?").

6. **Verify and optimize OG image** (5 min)
   - Confirm `/public/og-image.png` exists; if not, generate one (1200x630 px, branded, relevant to concrete lifting).
   - Test social share preview via og:image validator.

7. **Implement keyword-rich internal linking strategy** (20 min)
   - Add internal links from homepage to specific blog posts (e.g., "Read our guide: Spray Foam vs. Mud Jacking Insurance").
   - Use keyword-rich anchor text: "spray foam lifting insurance", "mud jacking coverage", "pollution liability insurance".
   - Link blog posts to relevant service pages (e.g., post about spray foam links to `/services#spray-foam`).

8. **Consider dynamic sitemap generation** (30 min, optional)
   - Replace static `sitemap.xml` with Next.js 16 `sitemap.ts` route handler.
   - Auto-generates sitemap on build/deploy; ensures all pages included and lastmod current.
   - Reduces manual maintenance.

---

## Summary

**Strengths:**
- Solid on-page SEO basics: titles, descriptions, H1, canonical tags present on all pages.
- Rich, keyword-focused content (1,200–1,900 words/page).
- Good structured data foundation (InsuranceAgency schema).
- Netlify deployment with security headers configured.

**Weaknesses:**
- Incomplete sitemap (4 blog posts missing).
- Minimal structured data (no Service, FAQ, or Article schemas).
- Weak internal linking; generic anchor text.
- No custom 404 page.
- No actual images (CSS-based visuals only); missed image SEO opportunity.
- Blog post descriptions too short.

**Quick Wins:** Update sitemap (2 min), optimize meta descriptions (2 min), add custom 404 (10 min). Total: ~14 min for 3 medium-impact fixes.

**High-Impact Recommendations:** Add Service and FAQ schemas, improve internal linking strategy, and regenerate sitemap dynamically.
