import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {cn} from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

const RootLayout = ({children}: RootLayoutProps) => {
    return (
        <html lang="en">
        <body
            className={cn(inter.className, "antialiased min-h-screen")}
        >
        {children}
        </body>
        </html>
    );
}

export default RootLayout;