"use client";

import TextPressure from "@/components/TextPressure";
import Navbar from "@/components/Navbar";
import GradientBlinds from "@/components/GradientBlinds";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />

      <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
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
        <div className="relative z-10 w-full max-w-6xl px-4">
          <div className="h-48 md:h-64">
            <TextPressure
              text="The Codeverse Hub"
              textColor="#FFFFFF"
              weight={true}
              width={true}
              italic={true}
              flex={true}
              minFontSize={36}
            />
          </div>
          <p className="text-white/60 text-center text-lg md:text-xl mt-8 max-w-2xl mx-auto">
            Rust, Golang, C, C++, Java, Ruby, Scala, Python, JavaScript, TypeScript, HTML, CSS, PHP, SQL, Bash, Dart, Kotlin, Swift, You name it. We got it.
          </p>
        </div>
      </section>

      <About />
      <Stats />
      <Projects />
      <JoinCTA />
      <Footer />
    </div>
  );
}
