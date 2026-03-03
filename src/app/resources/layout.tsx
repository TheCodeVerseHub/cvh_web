import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Developer Resources | The Codeverse Hub",
  description:
    "Hand-picked programming resources for Python, Rust, JavaScript, TypeScript, C++, Java, Go and more from The Codeverse Hub community.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Developer Resources | The Codeverse Hub",
    description:
      "Hand-picked programming resources for Python, Rust, JavaScript, TypeScript, C++, Java, Go and more from The Codeverse Hub community.",
    url: "/resources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Resources | The Codeverse Hub",
    description:
      "Curated coding resources for all levels, from The Codeverse Hub.",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
