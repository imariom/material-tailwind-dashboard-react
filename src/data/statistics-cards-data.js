import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  // total registered
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Total Registadas",
    value: "53",
    footer: {
      color: "text-green-500",
      label: "Total",
    },
  },
  // total rented
  {
    color: "pink",
    icon: UserIcon,
    title: "Total Arrendadas",
    value: "2300",
    footer: {
      color: "text-green-500",
      label: "Arrendadas",
    },
  },
  // total not rented
  {
    color: "green",
    icon: UserPlusIcon,
    title: "Total não arendadas",
    value: "3462",
    footer: {
      color: "text-red-500",
      label: "Não arendadas",
    },
  },
  // some other
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Total não identificadas",
    value: "0",
    footer: {
      color: "text-green-500",
      label: "Não identificadas",
    },
  },
];

export default statisticsCardsData;
