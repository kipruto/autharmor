import { useMemo } from "react";

export default function SectionHead({
  className,
  title,
  description,
  preTitle
}: SectionHeadProps) {
  const classNames = useMemo(() => {
    const base = "flex flex-col items-center";
    return [base, className ?? ""].join(" ");
  }, [className]);

  return (
    <div className={classNames}>
      {!!preTitle && (
        <p className="text-center font-sans font-regular tracking-widest dark:text-gray-200 mb-4">
          {preTitle}
        </p>
      )}
      <p className="text-5xl font-sans font-semibold text-center dark:text-gray-200">
        {title}
      </p>

      {!!description && (
        <p className="mt-4 text-xl max-w-[900px] text-center mx-auto text-slate-700 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}

export type SectionHeadProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  preTitle?: React.ReactNode;
  applyMaxWidth?: boolean;
  className?: string;
};
