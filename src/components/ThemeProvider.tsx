"use client";

import { ReactNode } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface ThemeProviderProps {
    children: ReactNode;
    attribute: string;
    defaultTheme: string;
}

export default function ThemeProvider({
    children,
    attribute,
    defaultTheme,
    ...props
}: ThemeProviderProps): JSX.Element {
    return (
        <NextThemeProvider
            attribute={attribute}
            defaultTheme={defaultTheme}
            {...props}
        >
            {children}
        </NextThemeProvider>
    );
}
