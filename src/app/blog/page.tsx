import { fetchAPI } from "@/lib/graphql";
import Link from "next/link";
import { ArrowRight, User, Calendar } from "lucide-react";
import { Sidebar } from "@/components/layout/Sidebar";

const GET_POSTS = `
  query GetPosts {
    posts(first: 10) {
      nodes {
        id
        slug
        title
        excerpt
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
  }
`;

export default async function BlogPage() {
    const data: any = await fetchAPI(GET_POSTS);
    const posts = data?.posts?.nodes || [];

    return (
        <div className="container px-4 py-12 md:px-6">
            {/* Page Header */}
            <div className="mb-12 text-center">
                <h1 className="font-serif text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
                    Aktuelle <span className="text-[#29A0B1]">Einblicke</span>
                </h1>
                <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
                    Analysen zu Technologie, Business und digitaler Kultur.
                </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
                {/* Main Content Area */}
                <main className="grid gap-8 sm:grid-cols-2">
                    {posts.map((post: any) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                                {post.featuredImage?.node?.sourceUrl ? (
                                    <img
                                        src={post.featuredImage.node.sourceUrl}
                                        alt={post.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center bg-secondary text-muted-foreground">
                                        Kein Bild
                                    </div>
                                )}
                                {/* Category Badge */}
                                {post.categories?.nodes[0]?.name && (
                                    <div className="absolute bottom-4 left-4 rounded-md bg-black/80 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                                        {post.categories.nodes[0].name}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-5">
                                {/* Metadata */}
                                <div className="mb-3 flex items-center gap-4 text-xs font-medium text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <User className="h-3 w-3" />
                                        {post.author?.node?.name || "Creavoid"}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        {new Date(post.date).toLocaleDateString("de-DE")}
                                    </div>
                                </div>

                                <h2 className="mb-3 line-clamp-2 font-serif text-xl font-bold leading-tight group-hover:text-primary">
                                    {post.title}
                                </h2>

                                <div
                                    className="mb-4 line-clamp-3 text-sm text-muted-foreground"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                />

                                <div className="mt-auto flex items-center text-sm font-bold text-primary">
                                    Artikel lesen <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </main>

                {/* Sidebar */}
                <Sidebar />
            </div>
        </div>
    );
}
