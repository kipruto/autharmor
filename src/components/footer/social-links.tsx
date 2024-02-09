import { SOCIAL_LINKS } from "./constants";

export default function SocialLinks() {
  return (
    <div className="flex flex-col md:max-w-[275px] mt-12 md:mt-0 px-4 md:px-0">
      <p className="text-sm md:text-base text-gray-100 text-center lg:text-left">
      Frictionless. API Driven. Developer First.A suite of Authentication and Authorization tools to enhance security and accelerate your business.
      </p>

      <div className="flex flex-row mt-4 md:mt-12 justify-center lg:justify-start">
        {SOCIAL_LINKS.map(({ path, icon }) => (
          <a
            key={path}
            href={path}
            className=" font-regular text-gray-300 text-small hover:text-gray-100 flex mb-2 h-[40px] w-[40px] bg-primary-500 dark:bg-primary_light rounded-full items-center justify-center mr-4"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
