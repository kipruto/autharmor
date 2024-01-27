import { FOOTER_LINKS } from "./constants";

export default function FooterLinks() {
  return (
    <div className="flex flex-row">
      {FOOTER_LINKS.map(({ title, links }) => (
        <div key={title} className="flex flex-col grow px-4 lg:px-12">
          <p className="font-poppins font-semibold text-gray-100 mb-4">
            {title}
          </p>

          {links.map(({ path, title }) => (
            <a
              key={title}
              href={path}
              className="font-poppins font-regular text-gray-300 text-small hover:text-gray-100 block mb-2"
            >
              {title}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
