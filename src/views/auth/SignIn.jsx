import { FcGoogle } from "react-icons/fc";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { SiMaildotru } from "react-icons/si";


export default function SignIn() {

  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [persist, setPersist] = useState(true);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    
    
  };
  return (
    <div className=" mb-16 flex h-[100vh]  w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-custom-primaryColor dark:text-white">
          Sign In
        </h4>
        <p className="ml-1 text-base text-gray-600 mb-9">
          Enter your email and password to sign in!
        </p>
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-custom-accentColor hover:cursor-pointer dark:bg-[#1e1e1e]">
          <div className="text-xl rounded-full">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div>
        <p
          ref={errRef}
          className={
            errMsg ? "errmsg  bg-transparent" : "offscreen  bg-transparent"
          }
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-full h-px bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="w-full h-px bg-gray-200 dark:bg-navy-700" />
        </div>

        <div className="flex items-center justify-start p-4 m-2 border dark:border-[#1e1e1e] rounded-2xl">
          <SiMaildotru className="text-custom-primaryColor" />
          <input
            type="text"
            id="email"
            disabled={loading}
            placeholder="Email"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="w-full dark:text-[white] text-[black]  pl-1 dark:bg-[#111111] bg-[transparent] text-sm rounded-md focus:outline-none dark:focus:text-white focus:text-gray-900"
          />
        </div>
        <div className="flex items-center justify-start p-4 m-2 border dark:border-[#1e1e1e] rounded-2xl">
          <FaLock className="text-custom-primaryColor" />
          <input
            type="password"
            id="password"
            disabled={loading}
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="w-full dark:text-[white] text-[black]  pl-1 dark:bg-[#111111] bg-[transparent] text-sm rounded-md focus:outline-none dark:focus:text-white focus:text-gray-900"
          />
        </div>
        <div className="flex items-center justify-between px-2 mb-4">
          <div className="flex items-center ml-4">
            <input
              checked={persist}
              onChange={() => setPersist(!persist)}
              id="checked-checkbox"
              type="checkbox"
              value={persist}
              className="w-4 h-4 border-gray-300 rounded fill-black accent-custom-primaryColor"
            />
            <label
              for="checked-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember this device?
            </label>
          </div>
          <a
            className="text-sm font-medium text-custom-secondaryColor hover:text-custom-primaryColor dark:text-white"
            href=" "
          >
            Forgot Password?
          </a>
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
            <div>Login</div>
          )}
        </button>
        <div className="mt-4">
          <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <a
            href={"/sign-in"}
            className="ml-1 text-sm font-medium text-custom-secondaryColor hover:text-custom-primaryColor dark:text-white"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  )
}
