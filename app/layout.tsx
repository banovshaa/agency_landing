import "@/assets/css/global.css";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agency Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={interTight.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
