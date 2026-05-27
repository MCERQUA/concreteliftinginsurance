import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Clock, ArrowLeft, ArrowRight, Share2 } from "lucide-react";

const posts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}> = {
  "spray-foam-vs-mud-jacking-insurance": {
    title: "Spray Foam vs. Mud Jacking: Insurance Requirements Explained",
    date: "March 15, 2026",
    readTime: "8 min read",
    category: "Coverage Guide",
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
  "reduce-insurance-premium": {
    title: "How to Reduce Your Concrete Lifting Insurance Premium by 20%",
    date: "March 8, 2026",
    readTime: "6 min read",
    category: "Cost Savings",
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
};

interface Props {
  params: Promise<{ slug: string }>;
}

function buildExcerpt(content: string[]): string {
  const firstPara = content.find((p) => !p.startsWith("##") && p.trim().length > 60) ?? content[0] ?? "";
  return firstPara.replace(/\s+/g, " ").slice(0, 155).trim();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  const url = `https://concreteliftinginsurance.com/blog/${slug}`;
  const description = buildExcerpt(post.content);
  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description,
      siteName: "Concrete Lifting Insurance",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  const url = `https://concreteliftinginsurance.com/blog/${slug}`;
  const description = buildExcerpt(post.content);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Concrete Lifting Insurance" },
    publisher: {
      "@type": "Organization",
      name: "Concrete Lifting Insurance",
      logo: {
        "@type": "ImageObject",
        url: "https://concreteliftinginsurance.com/logo.png",
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.category,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://concreteliftinginsurance.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://concreteliftinginsurance.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <div className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AnimatedBackground />
      <Navbar />

      {/* Article */}
      <article className="relative pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#475569] hover:text-[#1e40af] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#1e40af]/20 text-[#1e40af] text-xs font-bold rounded-full">
                {post.category}
              </span>
              <span className="text-[#64748b] text-sm flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6">{post.title}</h1>
            <p className="text-[#64748b] text-sm">{post.date}</p>
          </div>

          {/* Content */}
          <div
            className="rounded-3xl p-8 md:p-12"
            style={{
              background: "rgba(248,250,252,0.95)",
              border: "1px solid rgba(30,64,175,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="prose prose-invert prose-lg max-w-none space-y-6">
              {post.content.map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={i} className="text-2xl font-black text-[#0f172a] mt-10 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <p key={i} className="text-[#0f172a] font-bold">
                      {paragraph.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                if (paragraph.startsWith("1. ") || paragraph.startsWith("2. ") || paragraph.startsWith("3. ") || paragraph.startsWith("4. ") || paragraph.startsWith("5. ")) {
                  return (
                    <p key={i} className="text-[#475569] leading-relaxed pl-4 border-l-2 border-[#1e40af]/30">
                      {paragraph}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-[#475569] leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div
            className="mt-12 p-8 rounded-3xl text-center"
            style={{
              background: "linear-gradient(135deg, rgba(30,64,175,0.1) 0%, rgba(30,64,175,0.05) 100%)",
              border: "1px solid rgba(30,64,175,0.2)",
            }}
          >
            <h3 className="text-2xl font-black text-[#0f172a] mb-3">Ready to Review Your Coverage?</h3>
            <p className="text-[#475569] mb-6">
              Get a free quote from our concrete lifting insurance specialists.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-bold rounded-xl shadow-lg shadow-[#1e40af]/30 hover:shadow-[#1e40af]/50 transition-all"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
