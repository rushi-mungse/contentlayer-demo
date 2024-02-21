import { useMDXComponent } from "next-contentlayer/hooks";
import cx from "clsx";
import NextLink from "next/link";

export const FOCUS_VISIBLE_OUTLINE = `focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/70`;

export const LINK_STYLES = `decoration-none text-orange-500 transition-all hover:text-orange-500`;

export const LINK_SUBTLE_STYLES = `hover:text-orange-200/90 decoration-none`;

export const HEADING_LINK_ANCHOR = `before:content-['#'] before:absolute before:-ml-[1em] before:text-orange-100/0 hover:before:text-orange-600 pl-[1em] -ml-[1em]`;

type MdxProps = {
    code: string;
};

const components = {
    h1: (props: any) => (
        <h2
            className="relative mt-3 border-t-2 border-orange-500/60 pt-9 text-xl font-medium text-orange-500 sm:text-3xl"
            {...props}
        />
    ),
    h2: (props: any) => (
        <h3
            className="relative mt-3 border-t-2 border-orange-500/60 pt-9 text-xl font-medium text-orange-500 sm:text-2xl"
            {...props}
        />
    ),
    h3: (props: any) => (
        <h4 className="text-xl font-medium text-orange-500/90" {...props} />
    ),
    h4: (props: any) => (
        <h5 className="text-lg font-medium text-orange-500/90" {...props} />
    ),
    hr: (props: any) => (
        <hr
            className="relative border-t-2 border-orange-500/60 pt-9 sm:pt-10"
            {...props}
        />
    ),
    ul: (props: any) => (
        <ul
            className="space-y-3 [li>&]:mt-3 [&>li]:relative [&>li]:pl-7 [&>li]:list-none before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-3 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-orange-500/60"
            {...props}
        />
    ),
    ol: (props: any) => (
        <ol className="list-decimal space-y-3 pl-10" {...props} />
    ),
    strong: (props: any) => (
        <strong className="font-semibold text-orange-500" {...props} />
    ),
    blockquote: (props: any) => (
        <blockquote
            className="border-l-2 border-orange-500/30 pl-4 text-xl italic xl:!col-start-2 xl:!col-end-3"
            {...props}
        />
    ),
    del: (props: any) => (
        <del className="text-orange-500/70 line-through" {...props} />
    ),
    a: ({ href = "", ...props }) => {
        if (href.startsWith("http")) {
            return (
                <a
                    className={cx(
                        "no-underline",
                        LINK_STYLES,
                        FOCUS_VISIBLE_OUTLINE,
                        HEADING_LINK_ANCHOR
                    )}
                    href={href}
                    target="_blank"
                    rel="noopener"
                    {...props}
                />
            );
        }

        return (
            <NextLink
                href={href}
                className={cx(
                    LINK_STYLES,
                    FOCUS_VISIBLE_OUTLINE,
                    HEADING_LINK_ANCHOR
                )}
                {...props}
            />
        );
    },
    code: (props: any) => (
        <code className="px-1 rounded-md bg-gray-200 py-[1px]" {...props} />
    ),
    pre: (props: any) => <pre className="bg-transparent " {...props} />,
};

const Mdx = ({ code }: MdxProps) => {
    const Post = useMDXComponent(code);
    return <Post components={components} />;
};

export default Mdx;
