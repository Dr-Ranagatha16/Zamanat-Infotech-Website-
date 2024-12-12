import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Website Design Page || Zamanat Pvt ",
  description: "This is About Page for Zamanat Pvt. Ltd",
  // other metadata
};

const AboutPage = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
          </div>
          <div className="w-full px-4 lg:w-1/2">

<h1>Custom Website</h1>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
