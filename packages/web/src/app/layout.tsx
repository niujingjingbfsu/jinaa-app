import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JINAA App",
  description: "AI-native SaaS platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
