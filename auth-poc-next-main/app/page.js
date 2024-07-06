import Image from "next/image";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <main className="flex flex-col mt-20 gap-24 text-center">
      <h1 className="text-4xl font-extrabold font-mono">Home Page</h1>

      <div className="flex flex-col bg-white text-black w-96 h-96">
        <h3>heading</h3>
        <ul className="text-black">
          {data.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>{item.email}</p>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/login">
        <button className="inline-block p-3 rounded-lg bg-[#f1fd02] text-teal-950 border-2 border-[#f1fd02]">
          Go to Login
        </button>
      </Link>
    </main>
  );
}
