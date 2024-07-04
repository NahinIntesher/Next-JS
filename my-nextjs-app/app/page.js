import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col mt-20 gap-24 text-center ">

      <h1 className="text-4xl font-extrabold font-mono">
        Log in to see your dashboard
      </h1>

      <Link href="/login">
        <button className="inline-block p-3 rounded-lg bg- text-teal-950 border-2 border-sky-500">
          Go to Login
        </button>
      </Link>
    </main>
  );
}
