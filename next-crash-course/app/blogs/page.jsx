import Link from "next/link";
export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Blog 1 description",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Blog 2 description",
    },
  ];
  return (
    <main className="mt-10 p-5">
      <div>
        <ul className="flex flex-col gap-2">
          {blogs.map((blog) => (
            <li
              className="p-4 bg-purple-900 border-b-indigo-100 rounded-lg"
              key={blog.id}
            >
              <Link href={`/blogs/${blog.id}`}> {blog.title} </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
