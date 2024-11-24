"use client";

import Link from 'next/link';
import styles from './styles.module.scss';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface MenuLink {
    name: string;
    href: string;
}

export default function Navbar() {

    const menuLinks: MenuLink[] = [
        { name: "หน้าหลัก", href: "/" },
        { name: "โปรเจกต์", href: "/projects" },
        { name: "บล็อก", href: "/blogs" },
        { name: "ติดต่อ", href: "/contact" }
    ];

    const pathname = usePathname();
    return (
        <nav className={styles.navbar}>
            <ul className={styles.menulist}>
                {menuLinks.map((menuLink, index) => {
                    return (
                        <Link key={menuLink.href} href={menuLink.href}>
                            <li className={clsx(pathname === menuLink.href && styles.active)}>{menuLink.name}</li>
                        </Link>
                    );
                })}
            </ul>
        </nav>
    );
}
