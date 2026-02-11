"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './consultation.css'

const page = () => {
  return (
    <section className='consultation'>
      <div className='caonsultation-header'>
        <h1>SCHEDULE</h1>
        <img src="/imgs/decorative.jpg" className='decorative' alt="About Banner" width={600} height={50} />
      </div>

      {/* <div className="nav-links">
        <p className="sub">Home</p>
        <p>Schedule</p>
      </div> */}
      <h2 className='body-text'>
        Schedule Your Free 30-Minute Consultation Today!
        <br></br>
        <br></br>
      </h2>
      <div className='consultation-body'>
        <div className='contact-form'>
          <div className="hudContainer">

            <div className="consultationWrapper">
              <h2>Start the Conversation!</h2>

              {/* <iframe className='google' src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0zBgXv_F1YCRfKCHdwva8eRne4T3t0nXFAGGaAkjTBaZpLpeyA8fbKeUIY42hqp-8n_1BpL1Fh?gv=true" width="100%" height="600"></iframe> */}

              <div className="dark-iframe-wrapper">
                <iframe
                  className='google'
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0zBgXv_F1YCRfKCHdwva8eRne4T3t0nXFAGGaAkjTBaZpLpeyA8fbKeUIY42hqp-8n_1BpL1Fh?gv=true"
                  width="100%"
                  height="600"
                ></iframe>
              </div>
              <form className="consultationForm"
                action="https://formspree.io/f/xqedenvl"
                method="POST"
              >
                {/* <div className="nameFields">
                  <label>
                    <span>First Name*</span>
                    <br></br>
                    <input type="text" />
                  </label>

                  <label>
                    <span>Last Name*</span>
                    <br></br>
                    <input type="text" />
                  </label>
                </div> */}

                <div className='contactFields'>
                  <input
                    type="email"
                    name="email"
                    value="placeholder@email.com"
                    readOnly
                    hidden
                  />

                  <label>
                    <span>Phone Number*</span>
                    <br></br>
                    <input type="tel" name='phone' required pattern="^\+?1?\s*(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$" />
                  </label>

                </div>

                <div className='additionalFields'>
                  <select name="interests" required defaultValue="">
                    <option value="" disabled>
                      What Are You Interested In?
                    </option>
                    <option value="documentation">Documentation</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="redesigns">Redesigns</option>
                    <option value="seo-basics">SEO Basics</option>
                    <option value="small-business">Small Business</option>
                    <option value="ui-ux-design">UI / UX Design</option>
                    <option value="web-design">Web Design</option>
                    <option value="web-development">Web Development</option>
                  </select>

                  <label>
                    <span>Tell Us More About It!</span>
                    <br></br>
                    <textarea rows={4} name='message' required />
                  </label>

                </div>

                {/* SUBMIT BUTTON */}
                <button type="submit" className="hud-submit">
                  <span className="hud-submit-text">SEND MESSAGE</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default page