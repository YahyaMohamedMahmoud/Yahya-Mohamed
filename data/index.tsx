import { AiOutlineApi, AiOutlineGlobal } from "react-icons/ai";
import { FaJsSquare, FaMobileAlt, FaSearch } from "react-icons/fa";
import {
  FaCss3,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaReact,
  FaWhatsapp,
  FaWordpress,
} from "react-icons/fa6";
import { MdOutlineSpeed } from "react-icons/md";
import {
  SiAxios,
  SiBootstrap,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const cvUrl =
  "https://drive.google.com/file/d/1YJ1kheahQ57hBWmtP0AWJsrssn3wddjA/view?usp=sharing";


export const projects = [
  {
    id: 1,
    title: "Ryzn Shop",
    des: "Developed and launched a WooCommerce-based e-commerce website for a fashion brand, handling design, product setup, and payment integration.",
    img: "/Ryzn Shop.webp",
    iconsList: ["/Wordpress.png", "/php-svgrepo-com.svg" , "/js.svg",],
    link: "https://ryzn-shop.com",
  },
  {
    id: 15,
    title: "Coach Ziad Akram",
    des: "Online coaching website built with WordPress, featuring subscription-based packages. I designed the full UI/UX myself, with seamless checkout and Stripe payment integration, fully responsive design, and smooth user experience.",
    img: "/Ziad-akram.webp",
   iconsList: ["/Wordpress.png", "/php-svgrepo-com.svg" , "/js.svg",],
    link: "https://ziadakramofficial.com/",
  },
  {
    id: 16,
    title: "Miftaah Al Wadi",
  des: "Landing page for Miftaah Al Wadi, a Saudi-based software company offering web development and digital solutions. I created the full UI/UX design myself, ensuring a clean, professional, and fully responsive presentation of the company's identity.",
    img: "/Miftah.webp",
   iconsList: ["/Wordpress.png", "/php-svgrepo-com.svg" , "/js.svg",],
    link: "https://miftaahalwadi.net/",
  },
    {
    id: 6,
    title: "Egypt Peace",
    des: "Developed a multilingual news platform for the Egypt Foundation for Development and Human Rights, using WordPress to deliver accessible and up-to-date news content. Implemented language support to reach and engage a broader audience.",
    img: "/Egypt-peace.webp",
    iconsList: ["/Wordpress.png", "/php-svgrepo-com.svg", "/js.svg"],
    link: "https://egypt-peace.org/",
  }
  ,  
    {
    id: 17,
    title: "Clear Real Estate",
    des: "Real estate website implemented from a Figma design using WordPress, Elementor Pro, and custom fields for flexible content management. Fully responsive with a professional and user-friendly interface.",
    img: "/Clear-img.webp",
    iconsList: ["/Wordpress.png", "/php-svgrepo-com.svg", "/js.svg"],
    link: "https://dev.rasans.com/clear/",
  }
  ,  
  {
    id: 2,
    title: "Umino Fashion Site",
    des: "Modern fashion store developed using React and use Redux and Redux ToolKit Plus API. Includes responsive design and seamless user navigation.",
    img: "/UMINO.webp",
    iconsList: ["/react.svg", "/js.svg", "/bootstrap-4.svg", "/redux.svg"],
    link: "https://umino-clothes.vercel.app/",
    sourceCode: "https://github.com/YahyaMohamedMahmoud/Umino",
  },
  {
    id: 3,
    title: "Al Bakry For WoodWorking Machines",
    des: "Developed a user-friendly woodworking tools website using WordPress and WooCommerce for seamless product management and sales. Integrated WPML to support multiple languages, ensuring accessibility for a diverse audience.",
    img: "/AlBakry.webp",
    iconsList: ["/Wordpress.png", "/php-svgrepo-com.svg", "/js.svg"],
    link: "https://woodworking.albakry.net/",
  },
  {
    id: 7,
    title: "Care Plus Dashboard",
    des: "Care Plus Admin dashboard . Developed using React, REST API ,React Router, Axios, Redux Toolkit, and Tailwind CSS. Email and password authentication with JWT token. Email : uea_egypt@gmail.com && Password : egyptadmin123 ",
    img: "/Care-plus.webp",
    iconsList: ["/react.svg", "/js.svg", "/tailwind.svg", "/redux.svg"],
    link: "https://elitessgroup.in/",
    sourceCode: "https://github.com/YahyaMohamedMahmoud/Care_Plus",
  },
  {
    id: 4,
    title: "Modern.Co Home Decor",
    des: "Home decor platform created with React js and API. Fully responsive with engaging, user-focused design elements.",
    img: "/Modern.webp",
    iconsList: ["/react.svg", "/js.svg", "/bootstrap-4.svg", "/redux.svg"],
    link: "https://furniture-project-six.vercel.app/",
    sourceCode: "https://github.com/YahyaMohamedMahmoud/Furniture-Project",
  },
    {
    id: 13,
    title: "JT Technology | Saudi Arabia",
    des: "A minimalist landing page built using HTML, CSS, and JavaScript.I created the full UI/UX design myself and developed the page, which is available in two languages.",
    img: "/JT - Project.webp",
    iconsList: ["/html.svg", "/css.svg", "/js.svg", "/bootstrap-4.svg"],
    link: "https://rasansrise.github.io/JT/",
    sourceCode: "https://github.com/RasansRise/JT",
  },
  //   {
  //   id: 14,
  //   title: "JT Technology | Saudi Arabia",
  //   des: "A minimalist landing page built using HTML, CSS, and JavaScript.I created the full UI/UX design myself and developed the page, which is available in two languages.",
  //   img: "/JT - Project.webp",
  //   iconsList: ["/html.svg", "/css.svg", "/js.svg", "/bootstrap-4.svg"],
  //   link: "https://rasansrise.github.io/JT/",
  //   sourceCode: "https://github.com/RasansRise/JT",
  // },
  {
    id: 9,
    title: "Unsen Minimalist Store",
    des: "Minimalist e-commerce site built with Html , CSS and JavaScript Plus API. Focused on a clean, user-friendly shopping experience.",
    img: "/project-unsen-web.webp",
    iconsList: ["/html.svg", "/css.svg", "/js.svg", "/bootstrap-4.svg"],
    link: "https://yahyamohamedmahmoud.github.io/unsen-Project/",
    sourceCode: "https://github.com/YahyaMohamedMahmoud/unsen-Project",
  },
  {
    id: 10,
    title: "MIRORA Store",
    des: "E-commerce watch store built with HTML, CSS, and JavaScript Plus API. Features dynamic product pages and interactive UI elements.",
    img: "/project-watches-web.webp",
    iconsList: ["/html.svg", "/css.svg", "/js.svg", "/bootstrap-4.svg"],
    link: "https://yahyamohamedmahmoud.github.io/Watches-Project/",
    sourceCode: "https://github.com/YahyaMohamedMahmoud/Watches-Project",
  },
  {
    id: 12,
    title: "Charity Platform",
    des: "Charity website created using HTML and CSS. Engages users to contribute to social causes with ease.",
    img: "/Charity-web.webp",
    iconsList: ["/html.svg", "/css.svg", "/js.svg", "/bootstrap-4.svg"],
    link: "https://yahyamohamedmahmoud.github.io/Charity-Project/",
    sourceCode: "https://yahyamohamedmahmoud.github.io/Charity-Project/",
  },
  {
    id: 8,
    title: "Raqamyat Solutions Platform",
    des: "Fintech site developed using HTML and CSS, designed to showcase financial solutions and amplify revenue growth.",
    img: "/raqamyat-web.webp",
    iconsList: ["/html.svg", "/css.svg", "/js.svg", "/bootstrap-4.svg"],
    link: "https://yahyamohamedmahmoud.github.io/Raqamyat-Project/",
    sourceCode: "https://github.com/YahyaMohamedMahmoud/Raqamyat-Project",
  },
];
const date = new Date();
const yearsOfExperience = date.getFullYear() - 2023;
const projectsCompleted = 15;
const clients = 10;

export const aboutData = [
  {
    number: yearsOfExperience,
    text: "Years of Experience",
  },
  {
    number: projectsCompleted,
    text: "Project Completed",
  },
  {
    number: clients,
    text: "Clients",
  },
];

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const skills = [
  { id: 1, icon: <SiNextdotjs />, text: "Next.js" },
  { id: 2, icon: <SiTypescript />, text: "TypeScript" },
  { id: 3, icon: <FaReact />, text: "React.js" },
  { id: 4, icon: <FaJsSquare />, text: "JavaScript" },
  { id: 11, icon: <FaWordpress />, text: "WordPress" },
  { id: 5, icon: <FaHtml5 />, text: "HTML" },
  { id: 6, icon: <FaCss3 />, text: "CSS" },
  { id: 7, icon: <SiSass />, text: "Sass" },
  { id: 8, icon: <SiTailwindcss />, text: "Tailwind CSS" },
  { id: 9, icon: <SiBootstrap />, text: "Bootstrap" },
  { id: 10, icon: <SiShadcnui />, text: "Shadcn UI" },
  { id: 12, icon: <SiRedux />, text: "Redux Toolkit" },
  { id: 13, icon: <SiAxios />, text: "Axios" },
  { id: 14, icon: <FaGitAlt />, text: "Git & Github" },
  { id: 15, icon: <AiOutlineApi />, text: "REST APIs" },
  { id: 16, icon: <SiPostgresql />, text: "PostgreSQL" },
  { id: 17, icon: <FaSearch />, text: "SEO Best Practices" },
  { id: 18, icon: <MdOutlineSpeed />, text: "Web Performance Optimization" },
  { id: 19, icon: <FaMobileAlt />, text: "Responsive Design" },
  { id: 20, icon: <AiOutlineGlobal />, text: "Cross-Browser Compatibility" },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/YahyaMohamedMahmoud",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/yahia-mohamed-5282a7218/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    link: "https://wa.me/+201146461602",
    icon: <FaWhatsapp />,
  },
];
