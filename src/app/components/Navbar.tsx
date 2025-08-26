"use client"; // makes it interactive
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd", display: "flex", justifyContent: "flex-end" }}>
      <Link href="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link href="/chart">Chart</Link>
    </nav>
  );
}
