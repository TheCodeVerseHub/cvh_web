"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    ExternalLink,
    BookOpen,
    Code,
    Wrench,
    Gamepad2,
    Video,
    BrainCircuit,
    Terminal,
} from "lucide-react";

interface Resource {
    title: string;
    url: string;
    description: string;
    tag?: string;
}

interface Category {
    id: string;
    label: string;
    icon: React.ReactNode;
    color: string;
    description: string;
    sections: {
        heading: string;
        resources: Resource[];
    }[];
}

const categories: Category[] = [
    {
        id: "python",
        label: "Python",
        icon: <Code className="w-5 h-5" />,
        color: "from-yellow-400 to-yellow-600",
        description:
            "From automating scripts to machine learning — the most beginner-friendly powerhouse.",
        sections: [
            {
                heading: "Beginner",
                resources: [
                    {
                        title: "Automate the Boring Stuff with Python",
                        url: "https://automatetheboringstuff.com/",
                        description:
                            "One of the best books out there for beginners. Teaches basics and automation.",
                        tag: "Free Book",
                    },
                    {
                        title: "CS50P: Intro to Programming with Python",
                        url: "https://cs50.harvard.edu/python/2022/",
                        description:
                            "Harvard's free self-paced course. Highly recommended.",
                        tag: "Course",
                    },
                    {
                        title: "Python Crash Course",
                        url: "https://nostarch.com/pythoncrashcourse2e",
                        description:
                            "A fast-paced, thorough introduction to programming with Python.",
                        tag: "Book",
                    },
                    {
                        title: "Real Python",
                        url: "https://realpython.com/",
                        description:
                            "A treasure trove of quizzes, tutorials, and content.",
                        tag: "Tutorials",
                    },
                ],
            },
            {
                heading: "Intermediate & Advanced",
                resources: [
                    {
                        title: "Fluent Python",
                        url: "https://www.oreilly.com/library/view/fluent-python/9781491946237/",
                        description:
                            "Deep dives into Python's internals. A must-read for professionals.",
                        tag: "Book",
                    },
                    {
                        title: "Effective Python",
                        url: "https://effectivepython.com/",
                        description:
                            "90 best practices for writing excellent Python code.",
                        tag: "Book",
                    },
                    {
                        title: "Software Design by Example",
                        url: "https://third-bit.com/sdxpy/",
                        description:
                            "A tool-based introduction to software design patterns in Python.",
                        tag: "Free Book",
                    },
                ],
            },
            {
                heading: "Data Science & ML",
                resources: [
                    {
                        title: "Data Science from Scratch",
                        url: "https://www.oreilly.com/library/view/data-science-from/9781492041122/",
                        description: "A ground-up introduction to data science.",
                        tag: "Book",
                    },
                    {
                        title: "Kaggle Pandas Tutorial",
                        url: "https://www.kaggle.com/learn/pandas",
                        description: "Interactive tutorial for learning Pandas.",
                        tag: "Interactive",
                    },
                    {
                        title: "Neural Networks from Scratch",
                        url: "https://nnfs.io/",
                        description:
                            "Build neural networks from scratch to understand deep learning.",
                        tag: "Book",
                    },
                    {
                        title: "Google Colab",
                        url: "https://colab.research.google.com/",
                        description:
                            "Run code in the cloud with GPU support, perfect for ML experiments.",
                        tag: "Tool",
                    },
                ],
            },
            {
                heading: "Video Tutorials",
                resources: [
                    {
                        title: "Corey Schafer",
                        url: "https://www.youtube.com/channel/UCCezIgC97PvUuR4_gbFUs5g",
                        description:
                            "High-quality tutorials on Python, Django, Flask, and more.",
                        tag: "YouTube",
                    },
                    {
                        title: "Sentdex",
                        url: "https://www.youtube.com/user/sentdex",
                        description:
                            "Enormous amount of Python content for all skill levels.",
                        tag: "YouTube",
                    },
                    {
                        title: "mCoding",
                        url: "https://www.youtube.com/@mCoding",
                        description:
                            "Advanced Python concepts and deep dives into Python internals.",
                        tag: "YouTube",
                    },
                ],
            },
        ],
    },
    {
        id: "rust",
        label: "Rust",
        icon: <Terminal className="w-5 h-5" />,
        color: "from-orange-400 to-red-600",
        description:
            "Memory safety without garbage collection — blazingly fast, reliable, and productive.",
        sections: [
            {
                heading: "Getting Started",
                resources: [
                    {
                        title: "The Rust Programming Language (The Book)",
                        url: "https://doc.rust-lang.org/book/",
                        description:
                            "The official Rust book. The definitive starting point for learning Rust.",
                        tag: "Free Book",
                    },
                    {
                        title: "Rust By Example",
                        url: "https://doc.rust-lang.org/rust-by-example/",
                        description:
                            "Learn Rust through annotated example programs you can run in the browser.",
                        tag: "Interactive",
                    },
                    {
                        title: "Rustlings",
                        url: "https://github.com/rust-lang/rustlings",
                        description:
                            "Small exercises to get you used to reading and writing Rust code.",
                        tag: "Exercises",
                    },
                    {
                        title: "A Half Hour to Learn Rust",
                        url: "https://fasterthanli.me/articles/a-half-hour-to-learn-rust",
                        description:
                            "A lightning-fast introduction to Rust syntax and concepts.",
                        tag: "Article",
                    },
                ],
            },
            {
                heading: "Intermediate & Advanced",
                resources: [
                    {
                        title: "Programming Rust (O'Reilly)",
                        url: "https://www.oreilly.com/library/view/programming-rust-2nd/9781492052586/",
                        description:
                            "Comprehensive guide covering Rust's speed, concurrency, and safety.",
                        tag: "Book",
                    },
                    {
                        title: "Rust for Rustaceans",
                        url: "https://nostarch.com/rust-rustaceans",
                        description:
                            "Intermediate-level guide for developers who know the basics.",
                        tag: "Book",
                    },
                    {
                        title: "The Rustonomicon",
                        url: "https://doc.rust-lang.org/nomicon/",
                        description:
                            "The dark arts of unsafe Rust — advanced memory and concurrency patterns.",
                        tag: "Free Book",
                    },
                    {
                        title: "Rust Design Patterns",
                        url: "https://rust-unofficial.github.io/patterns/",
                        description:
                            "A catalogue of Rust design patterns, anti-patterns and idioms.",
                        tag: "Free Book",
                    },
                ],
            },
            {
                heading: "Async & Systems",
                resources: [
                    {
                        title: "Asynchronous Programming in Rust",
                        url: "https://rust-lang.github.io/async-book/",
                        description:
                            "Official guide to async/await in Rust with Tokio and Futures.",
                        tag: "Free Book",
                    },
                    {
                        title: "Zero To Production In Rust",
                        url: "https://www.zero2prod.com/",
                        description:
                            "Build a real-world email newsletter API, learning backend dev in Rust.",
                        tag: "Book",
                    },
                    {
                        title: "Comprehensive Rust (Google)",
                        url: "https://google.github.io/comprehensive-rust/",
                        description:
                            "Google's multi-day Rust course covering bare metal to async.",
                        tag: "Course",
                    },
                ],
            },
            {
                heading: "Video Tutorials",
                resources: [
                    {
                        title: "Jon Gjengset",
                        url: "https://www.youtube.com/@jonhoo",
                        description:
                            "Deep Rust streams — Crust of Rust series is a must-watch.",
                        tag: "YouTube",
                    },
                    {
                        title: "No Boilerplate",
                        url: "https://www.youtube.com/@NoBoilerplate",
                        description:
                            "Fast, technical videos about Rust and why it matters.",
                        tag: "YouTube",
                    },
                    {
                        title: "Let's Get Rusty",
                        url: "https://www.youtube.com/@letsgetrusty",
                        description:
                            "Follows The Rust Book chapter by chapter in video form.",
                        tag: "YouTube",
                    },
                ],
            },
        ],
    },
    {
        id: "javascript",
        label: "JavaScript / TypeScript",
        icon: <Code className="w-5 h-5" />,
        color: "from-blue-400 to-yellow-400",
        description:
            "The language of the web — from interactive UIs to full-stack servers and beyond.",
        sections: [
            {
                heading: "JavaScript Fundamentals",
                resources: [
                    {
                        title: "MDN Web Docs",
                        url: "https://developer.mozilla.org/",
                        description:
                            "The definitive resource for Web Development — HTML, CSS, JS reference.",
                        tag: "Docs",
                    },
                    {
                        title: "The Odin Project",
                        url: "https://www.theodinproject.com/",
                        description:
                            "A full-stack web development curriculum. Completely free and open source.",
                        tag: "Course",
                    },
                    {
                        title: "JavaScript.info",
                        url: "https://javascript.info/",
                        description:
                            "Modern JavaScript tutorial — from basics to advanced. Extremely thorough.",
                        tag: "Free Book",
                    },
                    {
                        title: "Eloquent JavaScript",
                        url: "https://eloquentjavascript.net/",
                        description:
                            "A modern introduction to programming through JavaScript.",
                        tag: "Free Book",
                    },
                ],
            },
            {
                heading: "TypeScript",
                resources: [
                    {
                        title: "TypeScript Handbook",
                        url: "https://www.typescriptlang.org/docs/handbook/",
                        description:
                            "The official TypeScript handbook. The best starting point.",
                        tag: "Docs",
                    },
                    {
                        title: "Total TypeScript",
                        url: "https://www.totaltypescript.com/",
                        description:
                            "Matt Pocock's comprehensive TypeScript courses from beginner to wizard.",
                        tag: "Course",
                    },
                    {
                        title: "Type Challenges",
                        url: "https://github.com/type-challenges/type-challenges",
                        description:
                            "Practice advanced TypeScript type gymnastics with community challenges.",
                        tag: "Exercises",
                    },
                    {
                        title: "Effective TypeScript",
                        url: "https://effectivetypescript.com/",
                        description:
                            "62 specific ways to improve your TypeScript. Intermediate level.",
                        tag: "Book",
                    },
                ],
            },
            {
                heading: "Frameworks & Ecosystem",
                resources: [
                    {
                        title: "React Docs (react.dev)",
                        url: "https://react.dev/",
                        description:
                            "Official React documentation with interactive examples and guides.",
                        tag: "Docs",
                    },
                    {
                        title: "Next.js Learn",
                        url: "https://nextjs.org/learn",
                        description:
                            "Official Next.js interactive tutorial. Build a full-stack app step by step.",
                        tag: "Course",
                    },
                    {
                        title: "Node.js Best Practices",
                        url: "https://github.com/goldbergyoni/nodebestpractices",
                        description:
                            "Comprehensive guide to Node.js production-grade best practices.",
                        tag: "Guide",
                    },
                    {
                        title: "Deno Manual",
                        url: "https://deno.land/manual",
                        description:
                            "The modern JavaScript/TypeScript runtime. Secure by default.",
                        tag: "Docs",
                    },
                ],
            },
            {
                heading: "Video Tutorials",
                resources: [
                    {
                        title: "Fireship",
                        url: "https://www.youtube.com/@Fireship",
                        description:
                            "Fast-paced tech explainers and 100-second concept breakdowns.",
                        tag: "YouTube",
                    },
                    {
                        title: "Theo (t3.gg)",
                        url: "https://www.youtube.com/@t3dotgg",
                        description:
                            "TypeScript, Next.js, tRPC — modern full-stack web development.",
                        tag: "YouTube",
                    },
                    {
                        title: "Jack Herrington",
                        url: "https://www.youtube.com/@jherr",
                        description:
                            "Deep dives into React, TypeScript, and frontend architecture.",
                        tag: "YouTube",
                    },
                ],
            },
        ],
    },
    {
        id: "tools",
        label: "Tools & General",
        icon: <Wrench className="w-5 h-5" />,
        color: "from-violet-400 to-fuchsia-500",
        description:
            "Editors, version control, regex, and cross-language resources every developer needs.",
        sections: [
            {
                heading: "Editors & IDEs",
                resources: [
                    {
                        title: "VS Code",
                        url: "https://code.visualstudio.com/",
                        description:
                            "Fully-featured, extendable editor. The most popular choice among devs.",
                        tag: "Tool",
                    },
                    {
                        title: "Neovim",
                        url: "https://neovim.io/",
                        description:
                            "Hyperextensible Vim-based editor for those who love the terminal.",
                        tag: "Tool",
                    },
                    {
                        title: "JetBrains IDEs",
                        url: "https://www.jetbrains.com/",
                        description:
                            "IntelliJ, PyCharm, WebStorm, RustRover — premium IDEs for every language.",
                        tag: "Tool",
                    },
                    {
                        title: "Zed",
                        url: "https://zed.dev/",
                        description:
                            "A high-performance, multiplayer code editor from the creators of Atom.",
                        tag: "Tool",
                    },
                ],
            },
            {
                heading: "Version Control & Git",
                resources: [
                    {
                        title: "Git Guide",
                        url: "https://rogerdudler.github.io/git-guide/",
                        description:
                            "A simple, no-nonsense guide to getting started with Git.",
                        tag: "Guide",
                    },
                    {
                        title: "Oh My Git!",
                        url: "https://ohmygit.org/",
                        description:
                            "An open-source card game to learn Git interactively.",
                        tag: "Interactive",
                    },
                    {
                        title: "Conventional Commits",
                        url: "https://www.conventionalcommits.org/",
                        description:
                            "A specification for adding human and machine readable meaning to commits.",
                        tag: "Guide",
                    },
                ],
            },
            {
                heading: "Interactive Practice",
                resources: [
                    {
                        title: "Exercism",
                        url: "https://exercism.org/",
                        description:
                            "Level up skills with mentored code exercises in 70+ languages.",
                        tag: "Exercises",
                    },
                    {
                        title: "LeetCode",
                        url: "https://leetcode.com/",
                        description:
                            "The go-to platform for coding interview preparation and DSA practice.",
                        tag: "Exercises",
                    },
                    {
                        title: "Regex101",
                        url: "https://regex101.com/",
                        description:
                            "An online tool for testing and debugging regular expressions.",
                        tag: "Tool",
                    },
                    {
                        title: "Project Euler",
                        url: "https://projecteuler.net/",
                        description:
                            "Mathematical/computer programming problems to sharpen your skills.",
                        tag: "Exercises",
                    },
                ],
            },
        ],
    },
];

