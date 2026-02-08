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
    <section className="h-screen bg-black bg-black flex flex-col items-center justify-center py-20 px-4">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6">
        Our Projects on GitHub
      </h2>
      <br></br>
      <FlowingMenu
        items={menuItems}
        textColor="#ffffff"
        bgColor="#000000"
        marqueeBgColor="#ffffff"
        marqueeTextColor="#000000"
        borderColor="rgba(255,255,255,0.1)"
      />
      <br></br>
      <h2 className="text-white/40 text-lg md:text-xl tracking-widest mb-16">
        and WAY more!
      </h2>
    </section>
  );
}
