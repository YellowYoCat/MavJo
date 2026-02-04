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
         We optimize your website to improve search engine 
         visibility and drive more organic traffic. Our SEO 
         basics include keyword research, on-page optimization,
          and performance tracking to help your business get 
          found online.
        </p>
      </section>

      {/* WHY US */}
      <section className="why">
        <h3>WHY US</h3>
        <p>
         We combine proven SEO strategies with personalized 
         attention to boost your site’s ranking effectively. 
         Our transparent approach ensures you understand the 
         process and see measurable results.
        </p>
      </section>

      {/* PROCESS */}
      <section className="process">
        <h3>OUR PROCESS</h3>

        <div className="timeline">
          <div className="step">
            <span>Keyword research</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Technical SEO audit</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Monitoring & reporting</span>
          </div>
        </div>

        <div className="timeline sub">
          <div className="step">On-page optimization</div>
          <div className="arrow">››››</div>
          <div className="step">Content improvement</div>
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
