"use client";

const socialLinks = [
  { name: "Discord", href: "https://discord.gg/codeversehub", icon: "Discord" },
  {
    name: "GitHub",
    href: "https://github.com/TheCodeVerseHub",
    icon: "GitHub",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/codeversehub",
    icon: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm">
              CVH
            </div>
            <span className="text-white font-semibold text-xl">
              The Codeverse Hub
            </span>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-bold"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © 2026-{new Date().getFullYear()} The Codeverse Hub. All rights
            reserved.
          </p>
          <p className="text-white/30 text-xs mt-2">
            Built with love, by the CVH community!
          </p>
        </div>
      </div>
    </footer>
  );
}
