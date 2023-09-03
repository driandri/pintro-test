import { Routes, Route, NavLink } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import {
  Card,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Button,
  Navbar,
} from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

export function Admin() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="wrapper">
      {/* header navigation */}
      <DashboardNavbar />
      <div className="absolute w-full overflow-auto overflow-x-hidden">
        <Sidenav
          routes={routes}
          brandImg={""}
        />
        <div className="py-24 px-8 lg:md:ml-32">
          <Routes>
            {routes.map(
              ({ layout, pages }) =>
                layout === "admin" &&
                pages.map(({ path, element }) => (
                  <Route exact path={path} element={element} />
                ))
            )}
          </Routes>
        </div>
        <Footer />
      </div>
      <Navbar color="white" className="md:hidden z-10 fixed w-screen bottom-0 px-4 py-0 flex items-center justify-center gap-4">
        {routes[0].pages.map((item, i) => {
          return (
            <NavLink to={`/admin${item.path}`}>
              {({ isActive }) => {
                return <Button variant="text" key={i} className={`flex flex-col gap-2 justify-center items-center px-2 ${isActive ? 'active-btn' : 'text-gray-500'}`}>
                  {item.icon}
                  <div>{item.name}</div>
                </Button>
              }}
            </NavLink>
          )
        })}
      </Navbar>
    </div>
  );
}

Admin.displayName = "/src/layout/dashboard.jsx";

export default Admin;
