"use client";

import GradientText from "./GradientText";

export default function About() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center py-16 md:py-20 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-4 md:mb-6">
        What do we Do here?
      </h2>
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 text-center">
        <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/30 hover:text-white transition-colors duration-500">
          We're not just another Discord server.
        </div>
        <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/30 hover:text-white transition-colors duration-500">
          We're a{" "}
          <GradientText
            colors={["#00ecd9ff", "#d13606ff", "#f7cc0dff"]}
            className="inline"
          >
            community
          </GradientText>{" "}
          of developers,
        </div>
        <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/30 hover:text-white transition-colors duration-500">
          creators, and{" "}
          <GradientText
            colors={["#00ecd9ff", "#d13606ff", "#f7cc0dff"]}
            className="inline"
          >
            innovators
          </GradientText>
          .
        </div>
        <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/30 hover:text-white transition-colors duration-500">
          Building the future,{" "}
          <GradientText
            colors={["#00ecd9ff", "#d13606ff", "#f7cc0dff"]}
            className="inline"
          >
            together
          </GradientText>
          .
        </div>
        <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/30 hover:text-white transition-colors duration-500">
          We have people, who work with{" "}
          <GradientText
            colors={["#00ecd9ff", "#d13606ff", "#f7cc0dff"]}
            className="inline"
          >
            any
          </GradientText>{" "}
          stack.
        </div>
        <div className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/30 hover:text-white transition-colors duration-500">
          The same people, who are from{" "}
          <GradientText
            colors={["#00ecd9ff", "#d13606ff", "#f7cc0dff"]}
            className="inline"
          >
            all around the world
          </GradientText>
          .
        </div>
      </div>
      <div className="mt-8 md:mt-12" />
      <h2 className="text-white/40 text-sm md:text-lg lg:text-xl tracking-widest mb-16 text-center px-4">
        usually, we aren't professional, but we are happy!
      </h2>
    </section>
  );
}
