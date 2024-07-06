import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="mt-5">
      <h1>Posts Page</h1>
      <br />
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="p-4">
            {/* <Link href={`/posts/${post.id}`}>
            <h1 className=" text-2xl">{post.title}</h1> 
            </Link> */}
            <h1 className=" text-2xl">{post.Content}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
