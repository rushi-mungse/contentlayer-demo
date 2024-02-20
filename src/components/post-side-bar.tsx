import { PostConfigType } from "@/config/post-config";
import Link from "next/link";
type PostSideBarProps = {
    items: PostConfigType;
};

const PostSideBar = ({ items }: PostSideBarProps) => {
    return (
        <div className="flex pl-8 flex-col">
            {items.map((item, index) => (
                <Link key={index} href={item.href} className="text-orange-500">
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

export default PostSideBar;
