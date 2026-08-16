import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedBackground } from "@/components/animated-background";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Concrete Lifting Insurance Resources & Blog",
  description:
    "Expert insights on concrete lifting insurance, risk management, OSHA compliance, and industry news for spray foam and mud jacking contractors.",
  alternates: { canonical: "https://concreteliftinginsurance.com/blog/" },
};

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured);
  const otherPosts = blogPosts.filter((p) => !p.featured);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(154, 52, 18,0.1)] border border-[rgba(154, 52, 18,0.3)] mb-6">
              <span className="text-xs font-bold text-[#9a3412] uppercase tracking-wider">Resources</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#1c1917] mb-6">
              Concrete Lifting{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #9a3412 0%, #c2410c 100%)" }}
              >
                Insurance Resources
              </span>
            </h1>
            <p className="text-xl text-[#57534e] leading-relaxed">
              Expert insights, risk management strategies, and industry news for spray foam and mud
              jacking contractors.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="relative pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block rounded-3xl overflow-hidden"
              style={{
                background: "rgba(250, 250, 249,0.95)",
                border: "1px solid rgba(154, 52, 18,0.2)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div
                  className="aspect-[16/10] md:aspect-auto relative"
                  style={{
                    background: "linear-gradient(135deg, rgba(154, 52, 18,0.15) 0%, rgba(194, 65, 12,0.1) 100%)",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#9a3412]/20 text-6xl font-black">Featured</span>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#9a3412]/20 text-[#9a3412] text-xs font-bold rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-[#78716c] text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-[#1c1917] mb-4 group-hover:text-[#9a3412] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#57534e] leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-2 text-[#9a3412] font-bold text-sm group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="relative pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(250, 250, 249,0.95)",
                  border: "1px solid rgba(154, 52, 18,0.12)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="aspect-[16/9] relative"
                  style={{
                    background: "linear-gradient(135deg, rgba(154, 52, 18,0.08) 0%, rgba(194, 65, 12,0.05) 100%)",
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Tag className="w-8 h-8 text-[#9a3412]/20" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-[rgba(154, 52, 18,0.1)] text-[#9a3412] text-xs font-bold rounded-md">
                      {post.category}
                    </span>
                    <span className="text-[#78716c] text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-[#1c1917] mb-2 group-hover:text-[#9a3412] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#57534e] text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-[#78716c]">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
