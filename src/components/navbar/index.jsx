import React from "react";
import Dropdown from "components/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { a } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import {
  RiLogoutBoxRFill,
  RiMoonFill,
  RiShieldUserFill,
  RiSunFill,
  RiUserVoiceFill,
} from "react-icons/ri";
import { IoMdNotificationsOutline, IoMdSettings } from "react-icons/io";
import avatar from "assets/img/avatars/avatar4.png";
import { FaBookOpen } from "react-icons/fa";
import useColorScheme from "hooks/useColorScheme";
import Cookies from "universal-cookie";

const Navbar = (props) => {


  const { onOpenSidenav, brandText } = props;
  // const [darkMode, setDarkMode] = React.useState(false);
  const { darkMode, setDarkMode } = useColorScheme();

  const handlelogOut = () => {

    const cookies = new Cookies()
    localStorage.removeItem("kws");
    cookies.remove('jwtoken', { path: '/',domain:"localhost" });
  };

  return (
    <nav className="sticky top-[0%] z-40 flex flex-row flex-wrap items-center justify-between rounded-xl  bg-[#fdfcfc] p-2 dark:bg-[#181818]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-custom-primaryColor hover:underline dark:text-white dark:hover:text-white"
            href=" "
          >
           Trilos Canteen
           
          </a>
          <a
            className="text-sm font-normal capitalize text-custom-primaryColor hover:underline dark:text-white dark:hover:text-white"
            to="#"
          >
            {brandText}
          </a>
        </div>
        <p className="shrink text-[33px] capitalize text-custom-primaryColor  dark:text-white">
          <a
            to="#"
            className="font-bold capitalize text-custom-primaryColor dark:text-white dark:hover:text-white"
          >
            {brandText}
          </a>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-[#181818] dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:!bg-[#181818] dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="w-4 h-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:!bg-[#181818] dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>
        <span
          className="flex text-xl text-gray-600 cursor-pointer dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="w-5 h-5" />
        </span>
        {/* start Notification */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="w-4 h-4 text-gray-600 dark:text-white" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-[#111111] dark:text-white dark:shadow-none sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700 dark:text-white">
                  Notification
                </p>
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  Mark all read
                </p>
              </div>

              <button className="flex items-center w-full">
                <div className="flex h-full w-[60px] items-center justify-center rounded-xl bg-gradient-to-b from-custom-secondaryColor to-custom-primaryColor  py-4 text-[1rem] text-white">
                  <FaBookOpen />
                </div>
                <div className="flex flex-col justify-center w-full h-full px-1 ml-2 text-sm rounded-lg">
                  <p className="mb-1 text-[1rem] font-bold text-left text-gray-900 dark:text-white">
                    Exam Update: Mock Test on 1st July 2023
                  </p>
                  <p className="text-xs text-left text-gray-900 font-base dark:text-white">
                    Exam Update: Your Scheduled Consulation is Today
                  </p>
                </div>
              </button>

              <button className="flex items-center w-full">
                <div className="flex h-full w-[60px] items-center justify-center rounded-xl bg-gradient-to-b from-custom-secondaryColor to-custom-primaryColor  py-4 text-[1rem] text-white">
                  <RiUserVoiceFill />
                </div>
                <div className="flex flex-col justify-center w-full h-full px-1 ml-2 text-sm rounded-lg">
                  <p className="mb-1 text-[1rem] font-bold text-left text-gray-900 dark:text-white">
                    Exam Update: Mock Test on 1st July 2023
                  </p>
                  <p className="text-xs text-left text-gray-900 font-base dark:text-white">
                    Exam Update: Your Scheduled Consulation is Today
                  </p>
                </div>
              </button>
            </div>
          }
          classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
        />
        <Dropdown
          button={
            <img
              className="w-10 h-10 rounded-full"
              src={avatar}
              alt="Elon Musk"
            />
          }
          children={
            <div className="flex h-min p-2 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-[#1a1a1a] dark:text-white dark:shadow-none">
              <div className="mt-3 ml-4">
                <div className="flex text-[3rem] items-center gap-2">
                  <p className="text-sm font-bold text-custom-primaryColor dark:text-white">
                     Anish Joshi
                  </p>{" "}
                </div>
              </div>
              <div className="w-full h-px mt-3 bg-gray-200 dark:bg-white/20 " />

              <div className="flex flex-col mt-3 ml-4">
                <div
                  className="text-gray-600 cursor-pointer"
                  onClick={() => {
                    if (darkMode) {
                      document.body.classList.remove("dark");
                      setDarkMode(false);
                    } else {
                      document.body.classList.add("dark");
                      setDarkMode(true);
                    }
                  }}
                >
                  {darkMode ? (
                    <div className="flex items-center justify-start my-3">
                      {" "}
                      <RiSunFill
                        size={20}
                        className="mr-1 text-custom-secondaryColor dark:text-white"
                      />
                      <h1 className="text-sm text-gray-800 dark:text-white hover:dark:text-white">
                        Light Mode
                      </h1>
                    </div>
                  ) : (
                    <div className="flex items-center justify-start my-3">
                      <RiMoonFill
                        size={20}
                        className="mr-1 text-custom-secondaryColor dark:text-white"
                      />
                      <h1 className="text-sm text-gray-800 dark:text-white hover:dark:text-white">
                        Dark Mode
                      </h1>
                    </div>
                  )}
                </div>
                <a
                  //  to={PATH.PROFILE}
                  className="flex items-center justify-start text-sm text-gray-800 dark:text-white hover:dark:text-white"
                >
                  <RiShieldUserFill
                    className="mr-1 text-custom-secondaryColor"
                    size={20}
                  />
                  Profile Settings
                </a>
                <a
                  href=" "
                  className="flex items-center justify-start mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                >
                  <IoMdSettings
                    className="mr-1 text-custom-secondaryColor"
                    size={20}
                  ></IoMdSettings>
                  Account Settings
                </a>
                <a
                  onClick={() => handlelogOut()}
                  className="flex items-center justify-start mt-3 text-sm font-medium text-red-500 cursor-pointer hover:text-red-500"
                >
                  <RiLogoutBoxRFill className="mr-1" size={20} /> Log Out
                </a>
              </div>
            </div>
          }
          classNames={"py-2 top-8 -left-[180px] w-max"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
