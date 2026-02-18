import React from 'react'
import '../services.css'

const page = () => {
  return (
    <main className="web-design">

     
      <section className="hero">
        <h1>DOCUMENTATION</h1>
        <p className="breadcrumbs">Services / Service Details</p>

        
      </section>

     
      <section className="offer">
        <h3>WHAT WE OFFER</h3>
        <p>
          We create clear, organized documentation that simplifies 
          complex information for your team and users. From manuals 
          to guides, our documentation ensures everyone understands 
          your products and processes easily.
        </p>
      </section>

      
      <section className="why">
        <h3>WHY US</h3>
        <p>
         We focus on clarity and usability, turning technical details into 
         straightforward, accessible content. Our thorough approach 
         helps reduce confusion and improves communication across your 
         organization.
        </p>
      </section>

      
      <section className="process">
        <h3>OUR PROCESS</h3>

        <div className="timeline">
          <div className="step">
            <span>Information gathering</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Draft writing</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Final formatting</span>
          </div>
        </div>

        <div className="timeline sub">
          <div className="step">Content structuring</div>
          <div className="arrow">››››</div>
          <div className="step">Review & editing</div>
        </div>
      </section>

   
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
