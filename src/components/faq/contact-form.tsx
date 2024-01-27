"use client";


export default function ContactForm() {
  return (
    <>
      <p className="font-sans font-semibold text-2xl sm:mt-16 lg:mt-0">
        Have more questions? Ask
      </p>

      <div className="py-4">
        <input
          className=" w-full border dark:border-slate-500 rounded bg-transparent px-4 py-6 text-gray-400 outline-none focus:outline-none font-sans font-regular mb-6"
          type="search"
          name="search"
          placeholder="Name"
        />

        <input
          className=" w-full border dark:border-slate-500 rounded bg-transparent px-4 py-6 text-gray-400 outline-none focus:outline-none font-sans font-regular mb-6"
          type="search"
          name="search"
          placeholder="Email"
        />

        <textarea
          className=" w-full border dark:border-slate-500 rounded bg-transparent px-4 py-6 text-gray-400 outline-none focus:outline-none font-sans font-regular mb-6"
          name="message"
          placeholder="Your Question"
          rows={4}
        />

        <div className="flex items-center">
          <button className="px-12 py-4 bg-primary-500 dark:bg-primary_light hover:bg-primary-600 font-bold font-sans rounded-md text-gray-100">
            Submit
          </button>

          <p className="ml-6 font-inter font-italic font-regular text-gray-600">
            * We typically respond within 1 hour
          </p>
        </div>
      </div>
    </>
  );
}
