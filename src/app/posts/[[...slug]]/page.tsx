import { DashboardTableOfContents } from "@/components/dash-board-toc";
import Mdx from "@/components/mdx";
import { getTableOfContents } from "@/components/toc";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

type PostPageProps = {
    params: {
        slug: string[];
    };
};

const getPostFromParams = async ({ params }: PostPageProps) => {
    const slug = params.slug?.join("/") || "";
    const post = allPosts.find((post) => post.slug === slug);
    if (!post) return null;
    return post;
};

const PostPage = async ({ params }: PostPageProps) => {
    const post = await getPostFromParams({ params });
    if (!post) return notFound();
    const toc = await getTableOfContents(post.body.raw);

    return (
        <div className="min-h-screen">
            <div className="grid grid-cols-[1fr_300px]">
                <div className="text-white prose md:mt-8 prose-code:text-orange-500 prose-code:before:text-[0px] prose-code:after:text-[0px] prose-code:bg-zinc-800 prose-code:rounded-full prose-code:px-2 ">
                    <h1 className="text-2xl font-medium text-orange-500 sm:text-3xl">
                        {post.title}
                    </h1>
                    <Mdx code={post.body.code} />
                </div>
                {toc && (
                    <div className="hidden text-sm xl:block">
                        <div className="sticky top-2">
                            <div className="pb-10">
                                <div className="sticky">
                                    <DashboardTableOfContents toc={toc} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostPage;
