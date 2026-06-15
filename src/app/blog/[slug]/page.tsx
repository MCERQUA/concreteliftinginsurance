import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts, getPostBySlug, getAllPostSlugs } from "@/lib/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

function buildExcerpt(content: string[]): string {
  const firstPara = content.find((p) => !p.startsWith("##") && !p.startsWith("**") && p.trim().length > 60) ?? content[0] ?? "";
  return firstPara.replace(/\s+/g, " ").slice(0, 155).trim();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  const url = `https://concreteliftinginsurance.com/blog/${slug}/`;
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
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `https://concreteliftinginsurance.com/blog/${slug}/`;
  const description = buildExcerpt(post.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: {
      "@type": "Person",
      name: "Josh Cotner",
      url: "https://contractorschoiceagency.com/about-us",
    },
    publisher: {
      "@id": "https://concreteliftinginsurance.com/#organization",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: post.category,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://concreteliftinginsurance.com/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://concreteliftinginsurance.com/blog/" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AnimatedBackground />
      <Navbar />

      <article className="relative pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="rounded-3xl p-8 md:p-12 mb-12"
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
                // bold inline headings like "**1. Title** — text"
                if (paragraph.match(/^\*\*\d+\./)) {
                  const parts = paragraph.split(/\*\*/g).filter(Boolean);
                  return (
                    <p key={i} className="text-[#475569] leading-relaxed">
                      <strong className="text-[#0f172a]">{parts[0]}</strong>
                      {parts.slice(1).join("")}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-[#475569] leading-relaxed whitespace-pre-line">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div
            className="p-8 rounded-3xl text-center mb-12"
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
              href="/quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1e40af] to-[#3b82f6] text-white font-bold rounded-xl shadow-lg shadow-[#1e40af]/30 hover:shadow-[#1e40af]/50 transition-all"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-xl font-black text-[#0f172a] mb-5">More Resources</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group p-5 rounded-2xl hover:-translate-y-0.5 transition-transform"
                    style={{
                      background: "rgba(248,250,252,0.95)",
                      border: "1px solid rgba(30,64,175,0.12)",
                    }}
                  >
                    <span className="text-xs font-bold text-[#1e40af] uppercase tracking-wider">{p.category}</span>
                    <p className="font-bold text-[#0f172a] text-sm mt-1 group-hover:text-[#1e40af] transition-colors line-clamp-2">
                      {p.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
}
