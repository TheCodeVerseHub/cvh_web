"use client";

import { useEffect, useRef, useState } from "react";

interface StatItemProps {
    value: number;
    suffix: string;
    label: string;
    inView: boolean;
}

function useCountUp(end: number, inView: boolean, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!inView || hasAnimated.current) return;
        hasAnimated.current = true;

        let startTime: number;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [end, inView, duration]);

    return count;
}

function StatItem({ value, suffix, label, inView }: StatItemProps) {
    const count = useCountUp(value, inView);

    return (
        <div className="flex flex-col items-center">
            <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter">
                {count}{suffix}
            </span>
            <span className="text-sm md:text-base text-white/60 uppercase tracking-widest mt-2">
                {label}
            </span>
        </div>
    );
}

export default function Stats() {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen bg-black flex flex-col items-center justify-center py-20 px-4"
        >

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6">
                The Server Stats?
            </h2>
            <h2 className="text-white/40 text-lg md:text-xl uppercase tracking-widest mb-16">
                Check the numbers out!
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 lg:gap-32">
                <StatItem value={1000} suffix="+" label="Members" inView={inView} />
                <StatItem value={12} suffix="+" label="Staff Members" inView={inView} />
                <StatItem value={4} suffix="+" label="Member Made Bots" inView={inView} />
                <StatItem value={5} suffix="+" label="Open Source Projects" inView={inView} />
            </div>
        </section>
    );
}
