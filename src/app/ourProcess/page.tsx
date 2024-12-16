import Image from "next/image";
// import SectionTitle from "../../components/Common/SectionTitle";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { MagicCard } from "@/components/MagicCard"; // Adjust the import path as needed

type CardProps = {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
};

const Card = ({ imageSrc, altText, title, description }: CardProps) => {
  return (
    <MagicCard className="w-full h-full" gradientSize={200} gradientColor="#4563E2" gradientOpacity={0.5}>
      <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-lg dark:bg-gray-900 dark:border-gray-700">
          <Image
            className="rounded-t-lg"
            src={imageSrc}
            alt={altText}
            width={300}
            height={200}
            layout="responsive"
          />

        <div className="p-5">

            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {title}
            </h5>
  
          <p className="mb-3 font-normal text-gray-400">{description}</p>
        </div>
      </div>
    </MagicCard>
  );
};

const OurProcessSection = () => {
  const cardsData = [
    {
      imageSrc: "/images/ourProcess/consult_gathering.png",
      altText: "Consult and Gathering Image",
      title: "Consult and Gathering",
      description:
        "We collaborate closely with you to understand your needs and gather all essential information to begin the project.",
    },
    {
      imageSrc: "/images/ourProcess/design_phase.png",
      altText: "Design and Prototyping Image",
      title: "Design Phase",
      description:
        "Creating visually appealing and user-friendly designs tailored to your business objectives and audience.",
    },
    {
      imageSrc: "/images/ourProcess/development_phase.png",
      altText: "Development Image",
      title: "Development Phase",
      description:
        "Turning designs into a fully functional website using modern technologies and best practices.",
    },
    {
      imageSrc: "/images/ourProcess/testing.png",
      altText: "Launch Image",
      title: "Testing & Launch",
      description:
        "Delivering the final product with thorough testing, ensuring everything works seamlessly before going live.",
    },
    {
      imageSrc: "/images/ourProcess/support_maintenance.png",
      altText: "Launch Image",
      title: "Support & Maintenance",
      description:
        "Delivering the final product with thorough testing, ensuring everything works seamlessly before going live.",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="Our Process"
        description="From understanding your unique needs to delivering a tailored solution, our step-by-step approach ensures your website is designed to not only meet your business goals but also provide an exceptional user experience."
      />
      <section className="container mx-auto px-4 py-8 mb-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default OurProcessSection;
