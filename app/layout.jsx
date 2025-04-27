import { Major_Mono_Display, Mona_Sans } from "next/font/google";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/globals.scss";

const headingFont = Major_Mono_Display({
  weight: "400",
  variable: "--heading-font",
  subsets: ["latin"],
});

const bodyFont = Mona_Sans({
  weight: "400",
  variable: "--body-font",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "The Vector Report",
  description: "Daily AI-Driven Analysis of Unusual Options Activity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        <main>
          <Header />

          {children}

          <Footer />
        </main>
      </body>
    </html>
  );
}
