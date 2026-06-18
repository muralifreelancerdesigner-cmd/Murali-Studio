export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  location: string;
  details: string[];
}

export const PROFILE_INFO = {
  name: "R. Murali",
  title: string;
  location: "Chennai, India",
  email: "murali.triggerview@gmail.com",
  summary: "Dynamic and highly creative Multimedia Professional with over 12 years of progressive experience spanning Graphic Design, Video Editing, Motion Graphics, and Application Development. Proven track record of executing end-to-end digital campaigns that boost brand engagement and drive measurable sales growth.",
  skills: {
    design: ["Brand Identity Development", "Concept Visualization", "Typography", "Layout Design"],
    video: ["Motion Graphics", "Cinematic Storytelling", "Video Compositing", "Audio Design"],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro", "Adobe After Effects", "3D Architectural Apps"]
  }
};

export const TIMELINE_HISTORY: TimelineItem[] = [
  {
    year: "2025",
    role: "Graphic Designer & Video Editor",
    company: "Chettinad Hospital and Research Institute",
    location: "Chennai, India",
    details: [
      "Conceptualized high-converting social media campaigns and digital event collaterals.",
      "Produced and edited engaging short-form promotional videos optimized for healthcare marketing channels."
    ]
  },
  {
    year: "2022 - 2024",
    role: "Graphic Designer & Video Editor",
    company: "Teak Home",
    location: "Coimbatore, India",
    details: [
      "Engineered daily high-performing print catalogues, social graphics, and marketing materials.",
      "Scripted and finalized product showcase video campaigns across YouTube, Instagram, and Facebook."
    ]
  },
  {
    year: "2016 - 2022",
    role: "Video Editor & Designer",
    company: "Local Broadcast Channels",
    location: "Coimbatore, India",
    details: [
      "Designed and finalized high-impact commercial television advertisement videos for regional broadcast.",
      "Developed and optimized long-form digital content assets to accelerate subscriber growth metrics."
    ]
  },
  {
    year: "2013 - 2016",
    role: "Application Developer",
    company: "Pamz3d Designs India Pvt Ltd",
    location: "Coimbatore, India",
    details: [
      "Programmed and developed interactive cross-platform applications designed to visualize advanced 3D architectural models."
    ]
  }
];
