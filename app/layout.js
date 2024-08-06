import { Inter } from "next/font/google";
import "./globals.css";
import "./custom.css"
import Nav from "./components/Nav";
import Outline from "./components/Outline";
import { toast, ToastContainer,Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Secret messages",
  description: "Send messages whithout telling who are you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <ToastContainer
          position="top-center"
          transition = {Zoom } />
        <Nav />
        <Outline />
        {children}
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </body>
    </html>
  );
}
