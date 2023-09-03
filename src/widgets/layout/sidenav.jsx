import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
  Card
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";

export function Sidenav({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;

  const toggleSidebar = (open) => {
    setOpenSidenav(dispatch, open);
  };


  const sidenavTypes = {
    dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",
  };

  return (
    <Card
      className={`sidebar ${openSidenav ? 'w-56 md:flex' : 'w-28'} sm:xs:hidden`}
      // onMouseEnter={() => toggleSidebar(true)}
    >
      <div className="flex justify-center mb-2">
        <Link to="/" className="flex justify-center items-center gap-4 py-3 px-2">
          <img height={50} src={'/img/logo-white.svg'} alt="logo" />
        </Link>
      </div>

      <div className="mt-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col justify-center gap-1">
            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                            ? "white"
                            : "blue-gray"
                      }
                      className={`flex ${!openSidenav && 'justify-center'} gap-4 px-2 capitalize`}
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className={`${openSidenav ? "flex" : "hidden"} font-medium capitalize`}
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Card>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo-white.svg",
  brandName: "pintro",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
