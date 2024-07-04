import React from "react";

export default async function Comments({ promise }) {
  const comments = await promise;
  let i = 1;
  return (
    <div className="mt-5">
      <ul>
        {comments.map((comment) => (
          <li className="mb-3" key={comment.id}>
            {i++}. {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
