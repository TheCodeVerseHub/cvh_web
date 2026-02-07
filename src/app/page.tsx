"use client";

import TextPressure from "@/components/TextPressure";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-black">
      <div className="w-full max-w-5xl h-48 px-4">
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
    </div>
  );
}
