import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TastyBoard • Next.js + TypeScript",
  description: "Receitas com busca e layout responsivo (demo).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
