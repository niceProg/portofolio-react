import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
     title: "Yumna Dev | Portofolio",
     description: "Excepteur et anim id consectetur sit non commodo Lorem anim consectetur incididunt cillum et culpa.",
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en">
               <body className="antialiased font-primary">{children}</body>
          </html>
     );
}
