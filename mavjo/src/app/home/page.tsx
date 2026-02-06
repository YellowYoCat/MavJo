import Image from 'next/image';
import Link from 'next/link';
import '../home/home.css'

const SPage = () => {
  // Data for 3x3 grid items
  const gridItems = [
    { id: 1, title: "Web Design", img: "/imgs/imgButton.jpg", href: "/services/webdes" },
    { id: 2, title: "UI/UX Design", img: "/imgs/imgButton.jpg", href: '/services/uiuxdesign' },
    { id: 3, title: "Web Development", img: "/imgs/imgButton.jpg", href: '/services/webdev' },
    { id: 4, title: "Documentation", img: "/imgs/imgButton.jpg", href: '/services/doc' },
    { id: 5, title: "Graphic Design", img: "/imgs/imgButton.jpg", href: '/services/graphicdesign' },
    { id: 6, title: "Website Redesigns", img: "/imgs/imgButton.jpg", href: '/services/websiteredesign' },
    { id: 7, title: "Small Business Websites", img: "/imgs/imgButton.jpg", href: '/services/smallbusiness' },
    { id: 8, title: "Marketing", img: "/imgs/imgButton.jpg", href: '/services/marketing' },
    { id: 9, title: "SEO Basics", img: "/imgs/imgButton.jpg", href: '/services/seobasics' }
  ];

  return (
    <>
      <div className='logo-banner'>
        <div className='logo-container'>
          <Image
            src="/imgs/JM_white.png"
            width={600}
            height={400}
            className='landinglogo'
            alt='logo'
            priority
          />
          <h1 className='logo-overlay-text'>
            MAKING YOUR DREAMS A REALITY
          </h1>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="page-root">
        <div className="Web-banner">
          <Image
            src="/imgs/serviceImg1.png"
            width={400}
            height={100}
            className="headerimg"
            alt="decorative banner"
            priority
          />
          <header>Services</header>
          <Image
            src="/imgs/serviceImg2.png"
            width={400}
            height={100}
            className="headerimg"
            alt="decorative banner"
          />
        </div>
      </div>

      <div className="services-container">
        <section className="grid-section">
          <div className="images-grid">
            {gridItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="grid-link"
              >
                <div className="grid-item">
                  {/* Title on top */}
                  <div className="item-title">
                    <h3>{item.title}</h3>
                  </div>

                  {/* Image below */}
                  <div className="image-container">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="servicesbtn"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="page-root">
        <div className="Web-banner">
          <Image
            src="/imgs/leftArrows.png"
            width={400}
            height={100}
            className="headerimg"
            alt="left arrows"
          />
          <p>FAQ</p>
          <Image
            src="/imgs/rightArrows.png"
            width={400}
            height={100}
            className="headerimg"
            alt="right arrows"
          />
        </div>
      </div>

      <div className="faq-section">
        <div className="faq">
          <details className="faq-details">
            <summary className="faq-summary">
              <h2>How much do you charge?</h2>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-content">
              <p>
                Pricing is based on the project's scope, complexity, and required features.
                After discussing your needs, We'll provide a detailed quote outlining what's included.
                This ensures transparency and helps avoid unexpected costs.
              </p>
            </div>
          </details>
        </div>

        <div className="faq">
          <details className="faq-details">
            <summary className="faq-summary">
              <h2>How long does a typical project take?</h2>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-content">
              <p>
                Timelines vary depending on project scope and complexity.
                Smaller websites usually take 3–4 weeks,
                while larger or more complex projects can take 6–10 weeks or longer.
                A clear timeline will be provided before the project begins.
              </p>
            </div>
          </details>
        </div>

        <div className="faq">
          <details className="faq-details">
            <summary className="faq-summary">
              <h2>How many revisions are included?</h2>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-content">
              <p>
                Each project includes a set number of revision rounds,
                typically 1–3. Revisions allow for adjustments to design and layout based on your feedback.
                Additional revisions beyond the agreed amount may incur extra fees.
              </p>
            </div>
          </details>
        </div>

        <div className="faq">
          <details className="faq-details">
            <summary className="faq-summary">
              <h2>Can you work with an existing website?</h2>
              <span className="faq-icon">+</span>
            </summary>
            <div className="faq-content">
              <p>
                Yes, we can improve or redesign existing websites.
                This may include updating layouts, improving accessibility,
                optimizing performance, or modernizing the overall look and feel.
              </p>
            </div>
          </details>
        </div>
      </div>
    </>
  );
};

export default SPage;