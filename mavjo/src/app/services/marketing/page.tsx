import React from 'react'
import '../services.css'

const page = () => {
  return (
    <main className="web-design">

     
      <section className="hero">
        <h1>MARKETING</h1>
        <p className="breadcrumbs">Services / Service Details</p>

        
      </section>

      <section className="offer">
        <h3>WHAT WE OFFER</h3>
        <p>
        We deliver eye-catching graphic designs 
        that effectively communicate your brand’s 
        message across digital and print media. 
        From logos to marketing materials, our designs are
         crafted to engage and inspire your audience.
        </p>
      </section>

     
      <section className="why">
        <h3>WHY US</h3>
        <p>
        We blend creativity with strategic thinking to produce 
        designs that not only look great but also support your 
        business goals. Our collaborative process ensures your 
        vision is brought to life with precision and impact.
        </p>
      </section>

    
      <section className="process">
        <h3>OUR PROCESS</h3>

        <div className="timeline">
          <div className="step">
            <span>Concept development</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Client feedback</span>
          </div>

          <div className="arrow">››››</div>

          <div className="step">
            <span>Final delivery</span>
          </div>
        </div>

        <div className="timeline sub">
          <div className="step">Draft design</div>
          <div className="arrow">››››</div>
          <div className="step">Revisions</div>
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
                backgroundImage: "url('/imgs/figma3.png')"
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
