import React from "react";
import Link from "next/link";

export default function Home({}) {
  return (
    <div className="flex flex-col mt-20 gap-10 text-center ">
      <h1 className="text-4xl font-extrabold font-mono">
        Log in to see your dashboard
      </h1>

      <Link href="/login">
        <button className="inline-block p-3 rounded-lg bg-[#f1fd02] text-teal-950 border-2 border-[#f1fd02]">
          Go to Login
        </button>
      </Link>
      <Link href="/register">
        <button className="inline-block p-3 rounded-lg bg-[#f1fd02] text-teal-950 border-2 border-[#f1fd02]">
          Go to Register
        </button>
      </Link>
    </div>
  );
}
