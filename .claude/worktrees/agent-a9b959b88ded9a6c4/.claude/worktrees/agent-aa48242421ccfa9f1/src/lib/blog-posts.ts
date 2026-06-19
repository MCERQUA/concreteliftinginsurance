export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  dateISO: string;
  featured: boolean;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "complete-guide-to-concrete-lifting-insurance",
    title: "Complete Guide to Concrete Lifting Insurance",
    excerpt:
      "Everything a concrete lifting contractor needs to know about insurance—coverages, costs, gaps, and how to avoid getting stuck with the wrong policy.",
    category: "Coverage Guide",
    readTime: "12 min read",
    date: "March 22, 2026",
    dateISO: "2026-03-22",
    featured: true,
    content: [
      "Concrete lifting insurance is not a product most general commercial carriers understand well. If you've been handed a generic commercial policy and told it covers your concrete lifting operations, read this guide before your next job.",
      "## What Makes Concrete Lifting Insurance Different",
      "Standard commercial general liability policies are built around the risk profile of traditional contractors—drywall, painting, plumbing. Concrete lifting contractors have three exposures those policies were never designed for: chemical/pollutant liability, specialized mobile equipment, and completed operations risk that can surface months after the job.",
      "A policy that's ideal for a painting contractor will leave a spray foam lifting contractor with uncovered claims in all three areas. The distinctions matter.",
      "## The Four Core Coverages",
      "Every concrete lifting contractor should carry these four coverages as a minimum:",
      "**1. General Liability Insurance** — Covers third-party bodily injury and property damage claims arising from your operations. Standard limits are $1M per occurrence / $2M aggregate. For larger commercial jobs, certificate holders often require $2M/$4M.",
      "**2. Pollution Liability** — This is the coverage most contractors skip and most regret skipping. Polyurethane foam is classified as a pollutant under most ISO GL policy forms. Without a pollution liability endorsement or standalone policy, foam-related claims are likely excluded. Minimum recommended: $1M.",
      "**3. Workers Compensation** — Required in nearly every state the moment you have one employee. Concrete lifting involves repetitive physical labor, chemical exposure, and equipment operation—all higher-risk categories. Classification codes matter; correct classification can save thousands annually.",
      "**4. Commercial Auto / Mobile Equipment** — Your rig is probably your single largest asset. Commercial auto covers vehicle liability and physical damage. A separate inland marine or equipment floater covers your spray foam pump, mud jacking rig, hoses, and hand tools against theft, breakdown, and job-site damage.",
      "## The Coverage Gaps That Catch Contractors Off Guard",
      "**Completed operations exclusions** — Many policies limit completed operations coverage to 1 year. Concrete lifting warranties are often 2-5 years. If a lifted slab settles again 18 months post-job and the homeowner files a claim, a policy with a 1-year completed operations window leaves you exposed.",
      "**Subcontractor exclusions** — If you hire 1099 workers or subcontract jobs, verify your policy covers subcontractor work. Many don't unless the sub carries their own insurance and you're listed as additional insured.",
      "**Equipment misclassification** — Spray foam pumps and proportioners are often expensive specialized equipment. If they're not scheduled on your policy with accurate values, you may find your equipment claim settled at generic contractor rates far below replacement cost.",
      "## How Much Does Concrete Lifting Insurance Cost?",
      "Premiums vary significantly based on revenue, method (spray foam vs. mud jacking), geography, and claims history. As a general benchmark:",
      "Small operations (under $500K revenue): $4,000–$8,000/year for a GL + pollution + workers comp bundle.",
      "Mid-size operations ($500K–$2M revenue): $8,000–$18,000/year.",
      "Larger operations ($2M+ revenue): $18,000–$40,000+/year, heavily influenced by payroll and loss history.",
      "Bundling policies with the same carrier typically produces 12–18% savings versus buying each line separately.",
      "## Getting the Right Policy",
      "Ask any agent quoting your coverage these five questions: (1) Is pollution liability included or excluded? (2) What is the completed operations aggregate and term? (3) How is my foam pump/rig scheduled—actual cash value or replacement cost? (4) Does the policy cover subcontractor work? (5) What classification codes are being used for workers comp?",
      "If the agent can't answer these confidently, find one who can. Concrete lifting insurance is a specialty niche—a generalist agent is unlikely to catch the gaps that matter.",
    ],
  },
  {
    slug: "spray-foam-vs-mud-jacking-insurance",
    title: "Spray Foam vs. Mud Jacking: Insurance Requirements Explained",
    excerpt:
      "Understanding the insurance differences between spray foam lifting and mud jacking can save you from costly coverage gaps. Here's what you need to know.",
    category: "Coverage Guide",
    readTime: "8 min read",
    date: "March 15, 2026",
    dateISO: "2026-03-15",
    featured: false,
    content: [
      "If you're a concrete lifting contractor, you've probably had someone ask whether your insurance covers both spray foam lifting and mud jacking. It's a fair question—and one that reveals why specialized coverage matters.",
      "The short answer: Most general commercial policies don't adequately cover either method. But the insurance differences between spray foam lifting and mud jacking are significant enough that you need to understand them before you sign any policy.",
      "## Spray Foam Lifting: The Pollution Liability Problem",
      "Polyurethane foam injection introduces a complication that mud jacking doesn't have: chemical liability. Many standard general liability policies explicitly exclude 'pollutant' coverage—and polyurethane foam falls into that category under most insurers' definitions.",
      "When a spray foam lifting job goes wrong—foam migrates where it shouldn't, causes property damage, or leads to a third-party injury claim—you need pollution liability coverage. Standard GL policies often deny these claims on pollutant exclusion grounds.",
      "At Concrete Lifting Insurance, our spray foam lifting policy includes ISO GL 99 17 pollution liability endorsements specifically written for foam injection contractors. This isn't an add-on or upgrade—it's built into the policy from day one.",
      "## Mud Jacking: The Property Damage Exposure",
      "Mud jacking presents different risks. The primary concern isn't pollution—it's physical property damage. A mud jacking blowout, where the slurry escapes the intended area and damages surrounding surfaces, can result in significant third-party property damage claims.",
      "Our mud jacking insurance is endorsed to cover blowout liability, overspray damage, and the unique completed operations exposure that comes with slab leveling work. Many generic commercial policies limit completed operations coverage, leaving mud jacking contractors exposed to claims filed months after the job is complete.",
      "## Why One Policy Can't Serve Both",
      "If you do both spray foam and mud jacking, you might think you can get by with a single 'concrete contractor' policy. In practice, this creates gaps. A policy written primarily for mud jacking may not have adequate pollution coverage for your foam work. A policy written primarily for foam injection may have sublimits on property damage that don't adequately cover mud jacking blowout scenarios.",
      "We write blended policies that address both methods with appropriate sublimits for each exposure. Your premium reflects the specific mix of work you do—not a one-size-fits-all rate.",
      "## What to Ask Your Insurance Agent",
      "When evaluating insurance for concrete lifting operations, ask these five questions:\n\n1. Does this policy cover polyurethane foam as a pollutant, or is it excluded?\n2. What are the completed operations aggregate limits?\n3. Is there a sublimit for blowout/overspray property damage?\n4. Does the policy cover equipment breakdown for my specific rig type?\n5. Is the policy endorsed specifically for concrete lifting operations, or is it a generic commercial policy?",
      "If your agent can't answer these questions confidently, it's time to find an agent who can. Concrete lifting insurance isn't a commodity—policies look similar on the surface but have meaningful differences in the fine print.",
      "Ready to review your coverage? Get a free quote from our team of concrete lifting insurance specialists.",
    ],
  },
  {
    slug: "general-liability-for-concrete-lifting-contractors",
    title: "General Liability for Concrete Lifting Contractors",
    excerpt:
      "General liability is the foundation of any concrete lifting insurance program—but standard GL policies often have exclusions that leave contractors exposed. Here's what to look for.",
    category: "Coverage Guide",
    readTime: "7 min read",
    date: "March 10, 2026",
    dateISO: "2026-03-10",
    featured: false,
    content: [
      "General liability insurance is the policy every contractor carries and—for concrete lifting contractors—the policy most likely to have dangerous gaps. Understanding exactly what your GL covers (and what it doesn't) is one of the most important things you can do for your business.",
      "## What GL Actually Covers",
      "A standard commercial general liability policy covers three things: bodily injury to third parties, property damage to third-party property, and personal and advertising injury. For concrete lifting contractors, the most relevant exposures are property damage and bodily injury from job-site operations.",
      "If your equipment causes a crack in a client's driveway, a neighbor's vehicle is damaged when a slab shifts unexpectedly, or someone trips over your hoses and is injured—those are GL claims. A properly written GL policy covers defense costs and damages up to your policy limits.",
      "## The Pollutant Exclusion: The Biggest GL Gap for Foam Contractors",
      "Standard ISO GL policy forms contain a 'pollution exclusion' that excludes coverage for bodily injury or property damage arising from the discharge of pollutants. The problem for polyurethane foam contractors: foam is classified as a pollutant under most policy definitions.",
      "This means that without a pollution liability endorsement (ISO GL 99 17 or equivalent), your GL policy may deny foam-related claims entirely. This isn't a hypothetical risk—it's a documented coverage gap that has resulted in claim denials for contractors who didn't know to ask about it.",
      "The fix: require that your GL policy include an endorsement specifically removing the pollution exclusion for polyurethane foam lifting operations, or purchase a standalone pollution liability policy as a supplement.",
      "## Completed Operations: How Long Are You Covered?",
      "GL policies typically include 'completed operations' coverage, which covers claims that arise after a job is finished. The question is how long that coverage applies.",
      "Many standard GL policies have a completed operations aggregate that resets annually but doesn't extend coverage retroactively if you switch carriers. If you lift a slab in 2025 and the client files a claim in 2027, you need the carrier who was on risk in 2025 to cover it—or you need to carry ongoing coverage that includes prior acts.",
      "For concrete lifting contractors who offer multi-year workmanship warranties, this is a real exposure. Verify your completed operations term and aggregate before assuming you're covered.",
      "## Certificate of Insurance Requirements",
      "Many property managers, general contractors, and commercial clients will require certificates of insurance before allowing you on a job. Common requirements:\n\n- $1M per occurrence / $2M aggregate (minimum)\n- $2M/$4M for larger commercial projects\n- Additional insured endorsement naming the property owner or GC\n- Waiver of subrogation endorsement\n- 30-day cancellation notice",
      "Carrying adequate limits isn't just about claim protection—it's about being able to take the jobs you want. Contractors with lower limits get disqualified from bids regularly.",
      "## Recommended GL Structure for Concrete Lifting Contractors",
      "For most small to mid-size concrete lifting operations, we recommend: $1M per occurrence / $2M aggregate general liability, with a pollution liability endorsement removing the foam exclusion, completed operations aggregate equal to the per-occurrence limit, and additional insured endorsements available on request.",
      "If your revenue exceeds $1M or you regularly work on commercial projects, consider umbrella coverage to extend your limits to $3M-$5M. The additional premium is modest relative to the protection it provides.",
    ],
  },
  {
    slug: "equipment-coverage-for-polyurethane-foam-contractors",
    title: "Equipment Coverage for Polyurethane Foam Contractors",
    excerpt:
      "Your spray foam pump and proportioner are your most valuable assets. Here's how to make sure they're properly covered—and why standard policies fall short.",
    category: "Coverage Guide",
    readTime: "7 min read",
    date: "March 3, 2026",
    dateISO: "2026-03-03",
    featured: false,
    content: [
      "A Graco Reactor or Foam-iT proportioner represents $30,000–$80,000 of equipment sitting in a trailer that drives to job sites every day. If that equipment is stolen, damaged in transit, or breaks down mid-job, how quickly can you recover? The answer depends entirely on whether you have the right coverage.",
      "## Why Standard Commercial Auto Isn't Enough",
      "Many contractors assume their commercial auto policy covers the trailer and equipment inside it. It doesn't—not really. Commercial auto covers the vehicle and liability arising from its operation on public roads. The equipment inside the trailer—your spray foam pump, hoses, guns, and proportioner—is typically not covered under auto unless you've specifically added an equipment floater or inland marine endorsement.",
      "Test this yourself: call your auto carrier and ask if a $45,000 spray foam proportioner stolen from your locked trailer overnight is covered. If the answer isn't a confident 'yes' with a clear explanation of how, you probably don't have equipment coverage.",
      "## Inland Marine / Equipment Floater Coverage",
      "The correct coverage for portable contractor equipment is an inland marine policy, often called an 'equipment floater.' This covers your equipment against theft, vandalism, fire, accidental damage, and often equipment breakdown—wherever the equipment is located, not just when it's in transit.",
      "Key terms to understand when evaluating equipment floater policies:\n\n- **Scheduled vs. blanket coverage**: Scheduled coverage lists each piece of equipment individually with a stated value. Blanket coverage covers all equipment up to an aggregate limit. Scheduled coverage is more precise and usually better for high-value individual items.\n- **Actual Cash Value vs. Replacement Cost**: ACV policies depreciate equipment value—your 3-year-old proportioner might be settled at 60% of its current market replacement cost. Replacement cost coverage pays what it actually costs to replace the equipment today.\n- **Deductibles**: Equipment floater deductibles typically range from $500 to $5,000. Higher deductibles mean lower premiums.",
      "## Equipment Breakdown Coverage",
      "Separate from physical damage coverage, equipment breakdown (also called boiler & machinery) covers repair or replacement costs when equipment fails due to mechanical or electrical breakdown—not caused by external damage but by internal failure.",
      "For foam proportioners, this is meaningful coverage. Proportioners run at high pressure and temperature, and mechanical failures are not rare. A compressor failure, hydraulic pump breakdown, or heating element failure can cost $5,000–$25,000 to repair. Equipment breakdown coverage typically pays for repair or replacement, lost business income during the breakdown period, and expediting expenses (rush shipping for parts).",
      "## What to Schedule on Your Policy",
      "For a typical spray foam lifting operation, your equipment schedule should include:\n\n- Proportioner/reactor unit (serial number, model, purchase value)\n- Transfer pumps\n- Spray guns and hoses\n- Generator(s)\n- Air compressor(s)\n- Service truck tools and equipment\n- Trailer (may be covered under auto)\n- Mixing tanks and drums",
      "Keep your schedule updated annually. Equipment purchased after the policy effective date isn't automatically covered unless your policy has a 'newly acquired equipment' provision—and even then, you typically need to report it within 30–90 days.",
      "## Total Cost of a Proper Equipment Program",
      "For a mid-size foam lifting operation with $150,000 in total equipment value, expect to pay $2,500–$5,000/year for a properly structured inland marine policy with equipment breakdown. That's roughly 1.5–3% of equipment value annually—a reasonable cost for the peace of mind that a stolen rig won't end your business.",
    ],
  },
  {
    slug: "workers-comp-for-concrete-leveling-crews",
    title: "Workers Comp for Concrete Leveling Crews",
    excerpt:
      "Workers compensation for concrete leveling contractors has classification quirks that can cost you thousands if not handled correctly. Here's what to know before renewal.",
    category: "Workers Comp",
    readTime: "9 min read",
    date: "February 26, 2026",
    dateISO: "2026-02-26",
    featured: false,
    content: [
      "Workers compensation is mandatory in nearly every state once you have a single employee. For concrete lifting contractors, it's also one of the most commonly mismanaged insurance lines—largely because most general agents aren't familiar with the correct classification codes for lifting work.",
      "## Why Classification Codes Matter So Much",
      "Workers compensation premiums are calculated on payroll, multiplied by a rate per $100 of payroll. That rate is determined by classification code. A crew member classified under a higher-rate code could cost you 30–50% more in annual premium than the same person classified correctly.",
      "Concrete lifting work can legitimately fall under several different NCCI (National Council on Compensation Insurance) codes depending on the specific work being performed. Common codes used for concrete lifting include codes in the concrete work, specialty contractor, and—critically—foam insulation categories. Getting this wrong isn't just costly; it can also create coverage disputes if an injured worker was performing work that doesn't match their classification.",
      "## Common Injuries in Concrete Lifting",
      "Workers comp exists to pay for on-the-job injuries. For concrete lifting crews, the most common claims involve:\n\n- Back and shoulder injuries from lifting heavy equipment, hoses, and drums\n- Chemical exposure from polyurethane foam components (isocyanate)\n- Slip and fall injuries on job sites\n- Equipment-related hand and finger injuries\n- Heat exposure when working with hot foam injection equipment",
      "Policies that adequately cover these exposures need to correctly describe the actual work your crew performs. If your application describes work that doesn't match what your crew actually does, you may face coverage disputes at claim time.",
      "## Experience Modification Rate (EMR)",
      "Your experience modification rate (EMR or e-mod) compares your actual claims history against the expected claims for your industry. An EMR of 1.0 is average. Below 1.0, you're better than average and receive a premium credit. Above 1.0, you pay a surcharge.",
      "A 0.85 EMR on a $20,000 workers comp premium saves you $3,000. A 1.25 EMR on the same premium costs you an extra $5,000. Managing your EMR matters.",
      "The most effective way to improve your EMR over time is a combination of documented safety programs that reduce claims frequency, aggressive return-to-work programs that get injured workers back on modified duty quickly, and prompt claim reporting that allows insurers to manage costs before they escalate.",
      "## All-States Coverage vs. State-Specific Policies",
      "If your crew works across state lines, you need workers comp coverage in every state where work is performed. Some policies include 'all-states' coverage that extends automatically to most states. Others are written for specific states only.",
      "For concrete lifting contractors who travel to jobs in multiple states, verify that your policy includes all-states coverage or confirm that you have certificates for each state where work is performed. Getting this wrong can result in uncovered claims and, in some states, significant fines.",
      "## Owner-Operator Exclusions",
      "If you are the sole owner of your business, you may be able to exclude yourself from workers comp coverage in most states, reducing your premium. This is a common and legitimate practice for owner-operators—but it also means you have no workers comp coverage if you're injured on the job. Evaluate this trade-off carefully, particularly if you're actively doing physical work on job sites.",
      "## Getting the Right Policy",
      "When shopping workers comp for a concrete lifting operation, bring your agent: your payroll breakdown by role (owner, foreman, laborer), a clear description of the specific work performed (foam injection vs. mud jacking vs. both), the states where you work, and your prior claims history (loss runs). A well-prepared submission gets better rates.",
    ],
  },
  {
    slug: "reduce-insurance-premium",
    title: "How to Reduce Your Concrete Lifting Insurance Premium by 20%",
    excerpt:
      "Practical steps concrete lifting contractors can take to lower their insurance costs without sacrificing coverage quality.",
    category: "Cost Savings",
    readTime: "6 min read",
    date: "March 8, 2026",
    dateISO: "2026-03-08",
    featured: false,
    content: [
      "Insurance premiums for concrete lifting contractors have been rising 8-12% annually for the past three years. Here's how smart contractors are beating the trend.",
      "## Bundle Your Coverage",
      "The single most effective way to reduce your premium is to bundle multiple coverage types with the same carrier. Contractors who combine general liability, workers comp, and commercial auto typically save 12-18% versus buying each policy separately.",
      "## Raise Your Deductible",
      "Increasing your general liability deductible from $1,000 to $5,000 typically reduces your premium by 15-20%. If you have a solid claims history and can absorb a larger out-of-pocket in the rare event of a claim, this trade-off often makes sense.",
      "## Implement a Safety Program",
      "Insurance carriers reward contractors with documented safety programs. This doesn't mean complicated OSHA compliance paperwork—it means having written job procedures, requiring safety equipment use, and documenting crew training.",
      "Contractors with documented safety programs typically receive 5-10% premium credits. Some carriers offer larger credits for completing specific safety course certifications.",
      "## Review Your Payroll Classification",
      "Workers comp premiums are heavily influenced by payroll classification codes. Concrete lifting work can sometimes be misclassified under higher-rate codes. A review of your classification codes by an experienced agent often reveals savings opportunities.",
      "## Shop Markets Annually",
      "Insurance is a competitive market, but many contractors set their coverage and forget it. Getting annual quotes from at least three markets ensures you're not overpaying as your risk profile changes.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
