import WhyChooseUsItem from "./item";
import { WHY_CHOOSE_US_ITEMS } from "./constants";
import SectionHead from "components/section-head";

export default function WhyChooseUs() {
  return (
    <div className="bg-warm dark:bg-transparent  lg:py-32">
      <div className="container mx-auto max-w-[1500px] px-4">
        <SectionHead
          className="mb-32"
          title={
            <>
              Why Choose <span className="text-primary-500 dark:text-primary_light">Us</span>
            </>
          }
          description="We offer several passwordless login options so you can tailor your authentication flow and the types of devices your users have access to"
        />

        {WHY_CHOOSE_US_ITEMS.map((item, index) => (
          <WhyChooseUsItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
