import CardMenu from "components/card/CardMenu";
import Dropdown from "components/dropdown";
import React, { useState, useEffect } from "react";
import { AiFillDelete, AiOutlineShop, AiOutlineUser } from "react-icons/ai";
import { BsEyeFill, BsThreeDots } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import Cookies from "universal-cookie";
import axios from "api/axiosApi";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ViewAllQuestions() {
  const [allQuestions, setAllQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const jwtCookie = new Cookies().get("jwt");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const { transparent } = true;
  const [open, setOpen] = React.useState(false);
  const [showRightBar, setShowRightBar] = React.useState(false);
  console.log(selectedQuestion);

  // const filteredData = data.filter(
  //   (item) =>
  //     item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     item.skill.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleActionClick = (question) => {
    setShowRightBar(true);
    setSelectedQuestion(null);
    setSelectedQuestion(question);
  };
  const handleActionEdit = (item) => {
    console.log(item.id);
    navigate(`${item.id}/edit`);
  };
  const regexForImage = /\/images\//;
  const containsImages =
    selectedQuestion && regexForImage.test(selectedQuestion?.answers[0]);

  const handleActionDelete = async (question) => {
    try {
      await axios.delete(`/questions/${question.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtCookie}`,
        },
      });
      toast.success("Question deleted successfully!", {
        position: "top-right",
        onClose: () => {
          window.location.reload();
        },
      });
    } catch (error) {
      toast.error("Sorry the question cannot be deleted!", {
        position: "top-right",
      });
    }
  };
  useEffect(() => {
    const getAllQuestions = async () => {
      const response = await axios.get("/questions", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtCookie}`,
        },
      });

      const datas = await response?.data.data.data;
      setAllQuestions(datas);
      // datas?.forEach((singleEl) => {
      //   setAllQuestions((prevArr) => {
      //     return [...prevArr, { value: singleEl.id, label: singleEl.name }];
      //   });
      // });
    };
    getAllQuestions();
  }, []);
  return (
    <div className="flex flex-col justify-start ">
      <ToastContainer />
      <div className="mt-5 w-min flex justify-between items-center p-2 dark:text-white border dark:border-[#1e1e1e] border-gray-300 bg-white dark:bg-[#111111] ">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 bg-[transparent]  focus:outline-none "
          value={searchTerm}
          onChange={handleSearch}
        />
        <FaSearch />
      </div>

      <div className="relative container overflow-y-auto text-[black] dark:text-white mx-auto bg-[white] shadow p-4 m-4 dark:bg-[#1e1e1e]">
        <div
          className={`text-[black] bg-custom-accentColor dark:bg-[#111111] transition ease-in-out delay-150 duration-300  border-[#1e1e1e] fixed top-0  right-0 z-[99]  h-[100vh] ${
            !showRightBar ? "hidden" : "xl:w-[30%] overflow-y-auto"
          }`}
        >
          <div className="absolute left-0 w-full p-4 text-[black] dark:text-white">
            <span>
              <RxCross1
                onClick={() => setShowRightBar(false)}
                className="ml-auto"
              />
            </span>
            <div className="py-10 space-y-5">
              {selectedQuestion?.image && (
                <div className="text-lg font-bold">
                  Question Image:
                  <div>
                    <img
                      src={`${selectedQuestion?.image}`}
                      alt="Question Image"
                    />
                  </div>
                </div>
              )}
              <h1 className="text-lg font-bold">
                Question :
                <MathJaxContext>
                  <MathJax>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `${selectedQuestion?.question}`,
                      }}
                    ></div>
                  </MathJax>
                </MathJaxContext>{" "}
              </h1>
              <div className="w-full space-y-2">
                {containsImages
                  ? selectedQuestion?.answers.map((singleAns, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-start w-full p-2 space-x-6 border border-gray-700 rounded-md"
                        >
                          <span className="font-bold rounded-full">
                            {index + 1}.
                          </span>
                          <div>
                            <img
                              src={singleAns}
                              alt=""
                              // className="w-[100%] h-[100%] object-cover"
                            />
                          </div>
                        </div>
                      );
                    })
                  : selectedQuestion?.answers.map((singleAns, index) => {
                      return (
                        <p
                          key={index}
                          className="flex items-center justify-start w-full p-2 space-x-6 border border-gray-700 rounded-md"
                        >
                          <span className="font-bold rounded-full">
                            {index + 1}.
                          </span>
                          <span>
                            <MathJaxContext>
                              <MathJax>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: `${singleAns}`,
                                  }}
                                ></div>
                              </MathJax>
                            </MathJaxContext>{" "}
                          </span>
                        </p>
                      );
                    })}
              </div>
              <div>
                <span className="font-bold">Correct Answer:</span>{" "}
                {containsImages ? (
                  <>
                    <div>
                      <img src={selectedQuestion?.correct_answers[0]} alt="" />
                    </div>
                  </>
                ) : (
                  <MathJaxContext>
                    <MathJax>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: `${selectedQuestion?.correct_answers[0]}`,
                        }}
                      ></div>
                    </MathJax>
                  </MathJaxContext>
                )}
              </div>
              <div>
                <span className="font-bold">Question Type:</span>{" "}
                {selectedQuestion?.type}
              </div>
              <div>
                <span className="font-bold">Difficulty Level:</span>{" "}
                {selectedQuestion?.difficulty}
              </div>
              <div>
                <span className="font-bold">Skill:</span>{" "}
                {selectedQuestion?.skill.name}
              </div>
              <div>
                <span className="font-bold">Topic:</span>{" "}
                {selectedQuestion?.topic.name}
              </div>
              <div>
                <span className="font-bold">Default Mark:</span>{" "}
                {selectedQuestion?.default_mark}
              </div>
              <div>
                <span className="font-bold">Default Time:</span>{" "}
                {selectedQuestion?.default_time}
              </div>
              <div>
                <span className="font-bold">Status:</span>{" "}
                {selectedQuestion?.status}
              </div>
            </div>
          </div>
        </div>
        <table className="w-full mt-5 ">
          <thead>
            <tr className="text-sm">
              <th className="px-4 py-2 text-left border-b border-gray-600 dark:text-gray-600">
                CODE
              </th>
              <th className="px-4 py-2 text-left border-b border-gray-600 dark:text-gray-600">
                QUESTION
              </th>
              <th className="px-4 py-2 text-left border-b border-gray-600 dark:text-gray-600">
                TYPE
              </th>
              <th className="px-4 py-2 text-left border-b border-gray-600 dark:text-gray-600">
                TOPIC
              </th>
              <th className="px-4 py-2 text-left border-b border-gray-600 dark:text-gray-600">
                SKILL
              </th>
              <th className="px-4 py-2 text-left border-b border-gray-600 dark:text-gray-600">
                STATUS
              </th>
              <th className="px-4 py-2 text-left border-b border-gray-600 dark:text-gray-600">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="text-sm font-bold">
            {allQuestions?.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-4 ">{item?.code}</td>
                <td className="px-4 py-4 ">{item?.question}</td>
                <td className="px-4 py-4 ">{item?.type}</td>
                <td className="px-4 py-4 ">{item?.topicId}</td>
                <td className="px-4 py-4 ">{item?.skill.name}</td>
                <td className="px-4 py-4 ">
                  <span
                    className={`${
                      item?.status === "active" ? "bg-green-300" : "bg-red-300"
                    } px-2 py-1 `}
                  >
                    {item?.status}
                  </span>
                </td>
                <td className="px-4 py-4 ">
                  <Dropdown
                    button={
                      <button
                        onClick={() => setOpen(!open)}
                        open={open}
                        className={`flex items-center text-xl hover:cursor-pointer z-9 ${
                          transparent
                            ? "bg-none text-white hover:bg-none active:bg-none"
                            : "bg-lightPrimary p-2  hover:bg-gray-100 dark:bg-[#181818] dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
                        } linear justify-center rounded-lg font-bold transition duration-200`}
                      >
                        <BsThreeDots className="w-6 h-6" />
                      </button>
                    }
                    animation={
                      "origin-top-right transition-all duration-300 ease-in-out"
                    }
                    classNames={`${
                      transparent ? "top-8" : "top-11"
                    } right-0 w-max`}
                    children={
                      <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-[#181818] dark:shadow-none">
                        <p className="flex items-center gap-2 text-white cursor-default ">
                          <span>
                            <IoSettings />
                          </span>
                          Actions
                        </p>
                        <button onClick={() => handleActionClick(item)}>
                          <p className="flex items-center gap-2 pt-1 mt-2 text-gray-600 cursor-pointer hover:text-black hover:font-medium">
                            <span>
                              <BsEyeFill />
                            </span>
                            Preview
                          </p>
                        </button>
                        <button
                          onClick={() => {
                            handleActionEdit(item);
                          }}
                        >
                          <p className="flex items-center gap-2 pt-1 mt-2 text-gray-600 cursor-pointer hover:text-black hover:font-medium">
                            <span>
                              <MdModeEditOutline />
                            </span>
                            Edit
                          </p>
                        </button>
                        <button
                          onClick={() => {
                            handleActionDelete(item);
                          }}
                        >
                          <p className="flex items-center gap-2 pt-1 mt-2 text-gray-600 cursor-pointer hover:text-black hover:font-medium">
                            <span>
                              <AiFillDelete />
                            </span>
                            Delete
                          </p>
                        </button>
                      </div>
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAllQuestions;
