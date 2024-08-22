import Head from 'next/head';

import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header/Header";
import PageTransitions from "@/components/PageTransitions/PageTransitions";
import StairTransitions from "@/components/StairTransitions";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
  variable: '--font-jetbrainsMono',
});

export const metadata = {
  title: "Julian Builds",
  description: "Julian Mazaira's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Julian Mazaira's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Julian Mazaira's portfolio showcasing web development projects and expertise." />
        <meta name="keywords" content="web development, portfolio, Julian Mazaira, React, React Native, NextJS, Angular, TailwindCSS, Node.js" />
        <meta name="author" content="Julian Mazaira" />
        <meta property="og:title" content="Julian Mazaira's Frontend Engineer and Fullstack Developer Portfolio" />
        <meta property="og:description" content="Showcasing web development projects and expertise by Julian Mazaira." />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://julianbuilds.com" />
      </Head>
      <body className={jetbrainsMono.className}>
        <Header />
        <StairTransitions />
        <PageTransitions>
          {children}
        </PageTransitions>
      </body>
    </html>
  );
}
