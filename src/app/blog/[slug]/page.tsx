import { fetchAPI } from "@/lib/graphql";
import { notFound } from "next/navigation";
import { Sidebar } from "@/components/layout/Sidebar";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

const GET_POST_BY_SLUG = `
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      date
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const data: any = await fetchAPI(GET_POST_BY_SLUG, { slug: params.slug });
    const post = data?.post;

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Creavoid Blog`,
    };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const data: any = await fetchAPI(GET_POST_BY_SLUG, { slug: params.slug });
    const post = data?.post;

    if (!post) {
        notFound();
    }

    return (
        <div className="container px-4 py-12 md:px-6">
            <div className="mb-8">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
                {/* Main Content */}
                <article className="prose prose-neutral dark:prose-invert max-w-none lg:prose-lg">
                    {/* Header */}
                    <header className="not-prose mb-8">
                        <div className="mb-4 flex items-center gap-2">
                            {post.categories?.nodes.map((cat: any) => (
                                <span key={cat.name} className="bg-secondary px-2 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground rounded">
                                    {cat.name}
                                </span>
                            ))}
                        </div>

                        <h1 className="mb-6 font-serif text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 text-sm text-muted-foreground border-b border-border pb-8">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span className="font-medium">{post.author?.node?.name || "Creavoid"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    {post.featuredImage?.node?.sourceUrl && (
                        <div className="mb-10 overflow-hidden rounded-2xl bg-muted not-prose">
                            <img
                                src={post.featuredImage.node.sourceUrl}
                                alt={post.title}
                                className="w-full object-cover"
                            />
                        </div>
                    )}

                    {/* WP Content */}
                    <div
                        className="wp-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                {/* Sidebar */}
                <div className="hidden lg:block">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}
