import WhyChooseUsItem from "./item";
import { WHY_CHOOSE_US_ITEMS } from "./constants";
import SectionHead from "components/section-head";

export default function WhyChooseUs() {
  return (
    <div className="bg-warm dark:bg-transparent  lg:py-32">
      <div className="container mx-auto max-w-[1500px] px-4">
        <SectionHead
          className="mt-20 mb-20 md:mb-32 md:mt-0"
          title={
            <h1 className="text-4xl md:text-5xl ">
           Why Choose <span className="text-primary-500 dark:text-primary_light">Us</span>
            </h1>
          }
          description={<h3 className="text-sm md:text-md">We offer several passwordless login options so you can tailor your authentication flow and the types of devices your users have access to</h3>}
        />

        {WHY_CHOOSE_US_ITEMS.map((item, index) => (
          <WhyChooseUsItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
