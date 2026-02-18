import React from 'react'
import '../services.css'

const page = () => {
  return (
    <main className="web-design">

      {/* HERO */}
      <section className="hero">
        <h1>WEB DEVELOPMENT</h1>
        <p className="breadcrumbs">Services / Service Details</p>

       
      </section>

      {/* WHAT WE OFFER */}
      <section className="offer">
        <h3>WHAT WE OFFER</h3>
        <p>
          We build fast, reliable, and scalable websites using
          modern technologies to ensure strong performance across all devices.
          From clean front-end interfaces to solid back-end
          functionality, our development focuses on speed, security,
          and maintainability.
        </p>
      </section>

      {/* WHY US */}
      <section className="why">
        <h3>WHY US</h3>
        <p>
          We build fast, reliable, and scalable websites using
          modern technologies to ensure strong performance across
          all devices. From clean front-end interfaces to solid
          back-end functionality, our development focuses on
          speed, security, and maintainability.
        </p>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h3>OUR PROCESS</h3>

        <div className="timeline">
          <div className="step">
            <span>Requirements gathering</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Development</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Deployment & support</span>
          </div>
        </div>

        <div className="timeline sub">
          <div className="step">Technical planning</div>
          <div className="arrow">››››</div>
          <div className="step">Testing & optimization</div>
        </div>
      </section>

      {/* PROJECTS */}
      {/* <section className="projects">
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
      </section> */}

    </main>
  );
}

export default page
