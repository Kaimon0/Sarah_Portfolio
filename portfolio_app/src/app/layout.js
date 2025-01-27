import "./globals.css";
import Navbar from "./Components/Navbar";
export const metadata = {
  title: "Sarah's Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap');
        </style>
        {/* <script src="https://kit.fontawesome.com/5c9555d31b.js" crossOrigin="anonymous"></script> */}
      </head>
      <body className="bg-bgColor" >
        <main className=" px-4 w-screen h-screen grid grid-cols-10 grid-rows-8 gap-x-4">
        <Navbar />
        {children}
        </main>
        
      </body>
    </html>
  );
}
