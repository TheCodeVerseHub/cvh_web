"use client";

export default function JoinCTA() {
    return (
        <section className="min-h-[70vh] bg-black flex flex-col items-center justify-center py-20 px-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6">
                Ready to join?
            </h2>
            <p className="text-white/50 text-lg md:text-xl text-center max-w-2xl mb-12">
                Become part of a thriving community of developers and creators.
            </p>
            <a
                href="https://discord.gg/your-invite-link"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-white text-black font-bold text-lg px-12 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]"
            >
                <span className="relative z-10">Join Discord</span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    Join Discord
                </span>
            </a>
        </section>
    );
}
