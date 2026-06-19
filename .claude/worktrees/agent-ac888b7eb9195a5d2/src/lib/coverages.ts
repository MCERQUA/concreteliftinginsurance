export interface Coverage {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  commonClaims: string[];
  typicalLimits: string;
}

export const coverages: Coverage[] = [
  {
    slug: "general-liability",
    title: "General Liability Insurance for Concrete Lifting Contractors",
    shortTitle: "General Liability",
    description:
      "Protect your business from third-party bodily injury and property damage claims arising from your concrete lifting operations.",
    longDescription:
      "General liability insurance is the foundation of every concrete lifting contractor's insurance program. Our GL policies are endorsed specifically for spray foam lifting and mud jacking operations—not generic commercial policies that leave gaps in foam-related claims.",
    icon: "Shield",
    features: [
      "Third-party bodily injury and property damage coverage",
      "Pollution liability endorsement for polyurethane foam operations",
      "Completed operations coverage up to 5 years",
      "Additional insured endorsements available",
      "Waiver of subrogation available",
      "Limits from $1M to $5M per occurrence",
      "Certificate of insurance on-demand",
      "Covers subcontractor work when required",
    ],
    commonClaims: [
      "Client slips and falls on your job site",
      "Foam migration damages adjacent property",
      "Lifted slab injures a third party post-completion",
      "Equipment damages client's landscaping or driveway",
    ],
    typicalLimits: "$1M/$2M to $2M/$4M depending on project requirements",
  },
  {
    slug: "workers-comp",
    title: "Workers Compensation Insurance for Concrete Lifting Crews",
    shortTitle: "Workers Compensation",
    description:
      "Cover your crew for on-the-job injuries with workers comp designed for the physical demands of concrete lifting and leveling work.",
    longDescription:
      "Concrete lifting crews face real physical risks—back injuries from heavy equipment, chemical exposure from foam components, and slip-and-fall hazards on job sites. Our workers comp policies are written with correct classification codes for lifting work, so coverage actually matches what your crew does.",
    icon: "Users",
    features: [
      "Correct NCCI classification codes for concrete lifting work",
      "All-states coverage for contractors working across state lines",
      "Owner-operator exclusion available where applicable",
      "Experience modification rate (EMR) management support",
      "Return-to-work program guidance",
      "Chemical exposure coverage for isocyanate and foam components",
      "Coverage for foam pump and equipment operation injuries",
      "24/7 claims reporting hotline",
    ],
    commonClaims: [
      "Back injuries from lifting equipment and material drums",
      "Chemical exposure to polyurethane foam components",
      "Slip and fall injuries on job sites",
      "Hand and finger injuries from equipment operation",
    ],
    typicalLimits: "Statutory limits per state; employer's liability $100K/$500K/$100K standard",
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto Insurance for Concrete Lifting Rigs",
    shortTitle: "Commercial Auto",
    description:
      "Protect your fleet and mobile equipment—trucks, trailers, and concrete lifting rigs—with commercial auto coverage built for contractor operations.",
    longDescription:
      "Your spray foam rig or mud jacking trailer is your mobile business. Commercial auto covers liability on public roads and physical damage to your vehicles—but the equipment inside requires additional inland marine coverage. We write both so you get complete protection.",
    icon: "Truck",
    features: [
      "Liability coverage for company vehicles on public roads",
      "Physical damage coverage for trucks and trailers",
      "Hired and non-owned auto coverage for employee vehicle use",
      "Equipment in transit covered under inland marine endorsement",
      "Fleet discounts for 3+ vehicles",
      "Towing and rental reimbursement available",
      "Covers specialized trailer units and spray foam rigs",
      "Blanket additional insured for commercial contracts",
    ],
    commonClaims: [
      "Vehicle collision while driving to job site",
      "Trailer accident while hauling equipment",
      "Employee at-fault accident in personal vehicle on work errand",
      "Third-party injury from company vehicle operation",
    ],
    typicalLimits: "$1M combined single limit per occurrence standard",
  },
  {
    slug: "pollution-liability",
    title: "Pollution Liability Insurance for Foam Lifting Contractors",
    shortTitle: "Pollution Liability",
    description:
      "Polyurethane foam is classified as a pollutant under most standard GL policies. Pollution liability fills the gap that leaves foam contractors exposed.",
    longDescription:
      "The most common coverage gap for spray foam lifting contractors is the pollution exclusion buried in standard GL policy forms. When foam migrates beyond the intended area, causes chemical-related property damage, or results in third-party exposure claims, standard GL often denies coverage on pollutant grounds. Pollution liability coverage closes that gap.",
    icon: "AlertTriangle",
    features: [
      "Covers polyurethane foam as a covered pollutant",
      "Third-party bodily injury from chemical exposure",
      "Third-party property damage from foam migration",
      "Completed operations pollution coverage",
      "Defense costs within or outside policy limits",
      "Emergency response cost coverage",
      "Retroactive coverage available for prior operations",
      "Available as standalone policy or GL endorsement",
    ],
    commonClaims: [
      "Foam migrates under neighboring slab and causes cracking",
      "Client or neighbor claims chemical exposure from foam vapors",
      "Foam expansion causes unintended structural damage",
      "Regulatory action related to foam discharge",
    ],
    typicalLimits: "$500K to $2M per occurrence; $1M to $5M aggregate",
  },
  {
    slug: "equipment-breakdown",
    title: "Equipment Breakdown Insurance for Foam Pumps & Jacking Rigs",
    shortTitle: "Equipment Breakdown",
    description:
      "When your spray foam proportioner or mud jacking rig breaks down, equipment breakdown coverage pays for repairs and business income lost while you're down.",
    longDescription:
      "Your foam proportioner, hydraulic pump, and generator are high-pressure, high-temperature machines that work hard in harsh conditions. When they fail—and eventually they do—equipment breakdown coverage pays repair or replacement costs and can cover business income lost while equipment is out of service.",
    icon: "Wrench",
    features: [
      "Coverage for mechanical and electrical breakdown of equipment",
      "Spray foam proportioners and reactors scheduled by serial number",
      "Replacement cost coverage available (vs. actual cash value)",
      "Business income coverage during equipment downtime",
      "Expediting expense coverage for rush part shipping",
      "Inland marine floater covers theft and physical damage",
      "New equipment automatically covered for 30 days",
      "Annual equipment schedule review included",
    ],
    commonClaims: [
      "Proportioner compressor failure requiring rebuild",
      "Hydraulic pump failure on mud jacking rig",
      "Generator failure that delays job completion",
      "Spray gun or hose failure mid-job",
    ],
    typicalLimits: "Scheduled equipment values; inland marine blanket up to $500K aggregate",
  },
];

export function getCoverageBySlug(slug: string): Coverage | undefined {
  return coverages.find((c) => c.slug === slug);
}

export function getAllCoverageSlugs(): string[] {
  return coverages.map((c) => c.slug);
}
