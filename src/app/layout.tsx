import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AIChatbot from "@/components/AIChatbot";
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Peak Nepal | Innovative Digital Solutions",
  description: "Management Softwares, AI Products & Professional Digital Solutions",
};

export const viewport: Viewport = {
  colorScheme: "only light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>
          <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          {children}
          <AIChatbot />
      </body>
    </html>
  );
}
