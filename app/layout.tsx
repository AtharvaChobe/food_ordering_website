import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ChildrenWrapper from "@/components/ChildrenWrapper";
import Footer from "@/components/Footer";


const inter = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "South's",
  description: "Authentic South Indian taste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <EdgeStoreProvider>
            <Toaster
              position="top-right"
              reverseOrder={false}
            />

            <ChildrenWrapper>
              <Navbar />
              {children}
              <Footer />
            </ChildrenWrapper>



          </EdgeStoreProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
