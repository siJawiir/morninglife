"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import ToggleNav from "./ToggleNav";
import { usePathname } from "next/navigation";

export default function Header(): JSX.Element {
    const [header, setHeader] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setHeader(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${
                header
                    ? "py-4 bg-white shadow-lg dark:bg-accent"
                    : "py-6 dark:bg-transparent"
            } sticky top-0 z-30 transition-all ${
                pathName === "/"
            } && bg-[fef9f5]`}
        >
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        <Navbar
                            containerStyles="hidden xl:flex gap-x-6 items-center"
                            linkStyles="relative hover:text-primary transition-all"
                            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
                        />
                        <ThemeToggle />
                        <div className="xl:hidden">
                            <ToggleNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
