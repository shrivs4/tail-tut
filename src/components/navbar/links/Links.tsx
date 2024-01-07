import React from "react";
import Link from "next/link";

export default function Links() {
  const links:any = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return <div>
    {links.map((link:any) => (
        <Link key={link?.title} href={link?.path}>{link?.title}</Link>
    ))}
  </div>;
}
