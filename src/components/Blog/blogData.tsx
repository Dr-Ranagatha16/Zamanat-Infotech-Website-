import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Web Development Portfolio",
    paragraph:
      "Zamanat InfoTech creates responsive, secure, and user-friendly websites, including corporate sites and e-commerce platforms, tailored to meet client needs using modern technologies like React and WordPress.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Mobile App Development Portfolio",
    paragraph:
      "We develop custom mobile apps for iOS and Android, offering both native and cross-platform solutions for e-commerce, business productivity, and consumer apps, built with technologies like React Native and Swift.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Software Development & Automation Portfolio",
    paragraph:
      "Zamanat InfoTech delivers custom software, ERP systems, and automation solutions that streamline business processes and enhance efficiency, utilizing technologies like Java, Python, and cloud platforms.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
