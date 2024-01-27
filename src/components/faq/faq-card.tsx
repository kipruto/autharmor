import ChevronDown from "svg-icons/chevron-down";
import { FaqItem } from "./constants";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import useDarkMode from "hooks/useDarkMode";

const buttonVariants = {
  active: { transform: "rotate(180deg)" },
  inactive: { transform: "rotate(0deg)" },
};

const containerVariants = (isDarkMode: boolean) => {
  return {
    active: {
      borderColor: "#057F81",
      backgroundColor: isDarkMode ? "#09C0B8" : "#EDFBFB",
    },
    inactive: {
      borderColor: isDarkMode ? "#1B2E2F" : "#DADADA",
      backgroundColor: isDarkMode ? "#1B2E2F" : "#ffffff",
    },
  };
};

export default function FaqCard(
  props: FaqItem & {
    isActive: boolean;
    toggle: VoidFunction;
  }
) {
  const animateProps = useMemo(
    () => ({
      animate: props.isActive ? "active" : "inactive",
      initial: "inactive",
    }),
    [props.isActive]
  );

  const { isDarkMode } = useDarkMode();

  return (
    <motion.div
      className="py-6 px-8 mb-4 border dark:border-slate-500 rounded-md"
      variants={containerVariants(isDarkMode)}
      {...animateProps}
    >
      <div className="flex">
        <p className="font-medium font-sans">{props.title}</p>
        <div className="flex-1" />
        <motion.button
          onClick={props.toggle}
          variants={buttonVariants}
          className="p-1"
          {...animateProps}
        >
          <ChevronDown height={24} width={24} />
        </motion.button>
      </div>
      <AnimatePresence>
        {props.isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <p className="font-sans font-regular text-small text-gray-600 dark:text-slate-300">
              {props.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
