import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export function Footer({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-desk">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-6 ml-36 md:justify-between">
        <div><img src="/img/core-logo.svg" /></div>
        <div><Typography className="text-sm font-medium">@Jakarta 2021. All Right Reserved</Typography></div>
        <div><img src="/img/pintro.svg" /></div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  brandName: "Creative Tim",
  brandLink: "https://www.creative-tim.com",
};

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
