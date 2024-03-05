import WhyChooseUsItem from "./item";
import { WHY_CHOOSE_TOP_ITEM, WHY_CHOOSE_MID_ITEM, WHY_CHOOSE_BTM_ITEM, WHY_CHOOSE_US_ITEMS } from "./constants";
import SectionHead from "components/section-head";
import { HeadIcon } from "./icon";
import { ItemContent } from "./content";

export default function WhyChooseUs() {
  return (
    <div className="bg-warm dark:bg-transparent  lg:py-32">
      <div className="container mx-auto max-w-[1500px] px-4">
        <SectionHead
          className="mt-20 mb-20 md:mt-0"
          title={
            <>
              Why Choose{" "}
              <span className="text-primary-500 dark:text-primary_light">
                Us
              </span>
            </>
          }
          description={
            <>
              We offer several passwordless login options so you can tailor your
              authentication flow and the types of devices your users have
              access to
            </>
          }
        />

        {/*  Top section*/}
        <div className=" border-t py-20 px-10 md:px-40">
          <div className="flex justify-center">
            <ItemContent center title={WHY_CHOOSE_TOP_ITEM.title}>
              {WHY_CHOOSE_TOP_ITEM.description}
            </ItemContent>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-24 mt-12 mb-12">
            {WHY_CHOOSE_TOP_ITEM.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <HeadIcon center icon={item.icon} />
<div className="mt-5"></div>
                <ItemContent center small title={item.title} >
                  {item.description}
                </ItemContent>
              </div>
            ))}
          </div>
        </div>

             {/*  Mid section*/}
             <div className=" border-t py-20 px-10 md:px-40 ">
          <div className="flex justify-center">
            <ItemContent center title={WHY_CHOOSE_MID_ITEM.title}>
              {WHY_CHOOSE_MID_ITEM.description}
            </ItemContent>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-24 mt-12 mb-12">
            {WHY_CHOOSE_MID_ITEM.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <HeadIcon center icon={item.icon} />
<div className="mt-5"></div>
                <ItemContent center small title={item.title} >
                  {item.description}
                </ItemContent>
              </div>
            ))}
          </div>
        </div>

          {/*  Mid section*/}
          <div className=" border-t py-20 px-10 md:px-40">
          <div className="flex justify-center">
            <ItemContent center title={WHY_CHOOSE_BTM_ITEM.title}>
              {WHY_CHOOSE_BTM_ITEM.title}
            </ItemContent>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-24 mt-12 mb-12">
            {WHY_CHOOSE_BTM_ITEM.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <HeadIcon center icon={item.icon} />
<div className="mt-5"></div>
<ItemContent center small title={item.title} >
                  {item.description}
                </ItemContent>
              </div>
            ))}
          </div>
        </div>


        {/*  */}

        {WHY_CHOOSE_US_ITEMS.map((item, index) => (
          <WhyChooseUsItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
