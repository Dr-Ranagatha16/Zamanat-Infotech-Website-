import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Content Management System: Empowering Digital Control and Flexibility
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image src="/images/blog/author-02.png" alt="author" fill />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">By <span>Musharof Chy</span></span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">📅</span> 12 Jan 2024
                      </p>
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">✉️</span> 50
                      </p>
                      <p className="flex items-center text-base font-medium text-body-color">
                        <span className="mr-3">👁️</span> 35
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    <a href="#0" className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                      Technology
                    </a>
                  </div>
                </div>

                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    A Content Management System (CMS) is a software application used to create, manage, and modify digital content on websites without requiring specialized technical knowledge. It provides users with a simple and intuitive interface to update and control website content, streamlining the process of web development and content delivery.
                  </p>

                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative flex overflow-x-scroll snap-x snap-mandatory no-scrollbar">
                      {['CMS1.jpg', 'CMS2.png', 'CMS3.jpg', 'CMS4.jpg'].map((image, index) => (
                        <div 
                          key={index} 
                          className="relative h-60 w-80 flex-shrink-0 snap-center transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                          <Image src={`/images/about/${image}`} alt={`image ${index + 1}`} fill className="object-cover object-center rounded-lg" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    CMS platforms enable businesses and individuals to efficiently manage web content with minimal effort. These systems typically offer tools for content creation, content editing, and publishing, all through an easy-to-use dashboard. Popular CMS platforms include WordPress, Joomla, and Drupal, each catering to different user needs and technical expertise levels.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    For organizations, CMS solutions play a pivotal role in content marketing strategies. They enable teams to collaborate in real time, automate publishing schedules, and ensure content consistency across platforms. Modern CMS platforms also support SEO features, customizable templates, and integration with third-party tools, enhancing their versatility.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Key Benefits of a Content Management System
                  </h3>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    The advantages of using a CMS are vast. It simplifies the content creation process, reduces the reliance on developers for minor updates, and offers scalability as your website grows. With features like user roles and permissions, organizations can maintain better control of their digital assets. For businesses aiming to keep pace with the fast-evolving digital landscape, a robust CMS is an indispensable tool.
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

export default BlogDetailsPage;
