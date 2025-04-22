import { Link } from "@tanstack/react-router";
import React from "react";
import { navigationLinks } from "../../utils/content";
import BellIcon from "../Icons/BellIcon";
import CaretUp from "../Icons/CaretUp";
import Hamburger from "../Icons/Hamburger";
import LogoIcon from "../Icons/LogoIcon";
import SearchIcon from "../Icons/SearchIcon";
import DesktopDropdown from "./DesktopDropdown";

const Navigation: React.FC = () => {
  return (
    <div className="max-3xl:px-20 px-24 pt-8 max-2xl:px-14 max-xl:px-10 max-xl:pb-0 max-lg:px-6 max-lg:pt-6 max-md:pb-0 max-sm:px-4 max-sm:pt-4 md:block">
      <nav className="max-3xl:mb-10.5 m-auto mb-12 max-w-432 max-xl:mb-9 max-sm:mb-16">
        <div className="max-3xl:px-16 flex justify-between px-21.5 max-2xl:px-9 max-xl:px-4 max-lg:px-0">
          <Link to="/" className="flex items-center gap-x-2.5 max-sm:gap-x-2">
            <LogoIcon className="size-14 max-xl:size-14 max-lg:size-14" />
            <span className="text-3xl pt-5 font-semibold max-2xl:text-2xl max-xl:text-xl max-lg:text-lg">
              NayBe
            </span>
          </Link>
          <ul className="flex items-stretch gap-x-10 max-2xl:gap-x-8 max-xl:gap-x-6 max-lg:hidden">
            {navigationLinks.map((link) => (
              <li
                key={link.id}
                className="group relative flex cursor-pointer items-center gap-x-1.75 font-medium transition-all duration-200"
              >
                <Link
                  className="text-grey-600 group-hover:text-black max-2xl:text-[.9375rem] max-xl:text-[.875rem]"
                  to={link.href}
                >
                  {link.text}
                </Link>
                {link.dropdown && (
                  <span className="flex size-6 items-center justify-center">
                    <CaretUp className="fill-grey-600 size-3.5 rotate-180 transition-all duration-250 group-hover:rotate-360 group-hover:fill-black" />
                  </span>
                )}
                {link.dropdown && (
                  <DesktopDropdown links={link.dropdownLinks} />
                )}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-x-5 max-xl:gap-x-4 max-lg:hidden">
            <BellIcon className="fill-grey-600 cursor-pointer hover:fill-black" />
            <SearchIcon className="fill-grey-600 cursor-pointer hover:fill-black" />
            <button className="bg-primary-700 hover:bg-primary-800 cursor-pointer rounded-[0.625rem] px-8 py-3.5 text-lg font-medium text-white transition-all duration-200 max-xl:py-3 max-xl:text-sm max-xl:font-normal">
              Join Now
            </button>
          </div>

          <Hamburger />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
