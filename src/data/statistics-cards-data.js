import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Tagihan Lunas Hari Ini",
    value: "Rp. 50 Jt",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "lebih minggu lalu",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Total Murid",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "green",
    icon: UserPlusIcon,
    title: "Murid Baru",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Transaksi",
    value: "Rp. 10 Jt",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "Lebih dari kemarin",
    },
  },
];

export default statisticsCardsData;
