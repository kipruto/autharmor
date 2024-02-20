const SMALL_TEXT_CLASS = "text-2xl";
const DEFAULT_TEXT_CLASS = "text-xl lg:text-3xl";

export const ItemContent = (props: ItemContentProps) => {
  return (
    <div className="ml-4 font-sans">
      <p
        className={`font-semibold font-sans text-lg ${
          props.small ? SMALL_TEXT_CLASS : DEFAULT_TEXT_CLASS
        } ${props.center ? "text-center" : "text-center lg:text-left"}`}
      >
        {props.title}
      </p>
      <div
        className={`mt-2 text-sm text-gray-600 dark:text-gray-300 font-regular leading-snug ${
          props.center ? "text-center" : "text-left"
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

export type ItemContentProps = {
  title: string;
  children: React.ReactNode;
  small?: boolean;
  center?: boolean;
};
