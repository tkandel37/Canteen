import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

const data = [{ code: "1234", title: "Lorem Ipsum 1", category: "Category 1", type: "Type 1", visibility: "Public", status: "published", }, { code: "5678", title: "Lorem Ipsum 2", category: "Category 2", type: "Type 2", visibility: "Private", status: "draft", }, { code: "9101", title: "Lorem Ipsum 3", category: "Category 3", type: "Type 3", visibility: "Public", status: "published", },];

const ManageQuizzes = () => {
    const [code, setCode] = useState('');
    const [item, setItem] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [visibility, setVisibility] = useState('');
    const [status, setStatus] = useState('');

    const handleCode = (event) => {
        setCode(event.target.value);
      };
    
      const handleItem = (event) => {
        setItem(event.target.value);
      };
    
      const handleCategory = (event) => {
        setCategory(event.target.value);
      };
    
      const handleTitle = (event) => {
        setTitle(event.target.value);
      };
    
      const handleType = (event) => {
        setType(event.target.value);
      };
    
      const handleVisibility = (event) => {
        setVisibility(event.target.value);
      };
    
      const handleStatus = (event) => {
        setStatus(event.target.value);
      };

    function toggle(cd) {
        setCode(cd)
    }

    const filteredData = data.filter(
        (item) =>
          item.code.toLowerCase().includes(code.toLowerCase()) &&
          item.title.toLowerCase().includes(title.toLowerCase()) &&
          item.category.toLowerCase().includes(category.toLowerCase()) &&
          item.type.toLowerCase().includes(type.toLowerCase()) &&
          item.visibility.toLowerCase().includes(visibility.toLowerCase()) &&
          item.status.toLowerCase().includes(status.toLowerCase())
      );

    return (
        <div className="w-full overflow-x-auto">

            <div className="shadow overflow-hidden  sm:rounded-lg">
                <table className="-z-[1] min-w-full divide-y dark:divide-[#666565]">
                    <thead className="bg-gray-50 dark:bg-[#1e1e1e]">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Code
                                <div className="w-[100%] mt-2 ">
                                    <div className="relative w-full max-w-xs">
                                        <input
                                            type="search"
                                            className="w-full pl-10 dark:bg-[#111111] pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                            placeholder="Search..."
                                            value={code}
                                            onChange={handleCode}
                                        />
                                        <div className="absolute top-0 left-0 inline-flex items-center p-2">
                                            <AiOutlineSearch />
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Title
                                <div className="w-[100%] mt-2 ">
                                    <div className="relative w-full max-w-xs">
                                        <input
                                            type="search"
                                            className="w-full pl-10 dark:bg-[#111111] pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                            placeholder="Search..."
                                            value={title}
                                            onChange={handleTitle}
                                        />
                                        <div className="absolute top-0 left-0 inline-flex items-center p-2">
                                            <AiOutlineSearch />
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Category
                                <div className="w-[100%] mt-2 ">
                                    <div className="relative w-full max-w-xs">
                                        <input
                                            type="search"
                                            className="w-full pl-10 dark:bg-[#111111] pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                            placeholder="Search..."
                                            value={category}
                                            onChange={handleCategory}
                                        />
                                        <div className="absolute top-0 left-0 inline-flex items-center p-2">
                                            <AiOutlineSearch />
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Type
                                <div className="w-[100%] mt-2 ">
                                    <div className="relative w-full max-w-xs">
                                        <input
                                            type="search"
                                            className="w-full pl-10 dark:bg-[#111111] pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                            placeholder="Search..."
                                            value={type}
                                            onChange={handleType}
                                        />
                                        <div className="absolute top-0 left-0 inline-flex items-center p-2">
                                            <AiOutlineSearch />
                                        </div>
                                    </div>
                                </div>

                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Visibility
                                <div className="w-[100%] mt-2 ">
                                    <div className="relative w-full max-w-xs">
                                        <input
                                            type="search"
                                            className="w-full pl-10 dark:bg-[#111111] pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                            placeholder="Search..."
                                            value={visibility}
                                            onChange={handleVisibility}
                                        />
                                        <div className="absolute top-0 left-0 inline-flex items-center p-2">
                                            <AiOutlineSearch />
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Status
                                <div className="w-[100%] mt-2 ">
                                    <div className="relative w-full max-w-xs">
                                        <input
                                            type="search"
                                            className="w-full pl-10 dark:bg-[#111111] pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                            placeholder="Search..."
                                            value={status}
                                            onChange={handleStatus}
                                        />
                                        <div className="absolute top-0 left-0 inline-flex items-center p-2">
                                            <AiOutlineSearch />
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-[#1e1e1e] dark:text-gray-400 divide-y divide-gray-200 dark:divide-[#666565]">
                        {filteredData.map((item) => (
                            <tr key={item.code}>
                                <td className="px-6 py-4 whitespace-nowrap">{item.code}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.category}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.visibility}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={
                                            item.status === "draft"
                                                ? "bg-red-200 text-red-800 py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-wide"
                                                : "bg-green-200 text-green-800 py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-wide"
                                        }
                                    >
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <div className="relative inline-block text-left">
                                        <button onClick={() => toggle(item.code)} className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white dark:bg-[#1e1e1e] text-sm font-medium text-gray-700 hover:bg-gray-50 dark:hover:bg-[#111111] ">

                                            <FiMoreHorizontal  onClick={() => toggle(item.code)} className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                        

                                    </div>
                                </td>
                                {item.code===code ? <div className=" z-[99]  absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-[#1e1e1e] ring-1 ring-black ring-opacity-5">
                                            <div
                                                className="py-1"
                                                role="menu"
                                                aria-orientation="vertical"
                                                aria-labelledby="options-menu"
                                            >
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 dark:hover:text-white  hover:bg-gray-100 dark:hover:bg-[#111111] hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Analytics
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 dark:hover:text-white  hover:bg-gray-100 dark:hover:bg-[#111111] hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Schedule
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-gray-700 dark:hover:text-white  hover:bg-gray-100 dark:hover:bg-[#111111] hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    Edit
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 text-sm text-red-700 hover:bg-red-100 hover:text-red-900"
                                                    role="menuitem"
                                                >
                                                    Delete
                                                </a>
                                            </div>
                                        </div> : <></>}
                            </tr>
                            
                        ))}
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default ManageQuizzes;
