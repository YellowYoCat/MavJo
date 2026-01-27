import React from 'react'
import './about.css'
import Link from 'next/dist/client/link'
const page = () => {
  return (
    <section className='about'>
      <div className='about-header'>
        <h1>ABOUT</h1>
        <img src="/imgs/decorative.jpg" className='decorative' alt="About Banner" width={600} height={50} />
      </div>

      <div className='nav-links'>
        <p className='sub'>Home</p> <p> About</p>
      </div>
      <p className='body-text'>
        Welcome to MavJo Designs! We are a creative agency dedicated to bringing your ideas to life through innovative design solutions. Our team of talented designers and developers work closely with clients to create stunning visuals and user-friendly experiences.
      </p>

      <div className='mm'>
        <div>
          <h2> MADISON MITCHELL</h2>
          <p className='body-text'>
            I'm a passionate UI/UX Designer with a background in web development and graphic design. I love creating intuitive, visually engaging interfaces that enhance user experiences. With a strong eye for detail and a user-centered approach, I specialize in wireframing, prototyping, and front-end development to bring designs to life. I'm always exploring new design trends and technologies to craft seamless, accessible, and aesthetically pleasing digital experiences.
          </p>

          <Link href="https://erinmitchellport.wixsite.com/madisonmitchell">
            <div className="portfolio-banner">
              <img
                src="/imgs/btn.png"
                alt="Portfolio"
                width={200}
                height={200}
                className="banner-image"
              />
              <div className="banner-overlay">
                <span className="banner-text" >Portfolio</span>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <img className='erin' src="/imgs/erin.jpg" alt="Madison Mitchell" width={500} height={500} />
        </div>
      </div>
      <br></br>
      <img src="/imgs/divider.png" className='divider' alt="About Banner" width={1000} height={50} />
      <br></br>
      <div className='mm'>
        <div>
          <img className='johanna' src="/imgs/johonna.png" alt="johanna johsoni" width={500} height={500} />
        </div>
        <div>
          <h2> JOHANNA JOHNSON</h2>
          <p className='body-text'>
            I’m a motivated, fast-learning developer with a strong focus on front-end development and creating great user experiences. I enjoy designing clean, intuitive interfaces and working with modern frameworks and smooth animations. While front-end and UI/UX are my main passions, I also have a solid foundation in full-stack and back-end development, which allows me to contribute wherever the team needs support.          </p>

          <Link href="https://pondfolio.space/">
            <div className="portfolio-banner">
              <img
                src="/imgs/btn.png"
                alt="Portfolio"
                width={200}
                height={200}
                className="banner-image"
              />
              <div className="banner-overlay">
                <span className="banner-text" >Portfolio</span>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default page