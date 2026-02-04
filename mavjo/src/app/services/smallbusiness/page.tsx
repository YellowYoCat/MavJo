import React from 'react'
import '../services.css'

const page = () => {
  return (
    <main className="web-design">

      {/* HERO */}
      <section className="hero">
        <h1>SMALL BUSINESS</h1>
        <p className="breadcrumbs">Services / Service Details</p>

        
      </section>

      {/* WHAT WE OFFER */}
      <section className="offer">
        <h3>WHAT WE OFFER</h3>
        <p>
          We help small businesses establish a strong online
          presence with affordable, customized digital solutions.
          From branding to websites, we focus on practical designs
          that support growth and connect with your audience.
        </p>
      </section>

      {/* WHY US */}
      <section className="why">
        <h3>WHY US</h3>
        <p>
          We understand the unique challenges small businesses
          face and tailor solutions to fit your goals and budget.
          With a hands-on, collaborative approach, we focus on
          delivering real value and long-term growth.
        </p>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h3>OUR PROCESS</h3>

        <div className="timeline">
          <div className="step">
            <span>Business discovery</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Custom solution design</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Growth & support</span>
          </div>
        </div>

        <div className="timeline sub">
          <div className="step">Goal setting</div>
          <div className="arrow">››››</div>
          <div className="step">Implementation</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h3>(SERVICE) PROJECTS</h3>

        <div className="project-grid">
          <div className="project-card large">
            <div
              className="wireframe"
              style={{
                // backgroundImage: "url('/imgs/figma1.png')",
                width: "100%",
                height: "220px"
              }}
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="project-card">
            <div
              className="wireframe"
              style={{
                // backgroundImage: "url('/imgs/figma2.png')",
                width: "100%",
                height: "50pxpx"
              }}
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="project-card">
            <div
              className="wireframe"
              style={{
                // backgroundImage: "url('/imgs/figma3.png')" 
              }}
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default page
