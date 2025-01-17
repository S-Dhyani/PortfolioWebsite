
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";
import {Providers} from "./providers";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
    title: "SD",
    description: "SD - Portfolio",
};

export default function RootLayout( {children} ) {
    return (
        <html lang="en" className="light">
            <body className="px-0 md:px-10 py-3">
                <Providers>
                  <Navbar/>
                  {children}
                  <Analytics/>
                  </Providers>
                  <Footer/>
            </body>
        </html>
    );
}
