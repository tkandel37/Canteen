import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "api/axiosApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";
import AddSkillModel from "./AddSkillModel";
import AddSectionModal from "./AddSectionModal";
import AddTagModal from "./AddTagModal";
import AddTopicModal from "./AddTopicModal";
import { CKEditor } from "ckeditor4-react";
import useColorScheme from "hooks/useColorScheme";

/**
 * All the difficulty options...
 */
const difficultyOptions = [
  { value: "very easy", label: "Very Easy" },
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "very High", label: "Very High" },
  { value: "expert", label: "Expert" },
];
const typeCodeOptions = [{ value: "MSA", label: "MSA" }];

// Editor Options
const editorConfig = {
  extraPlugins: "mathjax",
  mathJaxLib:
    "//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML",
  mathJaxClass: "equation",
  toolbar: [
    // { name: "styles", items: ["Format"] },
    // { name: "document", items: ["Source"] },
    { name: "basicstyles", items: ["Bold", "Italic", "Underline"] },
    // { name: "paragraph", items: ["BulletedList", "NumberedList"] },
    { name: "insert", items: ["Mathjax"] },
  ],
  removePlugins: "elementspath, iframe",
  height: 130,
  contentsCSS: "ckeditor/n1ed-ckeditor/skins/n1theme/editor.css",
  "font-size": 20,
  // contentsCSS: "ckeditor/moono-dark/editor.css",
};
const AnswerField = ({
  index,
  setSelectedOption,
  allOptions,
  setAllOptions,
  setOptionsCount,
  optionsCount,
}) => {
  return (
    <div>
      <p className="pb-4 font-bold"># Option {index}</p>
      <div>
        <label>
          <input
            type="file"
            className="dark:bg-[#1d1c1c] w-full mb-2 border-2 border-gray-200 rounded-md dark:border-gray-800 text-grey-500 file:mr-5 file:py-3 file:px-6 file:rounded-md file:border-0 file:font-medium file:bg-custom-primaryColor file:text-white hover:file:cursor-pointer"
            name="image"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setAllOptions((prevArr) => {
                const tempArray = [
                  {
                    id: index,
                    [`option`]: event.target.files[0],
                  },
                  ...prevArr,
                ];
                // return tempArray;
                const result1 = tempArray.reduce((finalArray, current) => {
                  let obj = finalArray.find((item) => item.id === current.id);
                  if (obj) {
                    return finalArray;
                  }
                  return finalArray.concat([current]);
                }, []);

                return result1;
              });
            }}
          />
        </label>
        <div className="">
          <CKEditor
            config={editorConfig}
            style={{ minHeight: "100px", fontSize: "20px" }}
            onChange={(event) => {
              const data = event.editor.getData();
              setAllOptions((prevArr) => {
                const tempArray = [
                  {
                    id: index,
                    [`option`]: data,
                  },
                  ...prevArr,
                ];
                // return tempArray;
                const result1 = tempArray.reduce((finalArray, current) => {
                  let obj = finalArray.find((item) => item.id === current.id);
                  if (obj) {
                    return finalArray;
                  }
                  return finalArray.concat([current]);
                }, []);

                return result1;
              });
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between px-5 py-2 space-x-2 bg-white border border-gray-300 rounded-md dark:border-gray-900 dark:bg-[#111111]">
        <div className="flex items-center justify-center space-x-2">
          <input
            type="radio"
            name="correct_opt"
            value={`option${index}`}
            onClick={(e) => {
              setSelectedOption(e.target.value);
            }}
          />
          <label htmlFor="correct_opt">Correct Option</label>
        </div>

        <div>
          <button
            className="px-4 py-2 font-bold text-white bg-red-500 rounded-md"
            onClick={() => {
              setOptionsCount((prevCount) => prevCount - 1);
            }}
          >
            Remove Option
          </button>
        </div>
      </div>
    </div>
  );
};

const CkEditorQuestionAddingEditor = () => {
  const [question, setQuestion] = useState("");
  const [optionsCount, setOptionsCount] = useState(4);
  const [selectedOption, setSelectedOption] = useState(null);
  const [allOptions, setAllOptions] = useState([]);
  const [skillsOptions, setSkillsOptions] = useState([]);
  const [sectionOptions, setSectionOptions] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [difficultyLevel, setDifficultyLevel] = useState(null);
  const [typecodeOption, setTypeCodeOption] = useState(null);
  const [allTopics, setAllTopics] = useState([]);
  const [topicOption, setTopicOption] = useState(null);
  const [allTags, setAllTags] = useState([]);
  const [tagsOptions, setTagsOptions] = useState([]);
  const [qnImage, setQnImage] = useState(null);
  // const jwtCookie = new Cookies().get("jwt");
  const jwtCookie = localStorage.getItem("kws");
  const { darkMode } = useColorScheme();

  const handleSave = async () => {
    const formData = new FormData();
    const tempOptions = {};
    allOptions.forEach((item) => {
      tempOptions[`option${item.id}`] = item[`option`];
    });
    let combinedDatas = {
      question: question,
      ...tempOptions,
      correct_answers: selectedOption && selectedOption,
      type_code: typecodeOption && typecodeOption,
      skillId: selectedSkill && selectedSkill,
      difficulty: difficultyLevel && difficultyLevel,
      topicId: topicOption && topicOption,
      tags: tagsOptions && tagsOptions.toString(),
      description: null,
      image: qnImage && qnImage,
    };
    for (let item in combinedDatas) {
      formData.append(item, combinedDatas[item]);
    }

    console.log(combinedDatas);
    try {
      const response = await axios.post("/questions", formData, {
        headers: {
          "Content-Type": "application/form-data",
          Authorization: `Bearer ${jwtCookie}`,
        },
      });
      if (response.status === 201) {
        toast.success("Question added successfully!", {
          position: "top-right",
        });
      } else {
        toast.error("Something is missing!", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("Sorry the question is not uploaded!", {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    const getAllSkills = async () => {
      const response = await axios.get("/subject/skill", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtCookie}`,
        },
      });

      const datas = await response?.data.data.data;
      setSkillsOptions([]);
      datas?.forEach((singleEl) => {
        setSkillsOptions((prevArr) => {
          return [...prevArr, { value: singleEl.id, label: singleEl.name }];
        });
      });
    };
    const getAllTags = async () => {
      const response = await axios.get("/subject/tag", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtCookie}`,
        },
      });

      const datas = await response?.data.data.data;
      setAllTags([]);
      datas?.forEach((singleEl) => {
        setAllTags((prevArr) => {
          return [...prevArr, { value: singleEl.id, label: singleEl.name }];
        });
      });
    };
    const getAllTopics = async () => {
      const response = await axios.get("/subject/topic", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtCookie}`,
        },
      });

      const datas = await response?.data.data.data;
      setAllTopics([]);
      datas?.forEach((singleEl) => {
        setAllTopics((prevArr) => {
          return [...prevArr, { value: singleEl.id, label: singleEl.name }];
        });
      });
    };
    const getAllSections = async () => {
      const response = await axios.get("/subject/section", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtCookie}`,
        },
      });

      const datas = await response?.data.data.data;
      setSectionOptions([]);
      datas?.forEach((singleEl) => {
        setSectionOptions((prevArr) => {
          return [...prevArr, { value: singleEl.id, label: singleEl.name }];
        });
      });
    };
    getAllSkills();
    getAllSections();
    getAllTags();
    getAllTopics();
  }, []);

  const selectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      color: darkMode && "#ffffff",
      backgroundColor: darkMode ? "#1d1c1c" : "#ffffff",
      minWidth: "180px",
      border: darkMode ? 0 : "1px solid #e4e7eb",
      boxShadow: "none",
      "&:hover": {},
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      color: darkMode && "#ffffff",
      backgroundColor: 0,
      "&:hover": {
        backgroundColor: "#31473A",
        color: "#ffffff",
      },
    }),
    menu: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: darkMode ? "#1d1c1c" : "#ffffff",
    }),
    singleValue: (baseStyles, state) => ({
      ...baseStyles,
      color: darkMode && "#ffffff",
    }),
  };
  return (
    <div className="mx-auto max-w-[1100px] p-10 dark:text-white">
      <AddSkillModel sectionOptions={sectionOptions} />
      <AddSectionModal />
      <AddTagModal />
      <AddTopicModal skillsOptions={skillsOptions} />
      <div className="space-y-10">
        <ToastContainer />
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-custom-primaryColor dark:text-gray-100">
            Upload your Qn!
          </h1>
          <p className="p-2 px-4 font-bold bg-red-300 rounded-md cursor-pointer dark:text-[#000000]">
            <a href="https://latexeditor.lagrida.com/" target="_blank">
              MathJax Exp Generator
            </a>
          </p>
        </div>
        {/* Question adding section */}
        <div className="space-y-4">
          <p className="font-bold">Add question!</p>
          {/* 
          <MathJaxContext>
            <MathJax>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${tex}`,
                }}
              ></div>
            </MathJax>
          </MathJaxContext> */}
          <div>
            <div>
              <label>
                <input
                  type="file"
                  className="dark:bg-[#1d1c1c] w-full mb-2 border-2 border-gray-200 rounded-md dark:border-gray-800 text-grey-500 file:mr-5 file:py-3 file:px-6 file:rounded-md file:border-0 file:font-medium file:bg-custom-primaryColor file:text-white hover:file:cursor-pointer"
                  name="image"
                  onChange={(event) => {
                    setQnImage(event.target.files[0]);
                  }}
                />
              </label>
            </div>
            <CKEditor
              config={editorConfig}
              initData=""
              onChange={(event) => {
                const qnData = event.editor.getData();
                setQuestion(qnData);
              }}
            />
          </div>
        </div>

        {/* Related to the answer adding section */}
        <div className="p-4 space-y-8 rounded-md bg-gray-50 dark:bg-[#000000]">
          {Array.from({ length: optionsCount }, (_, i) => (
            <AnswerField
              key={i}
              index={i + 1}
              setSelectedOption={setSelectedOption}
              allOptions={allOptions}
              setAllOptions={setAllOptions}
              setOptionsCount={setOptionsCount}
              optionsCount={optionsCount}
            />
          ))}

          <button
            className="w-full p-4 font-bold text-gray-100 rounded-md bg-custom-primaryColor"
            onClick={() => {
              setOptionsCount(optionsCount + 1);
            }}
          >
            + Add more options
          </button>
        </div>

        {/* Related to the others */}
        {skillsOptions && (
          <div>
            <p className="pb-4 font-bold text-[black] dark:text-white">Skill</p>
            <Select
              options={skillsOptions && skillsOptions}
              onChange={(singleValue) => {
                setSelectedSkill(singleValue.value);
              }}
              selectedCa={skillsOptions[0]}
              styles={selectStyles}
            ></Select>
          </div>
        )}
        {allTopics && (
          <div>
            <p className="pb-4 font-bold text-[black] dark:text-white">Topic</p>
            <Select
              options={allTopics}
              onChange={(singleValue) => {
                setTopicOption(singleValue.value);
              }}
              styles={selectStyles}
            ></Select>
          </div>
        )}
        <div>
          <p className="pb-4 font-bold text-[black] dark:text-white">
            Difficulty
          </p>
          <Select
            options={difficultyOptions && difficultyOptions}
            onChange={(singleValue) => {
              setDifficultyLevel(singleValue.value);
            }}
            styles={selectStyles}
          ></Select>
        </div>
        <div>
          <p className="pb-4 font-bold text-[black] dark:text-white">
            Typecode
          </p>
          <Select
            options={typeCodeOptions && typeCodeOptions}
            onChange={(singleValue) => {
              setTypeCodeOption(singleValue.value);
            }}
            styles={selectStyles}
          ></Select>
        </div>
        <div>
          <p className="pb-4 font-bold text-[black] dark:text-white">Tags</p>
          <Select
            isMulti
            options={allTags && allTags}
            onChange={(singleValue) => {
              setTagsOptions([]);
              singleValue.map((el) => {
                return setTagsOptions((prev) => [...prev, el.value]);
              });
            }}
            styles={selectStyles}
          ></Select>
        </div>

        <button
          onClick={handleSave}
          className="px-8 py-3 font-bold text-white rounded-md bg-custom-primaryColor"
        >
          Upload Question
        </button>
      </div>
    </div>
  );
};

export default CkEditorQuestionAddingEditor;
