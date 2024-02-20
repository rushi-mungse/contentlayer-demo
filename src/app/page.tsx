import Link from "next/link";
export default function Home() {
    return (
        <div className="bg-zinc-900 h-screen w-screen text-white">
            <Link href="/posts/hello">Posts</Link>
        </div>
    );
}
