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
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>




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

            <form action="mailto: mavjo147@gmail.com" 
                  method="post" 
                  encType="text/plain"
                  name='EmailForm'
                  className="contactForm">
              <label htmlFor="name">
                <span>Name</span>
                <input type="text" id="name" name='name' />
              </label>

              <label htmlFor='email'>
                <span>Email</span>
                <input type="email" id="email" name='email' />
              </label>

              <label htmlFor='message'>
                <span>Message</span>
                <textarea id="message" name='message' />
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