import { notFound } from "next/navigation";
import React from "react";

export default function BlogPage({ params }) {
  const { id } = params;
  if (id >= 3) {
    notFound();
  }
  return (
    <div className="mt-5 p-4">
      <h1>The Blog id is: {id}</h1>
    </div>
  );
}
