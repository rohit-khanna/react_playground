import Link from 'next/link'
import React from 'react'
import Logo from "@/assets/logo.png"
import styles from "./main-header.module.css";
import Image from 'next/image';
import MainHeaderBackground from './main-header-background';
import { usePathname } from 'next/navigation';
import { NavLink } from './nav-link';

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={styles.header}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <Image src={Logo} alt="food logo" priority />
                    NextLevel Food
                </Link>

                {/* Nav */}
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals" title="Browse Meals" />
                        </li>
                        <li>
                            <NavLink href="/community" title="Foodies Communities" />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
