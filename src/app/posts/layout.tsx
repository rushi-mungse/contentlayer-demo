import PostSideBar from "../../components/post-side-bar";
import { postConfig } from "../../config/post-config";

interface DocsLayoutProps {
    children: React.ReactNode;
}

export default function ComponentsLayout({ children }: DocsLayoutProps) {
    return (
        <div className="border-b">
            <div className="container flex-1 items-start md:grid md:grid-cols-[150px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[150px_minmax(0,1fr)] lg:gap-10">
                <aside className="fixed top-0 z-30 -ml-2 hidden h-screen w-full shrink-0 md:sticky md:block border-r border-gray-500/20">
                    <div className="h-full py-6 pr-6 lg:py-8">
                        <PostSideBar items={postConfig} />
                    </div>
                </aside>
                {children}
            </div>
        </div>
    );
}
