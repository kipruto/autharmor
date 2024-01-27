import { SOCIAL_LINKS } from "./constants";

export default function SocialLinks() {
  return (
    <div className="flex flex-col md:max-w-[275px] mt-12 md:mt-0 px-4 md:px-0">
      <p className="font-poppins font-medium text-center lg:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia,molestiae quas
      </p>

      <div className="flex flex-row mt-4 md:mt-12 justify-center lg:justify-start">
        {SOCIAL_LINKS.map(({ path, icon }) => (
          <a
            key={path}
            href={path}
            className="font-poppins font-regular text-gray-300 text-small hover:text-gray-100 block mb-2 h-[40px] w-[40px] bg-primary-500 dark:bg-primary_light rounded-full flex items-center justify-center mr-4"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
