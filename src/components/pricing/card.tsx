import CheckIcon from "svg-icons/check";
import {
  HEADER_POPULAR_HEIGHT,
  HEADER_SECTION_HEIGHT,
  PricingOption,
} from "./constants";

export default function PricingCard({
  title,
  isActive,
  price,
  tag,
  popular,
  isDarkMode,
  descriptions,
}: PricingOption & {
  onClick: () => void;
  isActive: boolean;
  isDarkMode: boolean;
}) {
  return (
    <div
      className={`flex flex-col bg-gray-50  rounded-lg  self-center ${
        isActive
          ? "md:min-w-[450px] border-2 border-primary-500 dark:border-primary_light dark:bg-primary-500"
          : "md:min-w-[350px] drop-shadow-lg dark:bg-primary_dark"
      }`}
    >
      <div className="flex flex-col">
        {!!popular && (
          <div
            className="flex justify-center items-center bg-primary-500 dark:bg-primary_light px-4 text-gray-100"
            style={{ height: HEADER_POPULAR_HEIGHT }}
          >
            <p className="font-semibold text-center mr-2">
              Most Popular
            </p>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5565 20.6281C14.6097 20.8416 14.796 21 15.016 21C15.238 21 15.4253 20.8385 15.478 20.6229C15.644 19.9435 15.9672 19.2124 16.4583 18.4297C17.5538 16.7008 19.6941 15.0042 21.6264 14.4565C21.8421 14.3953 22 14.2039 22 13.9797C22 13.7574 21.8447 13.5668 21.6305 13.5074C20.7555 13.2647 19.8963 12.8414 19.0651 12.25C17.2643 10.9758 15.9068 9.11587 15.4796 7.37835C15.4263 7.1616 15.2376 7 15.0144 7C14.7946 7 14.6077 7.15693 14.5536 7.36997C14.3417 8.20487 13.9497 9.01738 13.3776 9.84375C12.1599 11.6103 10.2966 12.9412 8.36486 13.5024C8.1523 13.5641 8 13.7551 8 13.9765C8 14.2027 8.15899 14.3961 8.37698 14.4565C9.29403 14.7105 10.2218 15.1884 11.1354 15.8776C13.0859 17.3405 14.1833 19.129 14.5565 20.6281Z"
                fill="currentColor"
              />
              <path
                d="M6.74659 10.7875C6.77696 10.9095 6.88343 11 7.00916 11C7.136 11 7.24303 10.9077 7.27315 10.7845C7.36803 10.3963 7.55268 9.97854 7.83333 9.53125C8.45934 8.54334 9.68234 7.5738 10.7865 7.26084C10.9097 7.22591 11 7.11649 11 6.98841C11 6.86139 10.9112 6.75247 10.7888 6.71851C10.2889 6.5798 9.79788 6.33795 9.32292 6C8.29388 5.27191 7.51817 4.20907 7.27403 3.2162C7.24358 3.09234 7.13577 3 7.00822 3C6.88262 3 6.77581 3.08967 6.74492 3.21141C6.62383 3.68849 6.39983 4.15279 6.07292 4.625C5.37706 5.63448 4.31236 6.39498 3.20849 6.71564C3.08703 6.75092 3 6.86006 3 6.98655C3 7.11581 3.09085 7.22636 3.21542 7.26086C3.73945 7.40602 4.26958 7.67906 4.79167 8.07292C5.90622 8.90883 6.53334 9.93087 6.74659 10.7875Z"
                fill="currentColor"
              />
            </svg>
          </div>
        )}

        <div
          className="flex flex-col justify-center border-b dark:border-[#07746F54]"
          style={{ height: HEADER_SECTION_HEIGHT }}
        >
          <p
            className={`font-sans font-bold p-4 text-center  ${
              isActive ? "text-2xl" : "text-xl"
            }`}
          >
            {title}
          </p>

          {!!price && (
            <div className="flex justify-center items-center ">
              <p className="font-sans font-bold text-3xl lg:text-5xl text-gray-700 dark:text-gray-200">
                {price}
              </p>
              {!!tag && (
                <p className="text-gray-500 ml-2 dark:text-gray-200">{tag}</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* content */}
      <div
        className={`px-10  pb-10 ${
          isActive ? "bg-gray-200/[0.3]" : "bg-primary-100/[0.03]"
        } dark:bg-transparent`}
      >
        <div className="py-4 flex-1 ">
          {descriptions.map((description, index) => (
            <div key={index} className="flex items-center py-2">
              <CheckIcon className="text-primary-500 dark:text-gray-100" />
              <p className="text-gray-700 dark:text-gray-100 ml-2">
                {description}
              </p>
            </div>
          ))}
        </div>

        <button
          className={`py-3 px-6 rounded-md border border-primary-500 w-[100%] font-sans font-medium ${
            popular || isDarkMode
              ? "bg-primary-500 dark:bg-primary_light text-white"
              : "bg-primary-100/[0.03] text-primary-500 dark:text-primary_light"
          }`}
        >
          Get started
        </button>
      </div>
    </div>
  );
}
