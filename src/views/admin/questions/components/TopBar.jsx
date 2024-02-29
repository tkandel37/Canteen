import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

const TopBar = () => {
  const navigate = useNavigate();
  const paths = useLocation();
  return (
    <div className="flex justify-between items-center rounded-2xl dark:text-white bg-gray-200 dark:bg-[#1e1e1e] p-4">
      <div className="text-xl font-bold">Question</div>
      <div className="flex space-x-4">
        {/* <button
          onClick={() => navigate("/admin/questions/add")}
          className={` ${
            paths.pathname !== "/admin/questions/add"
              ? "bg-custom-primaryColor hover:bg-custom-secondaryColor"
              : "bg-custom-secondaryColor"
          }  text-white font-bold py-2 px-4 rounded`}
        >
          Add Question
        </button> */}
        <button
          onClick={() => navigate("/admin/questions/import")}
          className={` ${
            paths.pathname !== "/admin/questions/import"
              ? "bg-custom-primaryColor hover:bg-custom-secondaryColor"
              : "bg-custom-secondaryColor "
          }  text-white font-bold py-2 px-4 rounded`}
        >
          Import Questions
        </button>

        <Menu placement="bottom-end">
          <MenuHandler>
            <button className="px-4 py-2 font-bold text-white rounded shadow-none bg-custom-primaryColor hover:bg-custom-secondaryColor">
              New Question
            </button>
          </MenuHandler>
          <MenuList>
            <MenuItem className="py-2">
              <p
                onClick={() =>
                  navigate("/admin/questions/create/msa-questions")
                }
              >
                Multiple Choice Single Answer
              </p>
            </MenuItem>
            <MenuItem className="py-2">
              <p onClick={() => navigate("/admin/questions/add")}>
                Multiple Choice Multiple Answer
              </p>
            </MenuItem>
            <MenuItem className="py-2">
              <p onClick={() => navigate("/admin/questions/add")}>
                True or False
              </p>
            </MenuItem>
            <MenuItem className="py-2">
              <p onClick={() => navigate("/admin/questions/add")}>
                Short Answer
              </p>
            </MenuItem>
            <MenuItem className="py-2">
              <p onClick={() => navigate("/admin/questions/add")}>
                Match the following
              </p>
            </MenuItem>
            <MenuItem className="py-2">
              <p onClick={() => navigate("/admin/questions/add")}>
                Ordering/Sequence
              </p>
            </MenuItem>
            <MenuItem className="py-2">
              <p onClick={() => navigate("/admin/questions/add")}>
                Fill in the blanks
              </p>
            </MenuItem>
          </MenuList>
        </Menu>

        {/* <button
          onClick={() => navigate("/admin/questions/show")}
          className={` ${
            paths.pathname !== "/admin/questions/show"
              ? "bg-custom-primaryColor hover:bg-custom-secondaryColor"
              : "bg-custom-secondaryColor "
          }  text-white font-bold py-2 px-4 rounded`}
        >
          Show Questions
        </button> */}
      </div>
    </div>
  );
};

export default TopBar;
