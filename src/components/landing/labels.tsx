import productHuntLogo from "assets/images/product-hunt-logo-orange.png";
import Image from "next/image";

export default function Labels() {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-3 justify-center mt-10 py-20">
      <div className="py-1 px-4 border border-primary-700 dark:border-primary-50  rounded-3xl bg-primary-50 flex items-center">
        <div className="w-2.5 h-2.5 mr-2 bg-primary-400 rounded-md" />
        <p className="text-primary-900 text-sm">
          Version 4 is out. See what's new.
        </p>
      </div>

      <div className="w-5" />

      <div className="px-4 flex items-center">
        <Image src={productHuntLogo} alt="" className="h-6 w-auto" />

        <p className="text-sm font-medium ml-2 text-primary-900 dark:text-white">
          Featured on Product Hunt.
        </p>
      </div>
    </div>
  );
}
