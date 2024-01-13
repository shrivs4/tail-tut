import React from "react";
import Link from "next/link";
import styles from './links.module.css';
import NavLink from "./navLink/navLink";

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

  //temp
  const session = true;
  const isAdim = true;

  return <div className={styles.links}>
    {links.map((link:any) => (
        <NavLink item={link} key={link.title}/>
    ))}
    { session ?
    <>
      {isAdim && <NavLink item={{title:'Admin', path:'/admin'}}/>}
      <button>Logout</button>
    </>
    :
    (<NavLink item={{title:'Login', path:'/login'}}/>)}
  </div>;
}
