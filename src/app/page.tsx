"use client";

import Link from "next/link";
import TextPressure from "@/components/TextPressure";
import Navbar from "@/components/Navbar";
import GradientBlinds from "@/components/GradientBlinds";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";
import { Users, Cpu, BookOpen, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />

      <section className="relative min-h-screen w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <GradientBlinds
            gradientColors={["#0a0a0a", "#1a1a2e", "#16213e", "#0f3460", "#533483"]}
            angle={45}
            blindCount={12}
            noise={0.15}
            spotlightRadius={0.6}
            spotlightSoftness={1.2}
            spotlightOpacity={0.8}
            mixBlendMode="normal"
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left — TextPressure Title */}
            <div className="flex flex-col">
              <div className="h-32 sm:h-40 md:h-48 lg:h-64">
                <TextPressure
                  text="The Codeverse Hub"
                  textColor="#FFFFFF"
                  weight={true}
                  width={true}
                  italic={true}
                  flex={true}
                  minFontSize={24}
                />
              </div>
            </div>

            {/* Right — Hero Content */}
            <div className="flex flex-col items-start gap-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                A community crafted for{" "}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  developer success
                </span>{" "}
                and growth
              </h2>

              <p className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                Join the CodeVerse Hub to collaborate, learn appropriate software practices, and build the future together.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
                <Link
                  href="https://discord.gg/3xKFvKhuGR"
                  target="_blank"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300"
                >
                  Get started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/resources"
                  className="group flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  Read the docs
                  <ArrowRight className="w-4 h-4 opacity-50 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-6 mt-4 text-white/50">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-violet-400" />
                  <span className="text-sm font-medium">Community Driven</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-violet-400" />
                  <span className="text-sm font-medium">Open Source Focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-violet-400" />
                  <span className="text-sm font-medium">Rich Resources</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Stats />
      <Projects />
      <ContactSection />
      <JoinCTA />
      <Footer />
    </div>
  );
}
