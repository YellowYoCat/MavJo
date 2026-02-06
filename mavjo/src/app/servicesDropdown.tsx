// app/components/ServicesDropdown.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import './globals.css'

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: 'Web Design', href: '/services/webdes' },
    { name: 'UI/UX Design', href: '/services/uiuxdesign' },
    { name: 'Web Development', href: '/services/webdev' },
    { name: 'Documentation', href: '/services/doc' },
    { name: 'Graphic Design', href: '/services/graphicdes' },
    { name: 'Website Redesigns', href: '/services/redesigns' },
    { name: 'Small Business Websites', href: '/services/smallbusiness'},
    { name: 'Marketing',  href: '/services/marketing' },
    { name: 'SEO Basics', href: '/services/seobasics' }
  ];

  return (
    <div 
      className="services-dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        href="/services"
        onClick={() => setIsOpen(!isOpen)}
        className="services-trigger"
      >
        Services <span className="dropdown-arrow">▼</span>
      </Link>
      
      {isOpen && (
        <div className="dropdown-menu">
           
          {services.map((service) => (
            
            <Link
              key={service.href}
              href={service.href}
              className="dropdown-item"
              onClick={() => setIsOpen(false)}
            >
              {service.name}
            </Link>
          ))}
         
        </div>
      )}
    </div>
  );
}