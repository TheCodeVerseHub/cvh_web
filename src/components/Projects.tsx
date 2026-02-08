"use client";

import FlowingMenu from "./FlowingMenu";

const menuItems = [
  {
    link: "#",
    text: "cvhOS",
    image: "https://placehold.co/400x200/8B5CF6/white?text=cvhOS",
  },
  {
    link: "#",
    text: "Eigen",
    image: "https://placehold.co/400x200/EC4899/white?text=Eigen",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen md:h-screen bg-black flex flex-col items-center justify-center py-16 md:py-20 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-4 md:mb-6">
        Our Projects on GitHub
      </h2>
      <div className="w-full h-[40vh] md:h-[50vh] max-w-4xl">
        <FlowingMenu
          items={menuItems}
          textColor="#ffffff"
          bgColor="#000000"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#000000"
          borderColor="rgba(255,255,255,0.1)"
        />
      </div>
      <div className="mt-6 md:mt-8" />
      <h2 className="text-white/40 text-sm md:text-lg lg:text-xl tracking-widest text-center">
        and WAY more!
      </h2>
    </section>
  );
}
