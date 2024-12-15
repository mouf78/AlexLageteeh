import "../app/styles/navbar.css";
import "../app/styles/globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
            <Navbar/>
            {children}
            <Footer/>
        </UserProvider>
      </body>
    </html>
  );
}
