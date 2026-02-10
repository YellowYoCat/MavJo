// // app/components/ServicesDropdown.tsx
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import './globals.css'

// export default function ServicesDropdown() {
//   const [isOpen, setIsOpen] = useState(false);

//   const services = [
//     { name: 'Web Design', href: '/services/webdes' },
//     { name: 'UI/UX Design', href: '/services/uiuxdesign' },
//     { name: 'Web Development', href: '/services/webdev' },
//     { name: 'Documentation', href: '/services/doc' },
//     { name: 'Graphic Design', href: '/services/graphicdes' },
//     { name: 'Website Redesigns', href: '/services/redesigns' },
//     { name: 'Small Business Websites', href: '/services/smallbusiness'},
//     { name: 'Marketing',  href: '/services/marketing' },
//     { name: 'SEO Basics', href: '/services/seobasics' }
//   ];

//   return (
//     <div 
//       className="services-dropdown"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       <Link 
//         href="/services"
//         onClick={() => setIsOpen(!isOpen)}
//         className="services-trigger"
//       >
//         Services <span className="dropdown-arrow">▼</span>
//       </Link>
      
//       {isOpen && (
//         <div className="dropdown-menu">
           
//           {services.map((service) => (
            
//             <Link
//               key={service.href}
//               href={service.href}
//               className="dropdown-item"
//               onClick={() => setIsOpen(false)}
//             >
//               {service.name}
//             </Link>
//           ))}
         
//         </div>
//       )}
//     </div>
//   );
// }

// app/components/ServicesDropdown.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Increased delay before closing (1000ms = 1 second)
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="services-trigger">
        <Link 
          href="/services"
          onClick={(e) => {
            e.preventDefault(); // Prevent navigation when dropdown is toggled
            setIsOpen(!isOpen);
          }}
          className="services-link"
        >
          Services
        </Link>
        <span 
          className="dropdown-arrow"
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        >
          ▼
        </span>
      </div>
      
      {isOpen && (
        <div 
          className="dropdown-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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