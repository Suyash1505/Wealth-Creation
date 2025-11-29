import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "Wealth",
  description: "AI powered finance paltform",
};

export default function RootLayout({ children }) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >

          {/* ----------- HEADER ------------- */}
          <Header/>

          {/* ----------- MAIN ------------- */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* ----------- FOOTER ------------- */}
          <footer className="bg-red-500">
            add your footer
          </footer>

        </body>
      </html>
    </ClerkProvider>
    
  );
}
