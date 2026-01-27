import React from 'react'
import './contact.css'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <main className="page">
      <div className="hudContainer">

        {/* Decorative HUD Images */}
        <Image
          src="/imgs/topcorner.png"
          alt=""
          width={500}
          height={60}
          className="hudTop"
          priority
        />

        <Image
          src="/imgs/line.png"
          alt=""
          width={500}
          height={60}
          className="hudBottom"
        />

        <Image
          src="/imgs/rightline.png"
          alt=""
          width={60}
          height={400}
          className="hudLeft"
        />

        <Image
          src="/imgs/leftline.png"
          alt=""
          width={60}
          height={400}
          className="hudRight"
        />

        {/* Actual Form */}
        <div className="contactWrapper">
          <h2>Contact Us</h2>

          <form className="contactForm">
            <label>
              <span>Name</span>
              <input type="text" />
            </label>

            <label>
              <span>Email</span>
              <input type="email" />
            </label>

            <label>
              <span>Message</span>
              <textarea />
            </label>

            <Link href="" className="consultation-link">
              <div className="consultation-banner">
                <Image
                  src="/imgs/btn.png"
                  alt="Book a Consultation"
                  width={200}
                  height={200}
                  className="banner-image"
                />
                <div className="banner-overlay">
                  <span className="banner-text">Message</span>
                </div>
              </div>
            </Link>
          </form>
        </div>

      </div>
    </main>
  )
}

export default page