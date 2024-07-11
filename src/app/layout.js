import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Noto_Sans_TC } from "@next/font/google";
const NotoSansTC= Noto_Sans_TC({ subsets: ['latin'] ,weight: '400',});

import { GoogleAnalytics } from '@next/third-parties/google';


export const metadata = {
  title: {
    default:"Yummy的履歷 | Portfolio",
    template:"%s | Portfolio"
  },
  description: "Yummy的履歷",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={NotoSansTC.className}>       
          <div className="full-container">
            <Navbar />
            {children}
            <Footer />
          </div>        
      </body>
      <GoogleAnalytics gaId="G-NHZ4HTYHES" />
    </html>
  );
}
