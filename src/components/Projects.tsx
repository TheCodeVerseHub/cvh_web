"use client";

import FlowingMenu from "./FlowingMenu";

const menuItems = [
  {
    link: "https://github.com/TheCodeVerseHub/CodeVerse-Bot",
    text: "CodeVerse-Bot",
    image: "https://placehold.co/400x200/8B5CF6/white?text=CodeVerse+Bot",
  },
  {
    link: "https://github.com/TheCodeVerseHub/Eigen-Bot",
    text: "Eigen-Bot",
    image: "https://placehold.co/400x200/EC4899/white?text=Eigen+Bot",
  },
  {
    link: "https://github.com/TheCodeVerseHub/ModMail-Bot",
    text: "ModMail-Bot",
    image: "https://placehold.co/400x200/06B6D4/white?text=ModMail+Bot",
  },
  {
    link: "https://github.com/TheCodeVerseHub/CodeVerseLinuxDistro",
    text: "CVH Linux Distro",
    image: "https://placehold.co/400x200/22C55E/white?text=CVH+Linux",
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
