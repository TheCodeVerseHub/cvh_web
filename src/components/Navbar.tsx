"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Terminal } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pages/rules", label: "Rules" },
    { href: "/pages/faq", label: "FAQ" },
    { href: "/resources", label: "Resources" },
    { href: "/pages/hall-of-fame", label: "Hall of Fame" },
];

const moreLinks = [
    { href: "/pages/code-of-conduct", label: "Code of Conduct" },
    { href: "/pages/how-to-ask", label: "How to Ask for Help" },
    { href: "/pages/how-to-help", label: "How to Help" },
    { href: "/pages/join", label: "Join Guide" },
    { href: "/pages/contributing", label: "Contributing" },
    { href: "/pages/moderation-guide", label: "Moderation Guide" },
    { href: "/pages/server-info", label: "Server Info" },
    { href: "/pages/privacy-policy", label: "Privacy Policy" },
    { href: "/pages/security-notice", label: "Security Notice" },
    { href: "/pages/tags", label: "Tags Reference" },
    { href: "/pages/acknowledgements", label: "Acknowledgements" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);

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
                    {/* More dropdown */}
                    <li className="relative h-full">
                        <button
                            type="button"
                            onClick={() => setIsMoreOpen((prev) => !prev)}
                            className="relative overflow-hidden h-full flex items-center gap-1.5 text-white text-sm font-medium px-4 lg:px-5 before:absolute before:inset-0 before:bg-white before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 hover:text-black transition-colors duration-300"
                        >
                            <span className="relative z-10">More</span>
                            <ChevronDown
                                className={`relative z-10 w-3.5 h-3.5 transition-transform duration-200 ${isMoreOpen ? "rotate-180" : ""}`}
                            />
                        </button>
                        {isMoreOpen && (
                            <div className="absolute right-0 top-full mt-1 w-64 rounded-lg border border-white/15 bg-black/95 backdrop-blur-md shadow-xl py-2 z-[60]">
                                {moreLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                                        onClick={() => setIsMoreOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
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
                    {/* Mobile: More section */}
                    <li className="pt-2 pb-1 px-6 text-xs font-semibold tracking-widest text-white/40 uppercase">
                        More
                    </li>
                    {moreLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-white/80 text-base px-6 py-3 border-b border-white/5 hover:bg-white/5 transition-colors"
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