const tagColors: Record<string, string> = {
    "Free Book": "bg-green-500/20 text-green-400",
    Book: "bg-blue-500/20 text-blue-400",
    Course: "bg-purple-500/20 text-purple-400",
    Tutorials: "bg-cyan-500/20 text-cyan-400",
    Docs: "bg-sky-500/20 text-sky-400",
    Interactive: "bg-amber-500/20 text-amber-400",
    Exercises: "bg-orange-500/20 text-orange-400",
    Article: "bg-pink-500/20 text-pink-400",
    YouTube: "bg-red-500/20 text-red-400",
    Tool: "bg-indigo-500/20 text-indigo-400",
    Guide: "bg-teal-500/20 text-teal-400",
};

export default function ResourcesPage() {
    const [activeCategory, setActiveCategory] = useState("python");

    const active = categories.find((c) => c.id === activeCategory)!;

    return (
        <div className="min-h-screen bg-black">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <div className="mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                        Learning Resources
                    </h1>
                    <p className="text-white/50 text-base md:text-lg max-w-2xl">
                        Curated by the CodeVerse Hub community — pick a language or tool and
                        dive in.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <nav className="lg:w-64 shrink-0">
                        <div className="lg:sticky lg:top-24 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left whitespace-nowrap transition-all duration-200 ${activeCategory === cat.id
                                        ? "bg-white/10 text-white border border-white/20 shadow-lg shadow-violet-500/10"
                                        : "text-white/50 hover:text-white hover:bg-white/5 border border-transparent"
                                        }`}
                                >
                                    <span
                                        className={`p-1.5 rounded-lg bg-gradient-to-br ${cat.color} text-white`}
                                    >
                                        {cat.icon}
                                    </span>
                                    <span className="font-medium text-sm">{cat.label}</span>
                                </button>
                            ))}
                        </div>
                    </nav>

                    <main className="flex-1 min-w-0">
                        <div className="mb-8 p-6 rounded-2xl border border-white/10 bg-white/5">
                            <div className="flex items-center gap-3 mb-2">
                                <span
                                    className={`p-2 rounded-lg bg-gradient-to-br ${active.color} text-white`}
                                >
                                    {active.icon}
                                </span>
                                <h2 className="text-2xl font-bold text-white">
                                    {active.label}
                                </h2>
                            </div>
                            <p className="text-white/50 text-sm">{active.description}</p>
                        </div>

                        <div className="space-y-10">
                            {active.sections.map((section) => (
                                <div key={section.heading}>
                                    <h3 className="text-lg font-semibold text-white/80 mb-4 flex items-center gap-2">
                                        <div className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
                                        {section.heading}
                                    </h3>
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        {section.resources.map((resource) => (
                                            <a
                                                key={resource.title}
                                                href={resource.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-violet-500/30 transition-all duration-200"
                                            >
                                                <div className="flex items-start justify-between gap-2 mb-2">
                                                    <h4 className="font-semibold text-white text-sm group-hover:text-violet-300 transition-colors">
                                                        {resource.title}
                                                    </h4>
                                                    <ExternalLink className="w-3.5 h-3.5 text-white/30 group-hover:text-violet-400 shrink-0 mt-0.5 transition-colors" />
                                                </div>
                                                <p className="text-white/40 text-xs leading-relaxed mb-3">
                                                    {resource.description}
                                                </p>
                                                {resource.tag && (
                                                    <span
                                                        className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${tagColors[resource.tag] ||
                                                            "bg-white/10 text-white/60"
                                                            }`}
                                                    >
                                                        {resource.tag}
                                                    </span>
                                                )}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-center">
                    <p className="text-white/30 text-sm">
                        This list is curated by the CodeVerse Hub community. Want to suggest
                        a resource?{" "}
                        <Link
                            href="https://discord.gg/3xKFvKhuGR"
                            target="_blank"
                            className="text-violet-400 hover:text-violet-300"
                        >
                            Join our Discord
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
