import React from 'react'
import '../services.css'

const page = () => {
  return (
    <main className="web-design">

      {/* HERO */}
      <section className="hero">
        <h1>GRAPHIC DESIGN</h1>
        <p className="breadcrumbs">Services / Service Details</p>

        <div className="hero-frame">
          <h2>TRANSFORMING IDEAS INTO EXCEPTIONAL USER EXPERIENCES</h2>
          <p>
            In today’s digital-first world, user experience can make or break a product.
            That’s why at Wake Creative, we focus on creating intuitive, visually appealing
            designs that resonate with your audience and drive engagement.
          </p>
          <span className="needs">THIS NEEDS TO BE CHANGED</span>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="offer">
        <h3>WHAT WE OFFER</h3>
        <p>
          We design visually engaging, user-centered websites that balance
          aesthetics with usability to create seamless digital experiences.
          Every site is thoughtfully crafted to be responsive, accessible,
          and aligned with your brand’s goals.
        </p>
      </section>

      {/* WHY US */}
      <section className="why">
        <h3>WHY US</h3>
        <p>
          We combine thoughtful UX design with clean,
          modern development to create experiences that
          feel intuitive and engaging. Our collaborative
          process ensures your goals stay at the center,
          resulting in solutions that are both visually
          compelling and purpose-driven.
        </p>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h3>OUR PROCESS</h3>

        <div className="timeline">
          <div className="step">
            <span>Talking with the client</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Plan & strategize</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Design the experience</span>
          </div>
        </div>

        <div className="timeline sub">
          <div className="step">Discover & research</div>
          <div className="arrow">››››</div>
          <div className="step">Develop & test</div>
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
                backgroundImage: "url('/imgs/graphicDesign/MFFCard.png')",
                width: "100%",
                height: "220px",
                backgroundSize: "cover"
              }}
            />
            <p>Redesign of Mitchell fence & fab</p>
          </div>

          <div className="project-card">
            <div
              className="wireframe"
              style={{
                backgroundImage: "url('/imgs/graphicDesign/salvosLogo.png')",
                width: "100%",
                height: "200px",
                backgroundSize: "cover"
              }}
            />
            <p>a redesign of a Logo</p>
          </div>

          <div className="project-card">
            <div
              className="wireframe"
              style={{
                backgroundImage: "url('/imgs/graphicDesign/timeTurner.png')",
                 width: "100%",
                height: "200px",
                backgroundSize: "cover"
              }}
            />
            <p>a redesign of a Logo</p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default page
