import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

interface NavbarProps {
    containerStyles: string;
    linkStyles: string;
    underlineStyles: string;
}

interface NavLink {
    name: string;
    path: string;
}

const links: NavLink[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Projects",
        path: "/projects",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];

export default function Navbar({
    containerStyles,
    linkStyles,
    underlineStyles,
}: NavbarProps): JSX.Element {
    const path = usePathname();

    return (
        <nav className={containerStyles}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.path}
                    className={`capitalize ${linkStyles}`}
                >
                    {link.path === path && (
                        <motion.span
                            initial={{ y: "-100%" }}
                            animate={{ y: 0 }}
                            transition={{ type: "tween" }}
                            layoutId="underline"
                            className={underlineStyles}
                        ></motion.span>
                    )}
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}
