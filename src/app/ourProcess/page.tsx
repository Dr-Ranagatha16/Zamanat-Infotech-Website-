import Image from "next/image";
import SectionTitle from "../../components/Common/SectionTitle";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);

const OurProcessSection = () => {
  return (
    <>
      <Breadcrumb
        pageName="Our Process"
        description="From understanding your unique needs to delivering a tailored solution, our step-by-step approach ensures your website is designed to not only meet your business goals but also provide an exceptional user experience. We collaborate with you at every stage, ensuring complete transparency and a seamless journey from concept to launch"
      />
      <section id="about" className="pt-2 md:pt-3 lg:pt-8">
        <Card className="py-4">
          <div className="flex flex-wrap gap-4">
            {/* First Row - 3 Items */}
            <CardBody className="flex-1 w-full md:w-1/3 overflow-visible py-2">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 p-6">
                <p className="text-lg text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti suscipit consequuntur velit asperiores dicta eveniet repellendus hic totam quae?
                </p>
              </div>
            </CardBody>
            <CardBody className="flex-1 w-full md:w-1/3 overflow-visible py-2">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 p-6">
                <p className="text-lg text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti suscipit consequuntur velit asperiores dicta eveniet repellendus hic totam quae?
                </p>
              </div>
            </CardBody>
            <CardBody className="flex-1 w-full md:w-1/3 overflow-visible py-2">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 p-6">
                <p className="text-lg text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti suscipit consequuntur velit asperiores dicta eveniet repellendus hic totam quae?
                </p>
              </div>
            </CardBody>

            {/* Second Row - 2 Items */}
            <CardBody className="flex-1 w-full md:w-1/2 overflow-visible py-2">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 p-6">
                <p className="text-lg text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti suscipit consequuntur velit asperiores dicta eveniet repellendus hic totam quae?
                </p>
              </div>
            </CardBody>
            <CardBody className="flex-1 w-full md:w-1/2 overflow-visible py-2">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-gray-50 p-6">
                <p className="text-lg text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti suscipit consequuntur velit asperiores dicta eveniet repellendus hic totam quae?
                </p>
              </div>
            </CardBody>
          </div>
        </Card>
      </section>
    </>
  );
};

export default OurProcessSection;
