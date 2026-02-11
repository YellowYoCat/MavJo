import React from 'react'
import '../contact/contact.css'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <main className="page">
      <div className="contact-header">
        <h1>CONTACT</h1>
        <img
          src="/imgs/decorative.jpg"
          className="decorative"
          alt="Decorative divider"
          width={600}
          height={50}
        />
      </div>

      <div className="nav-links">
        <p className="sub">Home</p>
        <p>Contact</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />




      <div className='contact-form'>
        <div className="hudContainer">


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


          <div className="contactWrapper">
            <h2>Contact Us</h2>

            <form
              action="https://formspree.io/f/xnjbjjvb"
              method="POST"
              className="contactForm"
            >
              <label>
                <span>Name</span>
                <input type="text" name="name" required />
              </label>

              <label>
                <span>Email</span>
                <input type="email" name="email" required />
              </label>

              <label>
                <span>Message</span>
                <textarea name="message" required />
              </label>

              <button type="submit" className="hud-submit">
                  <span className="hud-submit-text">SEND MESSAGE</span>
                </button>
            </form>

          </div>

        </div>

        <section className="socialsSection">
          <h2 className="title">SOCIALS</h2>

          <div className="icons">
            <Link href="#"><span className="circle"></span></Link>
            <Link href="#"><span className="circle"></span></Link>
            <Link href="#"><span className="circle"></span></Link>
            <Link href="#"><span className="circle"></span></Link>
            <Link href="#"><span className="circle"></span></Link>
            <Link href="#"><span className="circle"></span></Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default page