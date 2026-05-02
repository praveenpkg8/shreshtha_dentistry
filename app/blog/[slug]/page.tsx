import Link from "next/link";
import { notFound } from "next/navigation";
import Placeholder from "@/components/Placeholder";
import BookCTA from "@/components/BookCTA";
import { formatBlogDate } from "@/lib/data";
import { getBlogPost, getBlogPosts } from "@/lib/content";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.id }));
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const p = await getBlogPost(params.slug);
  if (!p) notFound();
  return (
    <div className="page-enter">
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <Link href="/blog" className="btn btn-ghost" style={{ marginBottom: 32 }}>
            ← Back to journal
          </Link>
          <span className="chip chip-soft" style={{ marginBottom: 20 }}>{p.category}</span>
          <h1 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", marginBottom: 20, lineHeight: 1.1 }}>
            {p.title}
          </h1>
          <div style={{ fontSize: 14, color: "var(--c-ink-mute)", marginBottom: 32 }}>
            {formatBlogDate(p.date)} · {p.readTime}
          </div>
          <Placeholder
            label={`Header image — ${p.title}`}
            aspect="16/9"
            style={{ borderRadius: 24, marginBottom: 40 }}
            src={p.image || undefined}
          />
          <p style={{ marginBottom: 20, fontSize: 22, color: "var(--c-ink)", lineHeight: 1.5 }}>{p.excerpt}</p>
          <div className="prose" dangerouslySetInnerHTML={{ __html: p.html }} />
        </div>
      </section>
      <BookCTA />
    </div>
  );
}
