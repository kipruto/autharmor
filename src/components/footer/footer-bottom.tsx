import FooterLinks from "./footer-links";
import SocialLinks from "./social-links";

export default function FooterBottom({ height }: { height: number }) {
  const HEIGHT = height / 2;
  return (
    <>
      <div
        className="bg-secondary-500 "
        style={{
          height: HEIGHT,
          zIndex: -1,
          marginTop: -HEIGHT,
          width: "100%",
          position: "absolute",
        }}
      />
      <div className="bg-secondary-500 text-white py-12">
        <div className="container mx-auto max-w-[1200px] flex flex-col-reverse lg:flex-row justify-between bg-primary-500 rounded-lg bg-secondary-500 justify-center">
          <SocialLinks />
          <FooterLinks />
        </div>

        <div className="container mx-auto max-w-[1200px] flex pt-8 mt-8 px-4 font-poppins text-xs md:text-sm text-slate-300 border-t">
          <p className="">
            Copyright, AuthArmor 2022. All rights reserved.
          </p>
          <div className="grow"></div>

          <a  href="#terms">Terms & Conditions</a>
        </div>
      </div>
    </>
  );
}
