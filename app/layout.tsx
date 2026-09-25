import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Story Studio — Instagram Stories",
  description: "Ստեղծիր Instagram Story-ներ քո պրոդուկտի լուսանկարներից։",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hy">
      <body className="antialiased">{children}</body>
    </html>
  );
}
