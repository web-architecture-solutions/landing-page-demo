import { Ubuntu, Open_Sans } from "next/font/google";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/globals.scss";

const headingFont = Ubuntu({
  weight: "400",
  variable: "--heading-font",
  subsets: ["latin"],
});

const bodyFont = Open_Sans({
  weight: "400",
  variable: "--body-font",
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "The Demo Site",
  description: "A demo landing page site by Web Architecture Solutions",
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
