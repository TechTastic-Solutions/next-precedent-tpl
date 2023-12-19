import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title:
    "TechTastic Solutions Precedent Template - Custom project generator for Next.js and Contentful projects.",
  description:
    "This template is the all-in-one solution for your Next.js and Contentful project. It includes a design system, authentication, analytics, speed Insights, and more. Of course Prettier & ESLint to keep your code looking and TailwindCSS for style. Included Vercel CI/CD pipelines, Analytics and Speed Insights",
  metadataBase: new URL("https://writchie.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-cyan-100" />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
