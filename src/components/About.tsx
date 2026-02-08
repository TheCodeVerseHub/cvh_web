"use client";

import GradientText from "./GradientText";

export default function About() {
  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center py-20 px-4">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6">
        What do we Do here?
      </h2>
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <div className="text-2xl md:text-4xl lg:text-5xl font-medium leading-relaxed text-white/30 hover:text-white transition-colors duration-500">
          We're not just another Discord server.
        </div>
        <div className="text-2xl md:text-4xl lg:text-5xl font-medium leading-relaxed text-white/30 hover:text-white transition-colors duration-500">
          We're a{" "}
          <GradientText
            colors={["#00ecd9ff", "#d13606ff", "#f7cc0dff"]}
            className="inline"
          >
            community
          </GradientText>{" "}
          of developers,
        </div>
        <div className="text-2xl md:text-4xl lg:text-5xl font-medium leading-relaxed text-white/30 hover:text-white transition-colors duration-500">
          creators, and{" "}
          <GradientText
            colors={["#00ecd9ff", "#d13606ff", "#f7cc0dff"]}
            className="inline"
          >
            innovators
          </GradientText>
          .
        </div>
        <div className=" text-2xl md:text-4xl lg:text-5xl font-medium leading-relaxed text-white/30 hover:text-white transition-colors duration-500">
          Building the future,{" "}
          <GradientText
            colors={["#00ecd9ff", "#d13606ff", "#f7cc0dff"]}
            className="inline"
          >
            together
          </GradientText>
          .
        </div>
        <div className="text-2xl md:text-4xl lg:text-5xl font-medium leading-relaxed text-white/30 hover:text-white transition-colors duration-500">
          We have people, who work with{" "}
          <GradientText
            colors={["#00ecd9ff", "#d13606ff", "#f7cc0dff"]}
            className="inline"
          >
            any
          </GradientText>{" "}
          stack.
        </div>
        <div className="text-2xl md:text-4xl lg:text-5xl font-medium leading-relaxed text-white/30 hover:text-white transition-colors duration-500">
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
      <br></br>
      <h2 className="text-white/40 text-lg md:text-xl tracking-widest mb-16">
        usually, we aren't professional, but we are happy!
      </h2>
    </section>
  );
}
