import React from 'react'
import '../services.css'

const page = () => {
  return (
    <main className="web-design">

      {/* HERO */}
      <section className="hero">
        <h1>WEB DESIGN</h1>
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
          In today’s digital-first world, user experience can make or break a product.
          That’s why at Wake Creative, we focus on creating intuitive, visually appealing
          designs that resonate with your audience and drive engagement.
        </p>
      </section>

      {/* WHY US */}
      <section className="why">
        <h3>WHY US</h3>
        <p>
          In today’s digital-first world, user experience can make or break a product.
          That’s why at Wake Creative, we focus on creating intuitive, visually appealing
          designs that resonate with your audience and drive engagement.
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
            <span>Start Coding</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Deploy your new site</span>
          </div>
        </div>

        <div className="timeline sub">
          <div className="step">Wireframe & Mockups</div>
          <div className="arrow">››››</div>
          <div className="step">85% done – See if the client wants to change anything</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h3>(SERVICE) PROJECTS</h3>

        <div className="project-grid">
          <div className="project-card large">
            <div className="wireframe" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="project-card">
            <div className="wireframe" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="project-card">
            <div className="wireframe" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

    </main>
  );
}

export default page
