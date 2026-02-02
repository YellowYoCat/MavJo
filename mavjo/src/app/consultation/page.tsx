import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <section className='consultation'>
      <div className='caonsultation-header'>
        <h1>SCHEDULE</h1>
        <img src="/imgs/decorative.jpg" className='decorative' alt="About Banner" width={600} height={50} />
      </div>

      <div className="nav-links">
        <p className="sub">Home</p>
        <p>Schedule</p>
      </div>
      <h2 className='body-text'>
        Schedule Your Free 30-Minute Consultation Today!
        <br></br>
        <br></br>
      </h2>
      <div className='consultation-body'>
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


            <div className="consultationWrapper">
              <h2>Start the Conversation!</h2>

              <form className="consultationForm">
                <div>
                  <label>
                    <span>First Name*</span>
                    <input type="text" />
                  </label>

                  <label>
                    <span>Last Name*</span>
                    <input type="text" />
                  </label>
                </div>


                <label>
                  <span>Email*</span>
                  <input type="email" />
                </label>

                <label>
                  <span>Phone Number*</span>
                  <input type="tel" />
                </label>

                <label>
                  <span>What are you interested in?</span>
                  <input type="text" />
                </label>

                <label>
                  <span>Tell Us More About It!</span>
                  <textarea rows={4} />
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


                <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0zBgXv_F1YCRfKCHdwva8eRne4T3t0nXFAGGaAkjTBaZpLpeyA8fbKeUIY42hqp-8n_1BpL1Fh?gv=true"  width="100%" height="600" ></iframe>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default page