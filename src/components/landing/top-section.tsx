export default function TopSection() {
  return (
    <div className="text-center">
      <div className="font-semibold dark:text-white">
        <p className="text-7xl">
          <span className="text-primary-500 dark:text-primary_light">
            Passwordless
          </span>{" "}
          is
        </p>
        <p className="text-7xl ">the future.</p>
      </div>

      <div className="mt-12 text-xl text-gray-700 dark:text-gray-300">
        <p className="font-regular ">
          Signing in without a password is faster, safer and easier.
        </p>
        <p className="font-regular ">
          With Auth Armor, give your users a glimpse into the future.
        </p>
      </div>

      <div className="flex items-center justify-center mt-16">
        <button className="bg-primary-900 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded py-3 mr-2 font-sans  h-[100%]">
          Get started for free
        </button>
        <button className="bg-primary-500 dark:bg-primary_light hover:bg-primary-600 text-white font-semibold py-2 px-4 rounded  py-3 ml-2 font-inter  h-[100%]">
          Book a demo
        </button>
      </div>
    </div>
  );
}
