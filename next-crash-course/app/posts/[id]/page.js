import React, { Suspense } from "react";
import getPost from "@/lib/getPost";
import getPostComment from "@/lib/getPostComment";
import Comments from "@/app/components/Comments";
import getAllPosts from "@/lib/getAllPosts";

export async function generateMetadata({ params }) {
  return {
    title: `Post: ${params.id}`,
    description: params.id,
  };
}

export default async function SinglePostPage({ params }) {
  const { id } = params;
  const postPromise = getPost(id);
  const commentPromise = getPostComment(id);

  const post = await postPromise;
  return (
    <div className="p-5 rounded-lg mt-10">
      <h1 className="text-2xl text-yellow-400">
        {post.id}. {post.title}
      </h1>
      <p className="mt-5 mb-5">{post.body}</p>
      <hr />
      <h1 className="mt-5">Comments</h1>
      <Suspense fallback="<h1>Loading Comments...</h1>">
        <Comments promise={commentPromise} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id,
  }));
}
