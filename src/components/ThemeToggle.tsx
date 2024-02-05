"use client";
import { ReactNode } from "react";
import { Moon as MoonIcon, Sun as SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

interface ThemeToggleProps {
    children?: ReactNode;
}

export default function ThemeToggle({
    children,
}: ThemeToggleProps): JSX.Element {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
                <MoonIcon className="h-4 absolute w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            {children}
        </>
    );
}
