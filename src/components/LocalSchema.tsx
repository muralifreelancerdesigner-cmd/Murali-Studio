'use client';

import React from 'react';
import { PROFILE_INFO } from '@/data/constants';

export default function LocalSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${PROFILE_INFO.name} | Murali Studio`,
    "image": "https://vercel.app",
    "@id": "https://vercel.app",
    "url": "https://vercel.app",
    "telephone": "+919344517533",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "description": PROFILE_INFO.summary,
    "knowsAbout": [
      ...PROFILE_INFO.skills.design,
      ...PROFILE_INFO.skills.video,
      ...PROFILE_INFO.skills.tools
    ],
    "jobTitle": PROFILE_INFO.title
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
