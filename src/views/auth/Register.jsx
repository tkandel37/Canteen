import React, { useRef, useState, useEffect } from "react";
import "./form.css";
import {
  FaCheck,
  FaInfoCircle,
  FaLock,
  FaTimes,
  FaUser,
} from "react-icons/fa";

import { SiMaildotru } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


function SignupForm() {


  const [loading, setLoading] = useState(false);

  const lastNameRef = useRef();
  const errRef = useRef();

  const [fName, setFName] = useState("");
  const [validFName, setValidFName] = useState(false);
  const [fNameFocus, setFNameFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [address, setAddress] = useState("");
  const [validAddress, setValidAddress] = useState(false);
  const [addressFocus, setAddressFoucs] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Male");
  const [selectedValueRole, setSelectedValueRole] = useState("Student");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChangeRole = (event) => {
    setSelectedValueRole(event.target.value);
  };
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
   
      lastNameRef.current.focus();

  }, []);

  useEffect(() => {
    setValidFName(USER_REGEX.test(fName));
  }, [fName]);

  useEffect(() => {
    setValidLastName(USER_REGEX.test(lastName));
  }, [lastName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    if (address.length > 4) {
      setValidAddress(true);
    } else {
      setValidAddress(false);
    }
  }, [address]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(validPwd ? pwd === matchPwd : false);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [fName, lastName, pwd, matchPwd]);

  function check() {
    const v1 = USER_REGEX.test(fName);
    const v2 = USER_REGEX.test(lastName);
    const v3 = EMAIL_REGEX.test(email);
    const v4 = PWD_REGEX.test(matchPwd);
    if (!v1 || !v2 || !v3 || !v4 ) {
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = async (e) => {
   
    setLoading(false);
  };
  return (
    <div className="flex items-center justify-center w-full px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-custom-primaryColor dark:text-white">
          Welcome, Let's Set You Up ...
        </h4>
        <p className="ml-1 text-base text-gray-600 mb-9">
          Enter your Information to Register!
        </p>
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-[#1e1e1e]">
          <div className="text-xl rounded-full">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div>
        <p
          ref={errRef}
          className={errMsg ? "errmsg " : "offscreen "}
          aria-live="assertive"
        >
          Error: {errMsg}
        </p>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-full h-px bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="w-full h-px bg-gray-200 dark:bg-navy-700" />
        </div>
        {/* Email */}

        <div className="p-4 m-2 border border-[#1e1e1e] rounded-2xl">
          <div className="flex items-center justify-start ">
            <FaUser className="text-custom-primaryColor" />
            <input
              value={lastName}
              type="text"
              ref={lastNameRef}
              disabled={loading}
              required
              aria-invalid={validLastName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setLastNameFocus(true)}
              onBlur={() => setLastNameFocus(false)}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full  pl-1 dark:text-[white] text-[black] dark:bg-[#111111] bg-[transparent] text-sm rounded-md focus:outline-none dark:focus:text-white focus:text-gray-900"
              placeholder="Last Name"
              autoComplete="off"
            />
            <FaCheck size={20} className={validLastName ? "valid" : "hide"} />
            <FaTimes
              size={20}
              className={validLastName || !lastName ? "hide" : "invalid"}
            />
          </div>
          <p
            id="uidnote"
            className={
              lastNameFocus && lastName && !validLastName
                ? "instructions  flex justify-start items-center"
                : "offscreen flex justify-start items-center"
            }
          >
            <FaInfoCircle />4 to 24 characters. Must begin with a letter.
            Letters, numbers, underscores, hyphens allowed.
          </p>
        </div>
        <div className="p-4 m-2 border border-[#1e1e1e] rounded-2xl">
          <div className="flex items-center justify-start ">
            <FaUser className="text-custom-primaryColor" />

            <input
              value={fName}
              type="text"
              required
              disabled={loading}
              aria-invalid={validFName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setFNameFocus(true)}
              onBlur={() => setFNameFocus(false)}
              onChange={(e) => setFName(e.target.value)}
              className="w-full dark:text-[white] text-[black]  pl-1 dark:bg-[#111111] bg-[transparent] text-sm rounded-md focus:outline-none dark:focus:text-white focus:text-gray-900"
              placeholder="First Name"
              autoComplete="off"
            />
            <FaCheck size={20} className={validFName ? "valid" : "hide"} />
            <FaTimes
              size={20}
              className={validFName || !fName ? "hide" : "invalid"}
            />
          </div>

          <p
            id="uidnote"
            className={
              fNameFocus && fName && !validFName
                ? "instructions  flex justify-start items-center"
                : "offscreen flex justify-start items-center"
            }
          >
            <FaInfoCircle />4 to 24 characters. Must begin with a letter.
            Letters, numbers, underscores, hyphens allowed.
          </p>
        </div>
        <div className="p-4 m-2 border border-[#1e1e1e] rounded-2xl">
          <div className="flex items-center justify-start ">
            <SiMaildotru className="text-custom-primaryColor" />

            <input
              value={email}
              type="email"
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="uidnote"
              disabled={loading}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full dark:text-[white] text-[black]  pl-1 dark:bg-[#111111] bg-[transparent] text-sm rounded-md focus:outline-none dark:focus:text-white focus:text-gray-900"
              placeholder="Email Address"
              autoComplete="on"
            />
            <FaCheck size={20} className={validEmail ? "valid" : "hide"} />
            <FaTimes
              size={20}
              className={validEmail || !email ? "hide" : "invalid"}
            />
          </div>

          <p
            id="uidnote"
            className={
              emailFocus && email && !validEmail
                ? "instructions   flex justify-start items-center"
                : "offscreen   flex justify-start items-center"
            }
          >
            <FaInfoCircle />
            Must be a valid Email Address.
          </p>
        </div>
        <div className="p-4 m-2 border border-[#1e1e1e] rounded-2xl">
          <div className="flex items-center justify-start ">
            <FaLock className="text-custom-primaryColor" />
            <input
              value={pwd}
              type="password"
              required
              disabled={loading}
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              onChange={(e) => setPwd(e.target.value)}
              className="w-full dark:text-[white] text-[black]  pl-1 dark:bg-[#111111] bg-[transparent] text-sm rounded-md focus:outline-none dark:focus:text-white focus:text-gray-900"
              placeholder="Password"
              autoComplete="off"
            />
            <FaCheck size={20} className={validPwd ? "valid" : "hide"} />
            <FaTimes
              size={20}
              className={validPwd || !pwd ? "hide" : "invalid"}
            />
          </div>

          <p
            id="uidnote"
            className={
              pwdFocus && pwd && !validPwd
                ? "instructions  flex justify-start items-center"
                : "offscreen flex justify-start items-center"
            }
          >
            <FaInfoCircle />
            Minimum eight characters, at least one letter and one number:
          </p>
        </div>
        <div className="p-4 m-2 border border-[#1e1e1e] rounded-2xl">
          <div className="flex items-center justify-start ">
            <FaLock className="text-custom-primaryColor" />
            <input
              value={matchPwd}
              type="password"
              required
              disabled={loading}
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              onChange={(e) => setMatchPwd(e.target.value)}
              className="w-full dark:text-[white] text-[black]  pl-1 dark:bg-[#111111] bg-[transparent] text-sm rounded-md focus:outline-none dark:focus:text-white focus:text-gray-900"
              placeholder="Confirm Password"
              autoComplete="off"
            />
            <FaCheck size={20} className={validMatch ? "valid" : "hide"} />
            <FaTimes
              size={20}
              className={validMatch || !matchPwd ? "hide" : "invalid"}
            />
          </div>

          <p
            id="uidnote"
            className={
              matchFocus && matchPwd && !validMatch
                ? "instructions  flex justify-start items-center"
                : "offscreen flex justify-start items-center"
            }
          >
            <FaInfoCircle />
            Password did not match.
          </p>
        </div>
        
        <div className=" w-[100%] px-4 flex justify-start items-center">
          <div className="dark:text-gray-600">
            <input
              type="radio"
              className="mx-2 dark:bg-[#1e1e1e]  accent-custom-primaryColor "
              value="male"
              disabled={loading}
              checked={selectedValue === "male"}
              onChange={handleChange}
            />
            Male
          </div>
          <div className="dark:text-gray-600">
            <input
              type="radio"
              className="mx-2 accent-custom-primaryColor dark:text-[white] bg-custom-accentColor "
              value="female"
              disabled={loading}
              checked={selectedValue === "female"}
              onChange={handleChange}
            />
            Female
          </div>
          <div className="dark:text-gray-600">
            {" "}
            <input
              className="mx-2 accent-custom-primaryColor dark:text-[white] bg-custom-accentColor"
              type="radio"
              value="Other"
              disabled={loading}
              checked={selectedValue === "Other"}
              onChange={handleChange}
            />
            Other
          </div>
        </div>

        <div className="dark:text-gray-600">
          <h1 className="text-[1.2rem] mx-5 my-2 text-custom-secondaryColor">
            Register As
          </h1>
          <div className=" w-[100%] px-4 flex justify-start items-center">
            <div className="">
              <input
                type="radio"
                className="mx-2 accent-custom-primaryColor"
                value="parent"
                disabled={loading}
                checked={selectedValueRole === "parent"}
                onChange={handleChangeRole}
              />
              Parent
            </div>
            <div className="">
              <input
                type="radio"
                className="mx-2 accent-custom-primaryColor bg-custom-accentColor "
                value="teacher"
                disabled={loading}
                checked={selectedValueRole === "teacher"}
                onChange={handleChangeRole}
              />
              Teacher
            </div>
            <div>
              <input
                type="radio"
                className="mx-2 accent-custom-primaryColor bg-custom-accentColor "
                value="student"
                disabled={loading}
                checked={selectedValueRole === "student"}
                onChange={handleChangeRole}
              />
              Student
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="linear mt-2 w-full rounded-xl bg-custom-primaryColor py-[12px] text-base font-medium text-white transition duration-200 hover:bg-custom-secondaryColor active:bg-custom-primaryColor dark:bg-[#1e1e1e] dark:text-white dark:hover:bg-[#1c1c1c] "
        >
          {loading ? (
            <div className="flex items-center justify-center" role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-custom-secondaryColor animate-spin dark:text-gray-600 fill-[#31473A]"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div>Register</div>
          )}
        </button>
        <div className="mt-4">
          <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
            Already Registered ?
          </span>
          <a
            href={"/sign-up"}
            className="ml-1 text-sm font-medium text-custom-secondaryColor hover:text-custom-primaryColor dark:text-white"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
