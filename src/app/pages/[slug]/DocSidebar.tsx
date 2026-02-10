"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

interface DocSidebarProps {
    toc: TocItem[];
}

export default function DocSidebar({ toc }: DocSidebarProps) {
    const [activeId, setActiveId] = useState<string>("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            { rootMargin: "-80px 0px -70% 0px", threshold: 0.1 }
        );

        toc.forEach((item) => {
            const el = document.getElementById(item.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [toc]);

    const handleClick = (id: string) => {
        setActiveId(id);
        setIsOpen(false);
        const el = document.getElementById(id);
        if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="doc-sidebar-toggle lg:hidden fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-lg shadow-violet-500/25 hover:bg-violet-500 transition-colors"
                aria-label="Table of Contents"
            >
                <List className="w-5 h-5" />
            </button>

            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside
                className={`doc-sidebar ${isOpen ? "doc-sidebar-open" : ""}`}
            >
                <div className="doc-sidebar-inner">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                        <List className="w-4 h-4 text-violet-400" />
                        <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                            On this page
                        </span>
                    </div>
                    <nav>
                        <ul className="space-y-1">
                            {toc.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => handleClick(item.id)}
                                        className={`doc-toc-item ${item.level === 3 ? "doc-toc-sub" : ""} ${activeId === item.id ? "doc-toc-active" : ""}`}
                                    >
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}
