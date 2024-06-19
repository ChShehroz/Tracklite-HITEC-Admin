import logo from "../../assets/Images/logo_uKE_icon.ico";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faCircle,
  faGraduationCap,
  faFaceFrown,
  faClipboardQuestion,
  faBinoculars,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../../assets/Style/index.css";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
}

const DropdownItem = ({ icon, text }: { icon: any; text: string }) => (
  <li className="w-full">
    <a className="hover:cursor-pointer flex gap-5 text-sm py-1.5 ml-5.5 pl-1 my-0 mr-4 items-center bg-transparent whitespace-nowrap pr-4 font-normal text-slate-800/50 shadow-none transition-colors">
      <FontAwesomeIcon className="h-1.5 w-1.5" icon={icon} />
      <span>{text}</span>
    </a>
  </li>
);

const SideBar = ({ isOpen }: SidebarProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdown((prevDropdown) =>
      prevDropdown === dropdownId ? null : dropdownId
    );
  };
  return (
    <aside
      className={`" inset-y-0 psOver bg-[#e5e9ed] mt-4 mr-0 mb-4 ml-4 bg-transparent rounded-2xl " ${
        isOpen ? "fixed transition-all " : "fixed transition-all "
      }`}
    >
      <div
        className={` ${
          isOpen
            ? "flex items-center justify-center h-20 px-5 py-6"
            : "h-20 px-5 py-6"
        }`}
      >
        <a className="flex items-center">
          <img className="max-h-8" src={logo} alt="main-logo" />
          <span
            className={` ${
              isOpen
                ? "hidden"
                : "text-[#344767] mb-1 leading-6 text-sm font-semibold ml-2"
            }`}
          >
            TrackLite HITEC Admin
          </span>
        </a>
      </div>
      <hr
        className={`border-t my-4 h-px bg-transparent bg-gradient-to-r from-transparent via-black/25 to-transparent  ${
          isOpen ? "w-20" : "w-60"
        }`}
      />
      <div className="items-center block w-full h-auto grow basis-full">
        <ul className="flex flex-col pl-0 mb-0 list-none">
          <li className={`mt-0.5 ${isOpen ? "w-[82px]" : "w-full "}`}>
            <Link to={"/Dashboard"}>
              <a
                className={`"group hover:bg-neutral-300 hover:ring-neutral-300 hover:cursor-pointer 
              ${
                isOpen
                  ? "flex items-center justify-center whitespace-nowrap bg-white rounded-lg mx-3 my-0 py-2.5"
                  : "group flex items-center whitespace-nowrap bg-white rounded-lg px-4 py-2.5 mx-3 my-0"
              }
              "`}
                id="dashboard"
              >
                <div
                  className={`group w-8 h-8 flex bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg justify-center items-center boxShadow ${
                    isOpen ? "mr-0" : "mr-2 "
                  }`}
                >
                  <FontAwesomeIcon
                    className="text-white h-3 w-3"
                    icon={faStore}
                  />
                </div>

                <span
                  className={` ${
                    isOpen
                      ? "hidden"
                      : "ml-1 text-sm text-[#344767] font-semibold leading-6 group-hover:text-purple-600"
                  }`}
                >
                  Dashboards
                </span>
              </a>{" "}
            </Link>
          </li>
          <li className="mt-4 w-full">
            <h6 className="pl-6 mb-2 font-bold leading-tight opacity-60 uppercase text-xs">
              Issues
            </h6>
          </li>
          <Link to={"/degree"}>
            <li className={`mt-0.5 ${isOpen ? "w-[72px]" : "w-56"}`}>
              <button
                type="button"
                className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-2.5 my-0"
              >
                <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                  <FontAwesomeIcon className="h-3 w-3" icon={faGraduationCap} />
                </div>

                <span
                  className={`${
                    isOpen
                      ? "hidden"
                      : "text-sm text-[#67748e] font-normal leading-6"
                  }`}
                >
                  Degree Clearance
                </span>
              </button>
            </li>
          </Link>
          <Link to={"/Complaints"}>
            <li className={`mt-0.5 ${isOpen ? "w-[72px]" : "w-56"}`}>
              <button
                id="doubleDropdownButton"
                data-dropdown-toggle="dropdown"
                type="button"
                className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-2.5 my-0"
                onClick={() => toggleDropdown("dropdown2")}
              >
                <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                  <FontAwesomeIcon className="h-3 w-3" icon={faFaceFrown} />
                </div>

                <span
                  className={`${
                    isOpen
                      ? "hidden"
                      : "text-sm text-[#67748e] font-normal leading-6"
                  }`}
                >
                  Complaints
                </span>
              </button>
            </li>
          </Link>
          <Link to={"/Lost-Found-Report"}>
            <li className={`mt-0.5 ${isOpen ? "w-[72px]" : "w-56"}`}>
              <button
                type="button"
                className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-2.5 my-0"
                onClick={() => toggleDropdown("dropdown3")}
              >
                <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                  <FontAwesomeIcon className="h-3 w-3" icon={faBinoculars} />
                </div>

                <span
                  className={`${
                    isOpen
                      ? "hidden"
                      : "text-sm text-[#67748e] font-normal leading-6"
                  }`}
                >
                  Lost and Found
                </span>
              </button>
            </li>
          </Link>
          <Link to={"/Exam-Quries"}>
            <li className={`mt-0.5 ${isOpen ? "w-[72px]" : "w-56"}`}>
              <button
                type="button"
                className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-2.5 my-0"
              >
                <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                  <FontAwesomeIcon
                    className="h-3 w-3"
                    icon={faClipboardQuestion}
                  />
                </div>

                <span
                  className={`${
                    isOpen
                      ? "hidden"
                      : "text-sm text-[#67748e] font-normal leading-6"
                  }`}
                >
                  Exam Queries
                </span>
              </button>
            </li>
          </Link>
          <hr
            className={`border-t my-4 h-px bg-transparent bg-gradient-to-r from-transparent via-black/25 to-transparent  ${
              isOpen ? "w-20" : "w-60"
            }`}
          />
          <li className="mt-0 w-full">
            <h6 className="pl-2 mb-2 font-bold leading-tight opacity-60 uppercase text-xs">
              Accounts
            </h6>
          </li>
          <li className={`mt-0.5 ${isOpen ? "w-[72px]" : "w-56"}`}>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-2.5 my-0"
              onClick={() => toggleDropdown("dropdown5")}
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon className="h-3 w-3" icon={faUser} />
              </div>

              <span
                className={`${
                  isOpen
                    ? "hidden"
                    : "text-sm text-[#67748e] font-normal leading-6"
                }`}
              >
                User Managemant
              </span>
              <svg
                className={`w-2 h-2 ml-auto transition-all ${
                  openDropdown === "dropdown5" ? "rotate-180" : ""
                } ${isOpen ? "hidden" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              className={`h-auto overflow-hidden transition-all duration-200 ease-in-out ${
                openDropdown === "dropdown5" ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              {isOpen === false ? (
                <ul className="flex flex-col flex-wrap pl-4 mb-0 ml-6 list-none transition-all duration-200 ease-in-out">
                  <DropdownItem icon={faCircle} text="Getting Started" />
                  <DropdownItem icon={faCircle} text="Foundation" />
                </ul>
              ) : (
                <ul className="flex flex-col flex-wrap pl-2.5 mb-0 ml-6 list-none transition-all duration-200 ease-in-out">
                  <DropdownItem icon="" text="G" />
                  <DropdownItem icon="" text="F" />
                </ul>
              )}
            </div>
          </li>

          <li className={`mt-0.5 ${isOpen ? "w-[72px]" : "w-56"}`}>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="dropdown"
              type="button"
              className="flex items-center w-full whitespace-nowrap px-4 py-2.5 mx-2.5 my-0"
            >
              <div className="w-8 h-8 flex bg-white rounded-lg justify-center items-center mr-2 shadow-xl">
                <FontAwesomeIcon
                  className="h-3 w-3"
                  icon={faRightFromBracket}
                />
              </div>

              <span
                className={`${
                  isOpen
                    ? "hidden"
                    : "text-sm text-[#f94e4e] font-normal leading-6"
                }`}
              >
                Log Out
              </span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default SideBar;
