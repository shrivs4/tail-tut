"use client"
import React from 'react';
import Link from 'next/link';
import styles from './navlink.module.css';
import { usePathname } from 'next/navigation';

export default function NavLink({item}:any) {
    const pathName = usePathname();
  return (
    <Link key={item?.title} 
    href={item?.path}
    className={`${styles.container} ${pathName === item?.path && styles.active}`}>
        {item?.title}
    </Link>
  )
}
