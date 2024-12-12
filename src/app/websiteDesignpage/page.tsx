import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Website Design Page || Zamanat Pvt",
  description: "This is About Page for Zamanat Pvt. Ltd",
  // other metadata
};

const AboutPage = () => {
  const isVisible = true; // Assuming this should be a boolean

  return (
    <>
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            
            {/* Left Side - Text Content */}
            <div className="w-full px-4 lg:w-1/2">
              <div 
                className={`max-w-xl p-8 rounded-lg shadow-lg transform transition duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} hover:scale-105 hover:shadow-2xl`}
              >
                <h1 className="text-4xl font-extrabold text-blue-900 mb-4 hover:text-blue-600 transition-colors duration-300">
                  Custom Web Design
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                  We create personalized web designs that reflect your brand’s identity, offering an engaging and user-friendly experience. By understanding your business goals, we deliver designs that are both visually appealing and functional. Our custom websites are tailored to meet the specific needs of your audience, ensuring your site stands out in the competitive digital landscape.
                </p>
              </div>
            </div>

            {/* Right Side - Image Content */}
            <div className="w-full px-4 lg:w-1/2">
  <div className="relative aspect-w-16 aspect-h-9">
    <img 
      src="/images/about/ui-ux-representations-with-laptop.jpg" 
      alt="Custom Web Design" 
    />
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
