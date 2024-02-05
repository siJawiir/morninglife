import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
    const { theme, setTheme } = useTheme();

    return (
        <Link href="/">
            {theme === "dark" ? (
                <Image src="/logo.svg" width={54} height={54} alt="logo" />
            ) : (
                <Image
                    src="/logo-black.svg"
                    width={54}
                    height={54}
                    alt="logo"
                />
            )}
        </Link>
    );
}
