import React from 'react'
import '../services.css'

const page = () => {
  return (
    <main className="web-design">

      {/* HERO */}
      <section className="hero">
        <h1>UI/UX DESIGN</h1>
        <p className="breadcrumbs">Services / Service Details</p>


      </section>

      {/* WHAT WE OFFER */}
      <section className="offer">
        <h3>WHAT WE OFFER</h3>
        <p>
          We create intuitive, user-centered interfaces that are both visually
          appealing and easy to use. Our UI/UX design process
          focuses on research, usability, and thoughtful interactions
          to deliver meaningful, engaging experiences.
        </p>
      </section>

      {/* WHY US */}
      <section className="why">
        <h3>WHY US</h3>
        <p>
          We design with users first, grounding every decision
          in research and usability best practices. By blending
          strategy, creativity, and attention to detail, we deliver experiences that feel seamless and purposeful.
        </p>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h3>OUR PROCESS</h3>

        <div className="timeline">
          <div className="step">
            <span>User research</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Visual design</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Usability testing</span>
          </div>
        </div>

        <div className="timeline sub">
          <div className="step">Wireframing</div>
          <div className="arrow">››››</div>
          <div className="step">Prototyping</div>
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
                backgroundImage: "url('/imgs/UI/characterCove.png')", 
                width: "100%",
                height: "220px",
                backgroundSize: "cover"
              }}
            />
            <p>Where you can make your own Character otherwise known as OC's.</p>
          </div>

          <div className="project-card">
            <div
              className="wireframe"
              style={{
                backgroundImage: "url('/imgs/UI/SNWBig.png')",
                width: "100%",
                height: "200px",
                backgroundSize: "cover"
              }}
            />
            <p>Desktop version of Super nom Wranger a search map engine to find mom and pop restaurants </p>
          </div>

          <div className="project-card">
            <div
              className="wireframe"
              style={{
                backgroundImage: "url('/imgs/UI/SNWsmall.png')",
                backgroundSize: "cover"
              }}
            />
            <p>tablet version of Super nom Wranger a search map engine to find mom and pop restaurants</p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default page
