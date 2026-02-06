import React from 'react'
import '../services.css'

const page = () => {
  return (
    <main className="web-design">

      {/* HERO */}
      <section className="hero">
        <h1>WEB DESIGN</h1>
        <p className="breadcrumbs">Services / Service Details</p>


      </section>

      {/* WHAT WE OFFER */}
      <section className="offer">
        <h3>WHAT WE OFFER</h3>
        <p>
          We refresh and modernize existing websites to improve usability,
          performance, and visual appeal. Our redesigns focus on enhancing user
          experience while aligning your site with current branding and business goals.
        </p>
      </section>

      {/* WHY US */}
      <section className="why">
        <h3>WHY US</h3>
        <p>
          We bring fresh ideas and expert insights to transform your site
          without losing what makes your brand
          unique. Our collaborative process ensures the redesign meets both
          user needs and your business objectives.
        </p>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h3>OUR PROCESS</h3>

        <div className="timeline">
          <div className="step">
            <span>Site analysis</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Design update</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Testing & launch</span>
          </div>
        </div>

        <div className="timeline sub">
          <div className="step">Strategy development</div>
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
                backgroundImage: "url('/imgs/traxMain.png')",
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
                backgroundImage: "url('/imgs/traxOther.png')",
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
                backgroundImage: "url('/imgs/traxTrain.png')" 
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
