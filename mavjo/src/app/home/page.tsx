import Image from 'next/image';
import './home.css';


const SPage = () => {


  // Data for 3x3 grid items
  const gridItems = [
    { id: 1, title: "Web Design", img: "/imgs/imgButton.jpg" },
    { id: 2, title: "UI/UX Design", img: "/imgs/imgButton.jpg" },
    { id: 3, title: "Web Development", img: "/imgs/imgButton.jpg" },
    { id: 4, title: "Documentation", img: "/imgs/imgButton.jpg" },
    { id: 5, title: "Graphic Design", img: "/imgs/imgButton.jpg" },
    { id: 6, title: "Website Redesigns", img: "/imgs/imgButton.jpg" },
    { id: 7, title: "small Business Websites", img: "/imgs/imgButton.jpg" },
    { id: 8, title: "Marketing", img: "/imgs/imgButton.jpg" },
    { id: 9, title: "SEO Basics", img: "/imgs/imgButton.jpg" }
  ];


  return (
    <>
      <div className="page-root">
        <div className="Web-banner">
          <Image
            src="/imgs/serviceImg1.png"
            width={400}
            height={100}
            className="headerimg"
            alt="sound wave bar" />
          <header>Services</header>
          <Image
            src="/imgs/serviceImg2.png"
            width={400}
            height={100}
            className="headerimg"
            alt="sound wave bar" />
        </div>
      </div>

      <div className="services-container">
        <section className="grid-section">

          <div className="images-grid">
            {gridItems.map((item) => (
              <div key={item.id} className="grid-item">
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
                    className="servicesbtn" />
                </div>
              </div>
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
            alt="sound wave bar" />
          <p>FAQ</p>
          <Image
            src="/imgs/rightArrows.png"
            width={400}
            height={100}
            className="headerimg"
            alt="sound wave bar" />
        </div>
      </div>

      <div className="faq">
        <details className="faq-details">
          <summary className="faq-summary">
            <h1>How much do you charge?</h1>
            <span className="faq-icon">+</span>
          </summary>
          <div className="faq-content">
            <p>
              Pricing is based on the project’s scope, complexity, and required features.
              After discussing your needs, We’ll provide a detailed quote outlining what’s included.
              This ensures transparency and helps avoid unexpected costs.
            </p>
          </div>
        </details>
      </div>

      <div className="faq">
        <details className="faq-details">
          <summary className="faq-summary">
            <h1>How long does a typical project take?</h1>
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
            <h1>How many revisions are included?</h1>
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
            <h1>Can you work with an existing website?</h1>
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
      </>
      );
};

      export default SPage;