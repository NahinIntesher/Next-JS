"use client";

import React, { useEffect, useState } from "react";
import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await getAllPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-5">
      <h1>Posts Page</h1>
      <br />
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="p-4">
            <Link href={`/posts/${post.id}`}>
              <h1 className=" text-2xl">{post.title}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
