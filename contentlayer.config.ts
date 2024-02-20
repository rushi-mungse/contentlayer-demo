import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        date: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
            required: true,
        },
        status: {
            type: "enum",
            options: ["pulished", "draft"],
            required: true,
        },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ""),
        },
        url: {
            type: "string",
            resolve: (post) => `/posts/${post._raw.flattenedPath}`,
        },
    },
}));

export default makeSource({
    contentDirPath: "./src/content",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            [rehypeSlug],
            [
                rehypeAutolinkHeadings,
                {
                    behavior: "wrap",
                },
            ],
        ],
    },
});
