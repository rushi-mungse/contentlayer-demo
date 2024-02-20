import Mdx from "@/components/mdx";
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

    return (
        <div className="bg-white min-h-screen w-screen">
            <div className="text-black prose md:mt-8 lg:pl-24">
                <h1 className="text-2xl font-medium text-orange-500 sm:text-3xl">
                    {post.title}
                </h1>
                <Mdx code={post.body.code} />
            </div>
        </div>
    );
};

export default PostPage;
