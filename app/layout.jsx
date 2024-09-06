import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
const inter = Inter({ subsets: ["latin"] });
import AuthProvider from "./AuthProvider.js";
export const metadata = {
  title: "Statsify",
  description: "App that measures and displays your spotify statistics",
  openGraph: {
    title: "Statsify",
    description: "App that measures and displays your spotify statistics",
    url: "",
    images: [
      {
        url: "https://spotistats-chi.vercel.app/img2.png",
        width: 1200,
        height: 630,
        alt: "website preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
