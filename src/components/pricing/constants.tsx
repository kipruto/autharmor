export const HEADER_POPULAR_HEIGHT = 50;
export const HEADER_SECTION_HEIGHT = 150;
export const VIRTUAL_CONTAINER_HEIGHT =
  HEADER_SECTION_HEIGHT + HEADER_POPULAR_HEIGHT * 1.5;

export const PRICING_TABS = ["Workforce", "Customers"];

export const PRICING_OPTIONS = [
  {
    title: "FREE",
    price: "$0",
    tag: "/month",
    popular: false,
    descriptions: [
      "5000 included active users",
      "No  Additional Cost",
      "Amet id ea et nisi cillum",
    ],
  },
  {
    title: "Standard",
    price: "$0.02",
    tag: "/user/month",
    popular: true,
    descriptions: [
      "$0.02 for Additional user after 5000",
      "Deserunt sit cupidatat adipisicing",
      "Amet id ea et nisi cillum consectetur",
      "Excepteur nisi eiusmod proident",
      "Magna eu anim commodo qui nisif",
    ],
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    tag: null,
    popular: false,
    descriptions: [
      "Consequat ex proident",
      "Deserunt sit cupidatat",
      "Amet id ea et nisi cillum",
    ],
  },
] as const;

export type PricingOption = (typeof PRICING_OPTIONS)[number];
