import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allBlogSlugs, getBlogPost } from "@/content/blog";
import { BlogPostTemplate } from "@/components/templates/BlogPostTemplate";
import { ComingSoonPage } from "@/components/content/ComingSoonPage";
import { buildBlogMetadata } from "@/lib/seo/metadata";
import { buildComingSoonMetadata } from "@/lib/seo/comingSoon";
import { isPublished } from "@/content/publish";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return allBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  if (!isPublished(post.seo.canonicalPath)) {
    return buildComingSoonMetadata(post.h1);
  }
  return buildBlogMetadata(post.seo, {
    publishedAt: post.publishedAt,
    modifiedAt: post.updatedAt ?? post.publishedAt,
  });
}

export default function BlogSlugPage({ params }: PageProps) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  if (!isPublished(post.seo.canonicalPath)) {
    return (
      <ComingSoonPage
        title={post.h1}
        module="blog"
        path={post.seo.canonicalPath}
      />
    );
  }
  return <BlogPostTemplate content={post} />;
}
