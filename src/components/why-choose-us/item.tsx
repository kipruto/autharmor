import { WhyChooseUsItem } from "./constants";
import { ItemContent } from "./content";
import { HeadIcon } from "./icon";

export default function WhyChooseUsItem(props: WhyChooseUsItemProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start px-4 py-12 lg:p-24 border-slate-300 border-t">
      <HeadIcon icon={props.icon} />

      <ItemContent title={props.title}>{props.description}</ItemContent>
    </div>
  );
}

export type WhyChooseUsItemProps = WhyChooseUsItem;
