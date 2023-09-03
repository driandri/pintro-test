import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables,  } from "@/pages/admin";
import Transaction from "./pages/admin/transaction";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "admin",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/dashboard",
        element: <Home />,
      },
      {
        icon: <ChartBarIcon {...icon} />,
        name: "Transaksi",
        path: "/recap-transaction",
        element: <Transaction />,
      },
    ],
  },
];

export default routes;
