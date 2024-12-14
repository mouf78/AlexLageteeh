import Link from "next/link";
import Info from "../app/Info/page";
import "../app/styles/navbar.css";
import "../app/styles/globals.css";

import Image from "next/image";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { useUser } from "@auth0/nextjs-auth0";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <nav className="navbar">
            <Image src={`/avatars/logo.png`} width={100} height={100} />
            <Link href="/">Home</Link>
            <Link href="/Info">Info</Link>
            <Link href="/Sch">Sch</Link>
            <Link href="/Tasks">Tasks</Link>
            <Link href="/RPM">RPM</Link>
            <Link href="/TNPS">TNPS</Link>
            <Link href="/KPIs">KPIs</Link>
            <Link href="/Attendance">ATT</Link>

            <Link href="/api/auth/login">Login</Link>
            <Link href="/api/auth/logout">Logout</Link>
            <Link href="/profile">User Profile </Link>
          </nav>

          {children}

          <footer className="footer">
            <div className="footer-container">
              <div className="footer-section">
                <h4>Quick Links 1</h4>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/Info">Info</Link>
                  </li>
                  <li>
                    <Link href="/RPM">RPM</Link>
                  </li>
                  <li>
                    <Link href="/KPIs">KPIs</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Quick Links 2</h4>
                <ul>
                  <li>
                    <Link href="/Sch">Sch</Link>
                  </li>
                  <li>
                    <Link href="/Tasks">Tasks</Link>
                  </li>
                  <li>
                    <Link href="/TNPS">TNPS</Link>
                  </li>
                  <li>
                    <Link href="/Attendance">ATT</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Location</h4>
                <div className="social-icons">
                  <p>Alexandria, Lageteeh st.</p>
                </div>
              </div>
              <div className="footer-section">
                <h4>Contact Us</h4>
                <p>
                  Email:
                  <br /> AlexLageteehStExpressStore
                  <br />
                  @vodafone.com.eg
                </p>
                {/* <p>Phone: +123-456-7890</p> */}
              </div>
            </div>
            <div className="footer-bottom">
              <p>
                &copy; 2024 Alex Lageteeh Exp. Store. All Rights Reserved.{" "}
                <br />"<span>Best Seen ... Ever Green</span>"
                <br /> Mohamed Ouf
              </p>
            </div>
          </footer>
        </body>
      </UserProvider>
    </html>
  );
}
