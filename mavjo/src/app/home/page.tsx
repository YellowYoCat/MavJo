import Image from 'next/image';
import './home.css'; // Adjust import path as needed

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
    </>
  );
};

export default SPage;