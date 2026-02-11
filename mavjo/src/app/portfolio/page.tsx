"use client";

import "./portfolio.css";
import Image from "next/image";
import { memo, useMemo, useState } from "react";

// Define proper types
type ProjectCategory = "all" | "figma" | "marketing" | "web";
type Project = {
  id: string;
  title: string;
  desc: string;
  img: string;
  category: Exclude<ProjectCategory, "all">;
  alt: string;
};

// Move data to separate file in production
const projects: Project[] = [
  {
    id: "project-1",
    title: "E-commerce Dashboard",
    desc: "A comprehensive dashboard for managing online store operations, featuring real-time analytics and inventory management.",
    img: "/imgs/ecommerce-dashboard.jpg",
    category: "web",
    alt: "E-commerce dashboard interface showing sales analytics",
  },
  {
    id: "project-2",
    title: "Brand Identity Design",
    desc: "Complete brand identity package including logo design, color palette, typography, and brand guidelines.",
    img: "/imgs/brand-identity.jpg",
    category: "figma",
    alt: "Brand identity mockup with logo and color palette",
  },
  {
    id: "project-3",
    title: "Social Media Campaign",
    desc: "Integrated marketing campaign across Instagram, LinkedIn, and Twitter resulting in 200% engagement increase.",
    img: "/imgs/social-campaign.jpg",
    category: "marketing",
    alt: "Social media marketing campaign analytics dashboard",
  },
  {
    id: "project-4",
    title: "Mobile App Design",
    desc: "User-centered mobile application design with focus on accessibility and seamless user experience.",
    img: "/imgs/mobile-app.jpg",
    category: "figma",
    alt: "Mobile app interface design showing multiple screens",
  },
];

// Filter button configuration
const filterButtons = [
  { id: "all", label: "SHOW ALL", category: "all" },
  { id: "figma", label: "FIGMA DESIGNS", category: "figma" },
  { id: "marketing", label: "MARKETING", category: "marketing" },
  { id: "web", label: "WEB DESIGN/DEVELOPMENT", category: "web" },
] as const;

// Memoized project card component
const ProjectCard = memo(({ project, index }: { project: Project; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <article 
      className={`project-row ${isEven ? "normal" : "reverse"}`}
      aria-label={`Project: ${project.title}`}
    >
      <div className="image-wrapper">
        <Image
          src={project.img}
          alt={project.alt}
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          priority={index < 2}
          quality={85}
          className="project-image"
        />
      </div>

      <div className="content">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.desc}</p>
        <div className="project-meta">
          <span className={`category-badge category-${project.category}`}>
            {project.category.toUpperCase()}
          </span>
          <button 
            className="view-project-btn"
            aria-label={`View details for ${project.title}`}
          >
            View Project
            <span className="visually-hidden">: {project.title}</span>
            <svg 
              className="arrow-icon" 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              aria-hidden="true"
            >
              <path 
                fill="currentColor" 
                d="M8 15L7 14L12.2 9H0V7H12.2L7 2L8 1L15 8L8 15Z" 
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  // Memoize filtered projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="portfolio-page">
      
      {/* HERO SECTION */}
      <section className="portfolio-hero" aria-labelledby="portfolio-title">
        <div className="hero-content">
          <h1 id="portfolio-title">Portfolio</h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li aria-current="page">Portfolio</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="filter-section" aria-labelledby="filter-title">
        <h2 id="filter-title" className="visually-hidden">Filter Projects</h2>
        
        <div className="filter-controls" role="group" aria-label="Project filters">
          <span className="filter-label">FILTER BY:</span>
          
          <div className="filter-buttons">
            {filterButtons.map(({ id, label, category }) => (
              <button
                key={id}
                onClick={() => setActiveFilter(category)}
                className={`filter-btn ${activeFilter === category ? "active" : ""}`}
                aria-pressed={activeFilter === category}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        
        <p className="results-count" aria-live="polite" aria-atomic="true">
          Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
        </p>
      </section>

      {/* PROJECTS GRID */}
      {filteredProjects.length > 0 ? (
        <section 
          className="projects-section" 
          aria-label="Project showcase"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </section>
      ) : (
        <div className="no-results" role="status">
          <p>No projects found for the selected filter.</p>
          <button 
            onClick={() => setActiveFilter("all")}
            className="reset-filter-btn"
          >
            View all projects
          </button>
        </div>
      )}

    </main>
  );
}