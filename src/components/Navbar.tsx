"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pages/rules", label: "Rules" },
    { href: "/pages/faq", label: "FAQ" },
    { href: "/resources", label: "Resources" },
    { href: "/pages/server-info", label: "Server Info" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/5">
            <div className="flex items-center justify-between w-full h-16 px-4 md:px-6 max-w-7xl mx-auto">
                <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center transition-transform group-hover:scale-110">
                        <Terminal className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg md:text-xl hidden sm:block">
                        CodeVerse Hub
                    </span>
                </Link>

                <ul className="hidden md:flex items-center h-16">
                    {navLinks.map((link) => (
                        <li key={link.label} className="h-full">
                            <Link
                                href={link.href}
                                className="relative overflow-hidden h-full flex items-center text-white text-sm font-medium px-4 lg:px-5 before:absolute before:inset-0 before:bg-white before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 hover:text-black transition-colors duration-300"
                            >
                                <span className="relative z-10">{link.label}</span>
                            </Link>
                        </li>
                    ))}
                    <li className="h-full">
                        <a
                            href="https://discord.gg/3xKFvKhuGR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-full flex items-center px-5 text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300"
                        >
                            Join Discord
                        </a>
                    </li>
                </ul>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </button>
            </div>

            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px]" : "max-h-0"
                    }`}
            >
                <ul className="flex flex-col bg-black border-t border-white/10">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-white text-base font-medium px-6 py-4 border-b border-white/5 hover:bg-white/5 transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <a
                            href="https://discord.gg/3xKFvKhuGR"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-white text-base font-bold px-6 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600"
                        >
                            Join Discord
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
