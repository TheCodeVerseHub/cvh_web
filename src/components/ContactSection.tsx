"use client";

import { useState } from "react";
import { Mail, ArrowRight, Github, Send, CheckCircle } from "lucide-react";
import GradientText from "./GradientText";

const contactMethods = [
    {
        icon: Mail,
        label: "Email Us",
        value: "thecodeversedev@gmail.com",
        href: "mailto:thecodeversedev@gmail.com",
    },
    {
        icon: () => (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
        ),
        label: "Join Community",
        value: "The CodeVerse Hub Discord",
        href: "https://discord.gg/3xKFvKhuGR",
    },
    {
        icon: Github,
        label: "Follow Development",
        value: "@TheCodeVerseHub",
        href: "https://github.com/TheCodeVerseHub/",
    },
];

export default function ContactSection() {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch("https://formspree.io/f/mdkvwgln", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });
            setSubmitted(true);
            form.reset();
        } catch {
            console.error("Form submission error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="min-h-screen bg-black flex flex-col items-center justify-center py-16 md:py-20 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-4 md:mb-6">
                Get in{" "}
                <GradientText
                    colors={["#8B5CF6", "#EC4899", "#8B5CF6"]}
                    className="inline"
                >
                    Touch
                </GradientText>
            </h2>
            <p className="text-white/40 text-base md:text-lg lg:text-xl tracking-wide mb-10 md:mb-16 text-center max-w-2xl">
                Have a question or want to collaborate? Our inbox is always open.
            </p>

            <div className="w-full max-w-5xl grid gap-8 lg:grid-cols-2">
                <div className="space-y-4">
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        return (
                            <a
                                key={index}
                                href={method.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-violet-500/50 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                                    <span className="text-violet-400">
                                        <Icon />
                                    </span>
                                </div>
                                <div>
                                    <p className="text-white/50 text-xs uppercase tracking-wider">
                                        {method.label}
                                    </p>
                                    <p className="text-white font-medium">{method.value}</p>
                                </div>
                            </a>
                        );
                    })}
                </div>

                <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                    {submitted ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-8">
                            <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Message Sent!
                            </h3>
                            <p className="text-white/50">
                                We&apos;ll get back to you as soon as possible.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="mt-6 text-violet-400 hover:text-violet-300 transition-colors"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-white/70 text-sm mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your full name"
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-white/70 text-sm mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-white/70 text-sm mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    placeholder="What is this about?"
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-white/70 text-sm mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="How can we help you?"
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none transition-colors resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
