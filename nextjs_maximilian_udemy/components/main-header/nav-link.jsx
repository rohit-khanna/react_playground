"use client";
import React from 'react'
import styles from "./nav-link.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavLink = ({ href, title }) => {
    const path = usePathname()
    return (
        <Link href={href} className={path.startsWith(href) ? styles.active : undefined}>{title}</Link>
    )
}
