import React from 'react'
import Link from 'next/link'
export default function AboutLayout({ children }) {
  return (
    <div>
      <nav className="mt-5 mb-5">
        <ul className="flex gap-10">
          <li>
            <Link href="/about/mission">Mission</Link><hr />
          </li>

          <li >
            <Link href="/about/vission">Vission</Link><hr />
          </li>
        </ul>

      </nav>
      {children}
    </div>
  )
}
