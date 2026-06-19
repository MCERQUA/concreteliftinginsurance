import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Browse our services, blog, or get a free concrete lifting insurance quote.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-background">
      <div className="max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
          404 — Page Not Found
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          This slab won&apos;t level.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist, has been moved,
          or was retired. Pick a destination below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-bold hover:opacity-90 transition"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center border border-border px-8 py-3.5 rounded-lg font-bold hover:bg-secondary transition"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center border border-border px-8 py-3.5 rounded-lg font-bold hover:bg-secondary transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-border px-8 py-3.5 rounded-lg font-bold hover:bg-secondary transition"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
