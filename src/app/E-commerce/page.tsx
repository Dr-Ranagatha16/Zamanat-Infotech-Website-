import Image from "next/image";
import SectionTitle from "../../components/Common/SectionTitle";
import Breadcrumb from "@/components/Common/Breadcrumb";


const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color transition-colors duration-300 hover:text-primary">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary transition-all duration-300 hover:bg-primary hover:text-white">
      {checkIcon}
    </span>
    {text}
  </p>
);

const OurProcesSection = () => {
  return (
    <>    
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                  title="E-Commerce Solutions"
                  paragraph="We build secure, scalable e-commerce platforms that allow businesses to sell products seamlessly online. From payment gateway integration to inventory management, we ensure your online store is easy to manage and optimized for a smooth shopping experience. Our solutions are designed to grow with your business and enhance both customer satisfaction and sales."
                  mb="44px"
                />
                <div
                  className="mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap transition-transform duration-500 hover:scale-10">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="E-commerce Platform" />
                      <List text="Secure Online Shopping" />
                      <List text="Payment Gateway Integration" />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2 transition-transform duration-500 hover:scale-10">
                      <List text="Inventory Management" />
                      <List text="Scalable Solutions" />
                      <List text="Customer Satisfaction" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                  <Image
                    src="/images/hero/Ecom.jpg"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 transition-transform duration-500 hover:scale-105"
                  />
                  <Image
                    src="/images/hero/ecom2.jpg"
                    alt="about-image"
                    fill
                    className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/about/about-image-2.svg"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none transition-transform duration-500 hover:scale-105"
                />
                <Image
                  src="/images/hero/ecom2.jpg"
                  alt="about image"
                  fill
                  className="hidden drop-shadow-three dark:block dark:drop-shadow-none transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl transition-colors duration-300 hover:text-primary">
                    Bug free code
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed transition-colors duration-300 hover:text-primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl transition-colors duration-300 hover:text-primary">
                    Premier support
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed transition-colors duration-300 hover:text-primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl transition-colors duration-300 hover:text-primary">
                    Next.js
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed transition-colors duration-300 hover:text-primary">
                    Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt consectetur adipiscing elit setim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProcesSection;
