// app/layout.tsx
import Link from "next/link";
import Image from "next/image";
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/home"><Image src="/imgs/JM_white.png" alt="Logo" width={200} height={150} /></Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/services">Services</Link>
        </nav>
        <br />
        <hr />
        <main className="main-content">
          {children}

          <Link href="/consultation" className="consultation-link">
            <div className="consultation-banner">
              <Image
                src="/imgs/btn.png"
                alt="Book a Consultation"
                width={200}
                height={200}
                className="banner-image"
              />
              <div className="banner-overlay">
                <span className="banner-text">Book a Consultation</span>
              </div>
            </div>
          </Link>
        </main>
        <footer>
          <div className="footer-links">
            <h5><Link href="/about">About</Link></h5>
            <h5><Link href="/contact">Contact</Link></h5>
          </div>

          <div className="footer-content">
            <h2 className="footer-heading">Portfolio</h2>
            <h2 className="footer-heading">Services</h2>
            <h2 className="footer-heading">Copyright © 2026</h2>
          </div>
        </footer>
      </body>
    </html>
  )
}