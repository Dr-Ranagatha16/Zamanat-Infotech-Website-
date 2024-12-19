import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Zone | Zamamanat Tech Solution",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  // Corrected image paths
  const imageUrls = {
    innovativeSolutions: "/images/hero/istockphoto-1344939844-612x612.jpg",
    expertTeam: "/images/hero/download.jpg",
    clientCentricApproach: "/images/hero/download.png",
    affordableAndScalable: "/images/hero/download (1).png", // Renamed to avoid space issues
    endToEndSupport: "/images/hero/download (2).png", // Renamed to avoid space issues
  };

  return (
    <>
      <Breadcrumb
        pageName="Our Edge"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <h1 className="text-center text-3xl font-bold">Our Edge Page</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices.
      </p>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 px-4 md:px-16">
        {/* Innovative Solutions Box */}
        <div className="bg-transparent border border-gray-200 p-6 rounded-lg shadow-lg">
          <img
            src={imageUrls.innovativeSolutions}
            alt="Innovative Solutions"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
        </div>

        {/* Expert Team Box */}
        <div className="bg-transparent border border-gray-200 p-6 rounded-lg shadow-lg">
          <img
            src={imageUrls.expertTeam}
            alt="Expert Team"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
          <p className="text-gray-700">Nunc venenatis, ante eu dictum vestibulum, libero quam pharetra leo.</p>
        </div>

        {/* Client-Centric Approach Box */}
        <div className="bg-transparent border border-gray-200 p-6 rounded-lg shadow-lg">
          <img
            src={imageUrls.clientCentricApproach}
            alt="Client-Centric Approach"
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Client-Centric Approach</h3>
          <p className="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-center gap-6">
          {/* Affordable and Scalable Box */}
          <div className="bg-transparent border border-gray-200 p-6 rounded-lg shadow-lg">
            <img
              src={imageUrls.affordableAndScalable}
              alt="Affordable and Scalable"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Affordable and Scalable</h3>
            <p className="text-gray-700">Aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.</p>
          </div>

          {/* End-to-End Support Box */}
          <div className="bg-transparent border border-gray-200 p-6 rounded-lg shadow-lg">
            <img
              src={imageUrls.endToEndSupport}
              alt="End-to-End Support"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">End-to-End Support</h3>
            <p className="text-gray-700">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
