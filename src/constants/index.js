import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Audio Technician",
    icon: backend,
  },
  {
    title: "Music Producer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Quality Assurance Warehouse Assembly Technician",
    company_name: "BC Liquor Distribution Branch",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2019 - Present",
    points: [
    
      "Performs daily quality audits and verifies reports and conditions of inventory and order-filling accuracy",
      "Effectively manages inventory by monitoring stock location orders, printing requests, and tracking inventory status and levels",
      "Accurately and efficiently processes over 800 units of outgoing orders and sales each day under tight timelines and pressure",
      "Provides excellent customer service by inspecting and processing damaged products in a timely manner and ensuring all items adhere to Quality Assurance policies and procedures",
    ],
  },
  {
    title: "Audio Engineer",
    company_name: "Music Production Freelance",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Present",
    points: [
      
      "Demonstrates proficiency in the latest music production software and technologies, ensuring meticulous shaping and refinement of tracks. This approach highlights a commitment to excellence in sound production and a passion for creating impactful music.",
      "Perform live audio mixing and engineering during weekly worship services at Coastal Church in Vancouver.",
      "Skilled in crafting emotionally engaging tracks by combining a thorough understanding of music theory with advanced production tools. Dedicated to refining every composition aspect, resulting in music that is not only exceptional in sound quality but also deeply connects with listeners.",
    ],
  },
  {
    title: "Manager",
    company_name: "Reigning Champ",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2017-May 2019",
    points: [
      "Exceeded profitability expectations and targets by periodically reviewing financial data, meeting corporate loss prevention measures, and motivating my team to deliver exceptional brand experience to our customers,",
      "Consistently delivered outstanding customer experience by setting expectations, executing company`s core values, and appropriately resolving customer complaints.",
      "Provided training, support and mentorship to all sales associates to strengthen team dynamics, sales, and productivity",
    ],
  },
  {
    title: "MIT (Manager in Training)",
    company_name: "Champs Sports",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2015-July 2017",
    points: [
      "Managed the logistics and inventory of store products, and created visual merchandising displays and campaigns",
      "Consistently exceeded sales goals and targets while going above and beyond to deliver an exceptional customer experience",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Quiet Waters",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/kylpvn/QuietWaters",
  },
  {
    name: "NewSouls",
    description:
      "The New Souls Company website is a sleek and modern digital platform designed to showcase the company's team and gather client testimonials. Its elegant and user-centric layout offers visitors an intuitive browsing experience.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/kylpvn/NewSouls-startup",
  },
  {
    name: "TopSushi-Van",
    description:
      "The website's foundation is built on HTML5, creating a responsive and accessible interface that adapts to various devices and screen sizes. CSS3 is employed for visual styles that include gradients and animations, reflecting the sushi theme across all device resolutions using responsive design principles.", 

    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/kylpvn/TopSushi-Van",
  },
];

export { services, technologies, experiences, testimonials, projects };
