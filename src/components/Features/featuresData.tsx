import { Feature } from "@/types/feature";
import { GoProjectSymlink } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { MdSettingsApplications } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { MdDataSaverOff } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <GoProjectSymlink style={{ width: '200px', height: '100px' }} />
    ),
    title: "Field projects for undergraduate students",
    paragraph:
      "We offer students real-world project experience, industry exposure, and expert mentorship to bridge academia and industry.",
  },
  {
    id: 1,
    icon: (
      <CgWebsite style={{ width: '200px', height: '100px' }} />
    ),
    title: "Website Development",
    paragraph:
      "We design responsive, user-friendly websites tailored to your needs, providing a strong digital presence for businesses across sectors.",
  },
  {
    id: 1,
    icon: (
      < MdSettingsApplications style={{ width: '200px', height: '100px' }} />
    ),
    title: "App Development for Business Solutions",
    paragraph:
      "We develop custom mobile and web apps to streamline operations, boost productivity, and optimize business processes.",
  },
  {
    id: 1,
    icon: (
      <FaBusinessTime  style={{ width: '200px', height: '100px' }} />
    ),
    title: "Digitization of Business Processes",
    paragraph:
      "We digitize business processes with automated workflows and scalable solutions, enabling efficiency and future-readiness.",
  },
  {
    id: 1,
    icon: (
      <MdDataSaverOff style={{ width: '200px', height: '100px' }} />
    ),
    title: "Data Processing Services",
    paragraph:
      "We transform raw data into actionable insights through cleaning, analysis, and reporting, enabling data-driven decisions.",
  },
  {
    id: 1,
    icon: (
      <AiOutlineSolution style={{ width: '200px', height: '100px' }} />
    ),
    title: "More Innovative Solutions",
    paragraph:
      "We solve unique business challenges with customized technology solutions, from digital marketing tools to CRM integrations, driving your success.",
  },
];
export default featuresData;
