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
