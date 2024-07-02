import React from "react";
import getAllUsers from "@/lib/getAllUsers";

export default async function PostsPage() {
  const student = await getAllUsers();

  return (
    <div className="mt-5">
      <h1>User Page</h1>
      <br />

      <ul className="flex flex-col gap-2">
        {student.map((student) => (
          <li
            className="p-4 bg-purple-900 border-b-indigo-100 rounded-lg"
            key={student.id}
          >
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
