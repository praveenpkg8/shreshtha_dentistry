import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { getServiceById } from "./data";

export type BlogPost = {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image?: string;
  html: string;
};

export type AboutContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroLede: string;
  missionTitle: string;
  missionBody: string;
  visionTitle: string;
  visionBody: string;
  commitments: { title: string; body: string }[];
};

const root = process.cwd();

async function mdToHtml(md: string): Promise<string> {
  const file = await remark().use(remarkHtml).process(md);
  return String(file);
}

export async function getServiceContent(id: string): Promise<string> {
  const svc = getServiceById(id);
  if (!svc?.contentFile) return "";
  const file = path.join(root, "content", "services", svc.contentFile);
  if (!fs.existsSync(file)) return "";
  const raw = fs.readFileSync(file, "utf8");
  const { content } = matter(raw);
  return mdToHtml(content);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const dir = path.join(root, "content", "blog");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const posts = await Promise.all(
    files.map(async (f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data, content } = matter(raw);
      const html = await mdToHtml(content);
      return {
        id: data.id || f.replace(/\.md$/, ""),
        title: data.title || "",
        category: data.category || "",
        readTime: data.readTime || "",
        date: data.date instanceof Date ? data.date.toISOString() : data.date || "",
        excerpt: data.excerpt || "",
        image: data.image || "",
        html,
      } as BlogPost;
    })
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPost(id: string): Promise<BlogPost | undefined> {
  const all = await getBlogPosts();
  return all.find((p) => p.id === id);
}

export async function getAboutContent(): Promise<AboutContent> {
  const file = path.join(root, "content", "about.md");
  const raw = fs.readFileSync(file, "utf8");
  const { data } = matter(raw);
  return data as AboutContent;
}
