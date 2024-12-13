import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Our Process",
    path: "/ourProcess",
    newTab: false,
  },
  {
    id: 3,
    title: "Our Edge",
    path: "/chooseUs",
    newTab: false,
  },
  {
    id: 4,
    title: "Overview",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Custom Website Design",
        path: "/websiteDesignpage",
        newTab: false,
      },
      {
        id: 42,
        title: "Responsive Web Development",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "E-commerce Solutions",
        path: "/E-commerce",
        newTab: false,
      },
      {
        id: 44,
        title: "Content Management Systems (CMS)",
        path: "/CMS",
        newTab: false,
      },
      {
        id: 45,
        title: "SEO-Optimized Websites",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Website Maintenance and Support",
        path: "/signin",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },

];
export default menuData;
