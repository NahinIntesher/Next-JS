"use client";

import React, { useEffect, useState } from "react";
import getAllUsers from "@/lib/getAllUsers";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedPosts = await getAllUsers();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-5">
      <h1>User Page</h1>
      <br />
      <ul className="flex flex-col gap-5 font-sens tracking-wide">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 bg-purple-900 border-b-indigo-100 rounded-lg flex flex-col gap-8"
          >
            <h1 className="text-amber-400 text-2xl">{post.name}</h1>
            <p>{post.Content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
