"use client";

import "./portfolio.css";
import Image from "next/image";
import { memo, useMemo, useState } from "react";

// Define proper types
type ProjectCategory = "all" | "UI/UX" | "Redesign" | "web" | "graphic";
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
    title: "MAVJO",
    desc: "the starting point for MavJo our website.",
    img: "/imgs/mavjo.png",
    category: "web",
    alt: " picture of the starting point for MavJo our website.",
  },
  {
    id: "project-3",
    title: "Trax App redesign",
    desc: "Trax redesign for the Trax app",
    img: "/imgs/redesign/traxMain.png",
    category: "Redesign",
    alt: "Picture of the design of the trax app",
  },
  {
    id: "project-5",
    title: "Character Cove",
    desc: "A user social app to talk about their personal characters they have made",
    img: "/imgs/UI/characterCove.png",
    category: "UI/UX",
    alt: "a social media website",
  },
  {
    id: "project-6",
    title: "Super Nom Wrangler",
    desc: "A website focused on letting users discover local places to eat without the hassle of flitering through bigger chains",
    img: "/imgs/UI/SNWsmall.png",
    category: "web",
    alt: "a food finding website",
  },
  {
    id: "project-7",
    title: "Mitchell Fence and Fab",
    desc: "A small company welding business site",
    img: "/imgs/webDesign/MFF.png",
    category: "web",
    alt: "mitchell fence and fab website design",
  },
  {
    id: "project-8",
    title: "Time Turner",
    desc: "Sketches for a small antique store that needed an revamped logo",
    img: "/imgs/graphicDesign/timeTurnerSketch.png",
    category: "graphic",
    alt: "page of logo sketches",
  },
  {
    id: "project-9",
    title: "Time Turner",
    desc: "Finalized business card with logo",
    img: "/imgs/graphicDesign/timeTurner.png",
    category: "graphic",
    alt: "business card with logo",
  },
  {
    id: "project-10",
    title: "Verdigris High School Volleyball Team",
    desc: "A door wrap custom designed and eventually hand made and installed for the Verdigris High school volleyball team.",
    img: "/imgs/graphicDesign/VDoorWrap.png",
    category: "graphic",
    alt: "volleyball door wrap",
  },
];

// Filter button configuration
const filterButtons = [
  { id: "all", label: "SHOW ALL", category: "all" },
  { id: "fUI/UX", label: "UI/UX", category: "UI/UX" },
  { id: "Redesign", label: "REDESIGN", category: "Redesign" },
  { id: "web", label: "WEB DESIGN/DEVELOPMENT", category: "web" },
  { id: "wgraphicb", label: "GRAPHIC DESIGN", category: "graphic" },

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
          {/* <button 
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
          </button> */}
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
          {/* <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li aria-current="page">Portfolio</li>
            </ol>
          </nav> */}
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