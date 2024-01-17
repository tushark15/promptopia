import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "../styles/globals.css";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Promptopia",
  description:
    "Promptopia is a place to find writing prompts and share your own.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
