import SubMenu from "components/submenus/subMenu";
import Switch from "components/switch";
import React, { useState } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import CkEditorQuestionAddingEditor from "./components/CkEditorQuestionAddingEditor";
import TopBar from "./components/TopBar";
import ViewAllQuestions from "./components/ViewAllQuestions";

function QuestionsView() {
  const [seletecPath, setSelectedPath] = useState("add");

  function getRoute(key) {
    switch (key) {
      case "add":
        return <CkEditorQuestionAddingEditor />;
      case "import":
        return <SubMenu />;
      case "show":
        return <SubMenu />;
      default:
        break;
    }
  }
  return (
    <>
      {/* <div className="flex justify-between items-center rounded-2xl dark:text-white bg-gray-200 dark:bg-[#1e1e1e] p-4">
        <div className="text-xl font-bold">Question Bank</div>
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedPath("add")}
            className={` ${
              seletecPath !== "add"
                ? "bg-custom-primaryColor hover:bg-custom-secondaryColor"
                : "bg-custom-secondaryColor"
            }  text-white font-bold py-2 px-4 rounded`}
          >
            Add Question
          </button>
          <button
            onClick={() => setSelectedPath("show")}
            className={` ${
              seletecPath !== "show"
                ? "bg-custom-primaryColor hover:bg-custom-secondaryColor"
                : "bg-custom-secondaryColor "
            }  text-white font-bold py-2 px-4 rounded`}
          >
            Show Questions
          </button>

          <button
            onClick={() => setSelectedPath("import")}
            className={` ${
              seletecPath !== "import"
                ? "bg-custom-primaryColor hover:bg-custom-secondaryColor"
                : "bg-custom-secondaryColor "
            }  text-white font-bold py-2 px-4 rounded`}
          >
            Import Questions
          </button>
        </div>
      </div> */}
      <TopBar />
      <ViewAllQuestions />

      {/* <CkEditorQuestionAddingEditor /> */}
      {/* <div className="container mx-auto">{getRoute(seletecPath)}</div> */}
    </>
  );
}

export default QuestionsView;
