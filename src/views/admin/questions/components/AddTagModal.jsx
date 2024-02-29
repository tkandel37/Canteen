import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import axios from "api/axiosApi";

const SkillSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
export default function AddTagModal() {
  const [showModal, setShowModal] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const jwtCookie = new Cookies().get("jwt");
  const jwtCookie = localStorage.getItem("kws");
  return (
    <>
      <button
        className="px-6 py-3 mb-1 mr-1 font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-custom-primaryColor hover:shadow-lg focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add New Tag
      </button>
      {showModal ? (
        <>
          <div className="dark:text-[#111111] bg-gray-900/40 w-full mt-[0] fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-full max-w-xl mx-auto">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                  <h3 className="text-3xl font-semibold">Add New Tag</h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block text-gray-900 bg-transparent outline-none ext-2xl focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto p-6">
                  <Formik
                    initialValues={{ name: "" }}
                    validationSchema={SkillSchema}
                    onSubmit={async (values, { resetForm }) => {
                      setIsSubmitting(true);
                      try {
                        const response = await axios.post(
                          "/subject/tag",
                          values,
                          {
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: `Bearer ${jwtCookie}`,
                            },
                          }
                        );
                        if (response.status === 201) {
                          toast.success("Question added successfully!", {
                            position: "top-right",
                            onClose: () => {
                              setIsSubmitting(false);
                              // window.location.reload();
                              setShowModal(false);
                            },
                          });
                        } else {
                          toast.error("Something is missing!", {
                            // position: "top-right",
                            onClose: () => {
                              setShowModal(false);
                              setIsSubmitting(false);
                            },
                          });
                        }
                      } catch (error) {
                        toast.error("Sorry the new skill cannot be added!", {
                          // position: "top-right",
                          onClose: () => {
                            setIsSubmitting(false);
                            setShowModal(false);
                          },
                        });
                      }
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      /* and other goodies */
                    }) => (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-3">
                          <label>Tag Name</label>
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            autoComplete="off"
                            className="w-full px-3 py-3 text-base leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          />
                          <p className="text-red-500">
                            {errors.name && touched.name && errors.name}
                          </p>
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-3 py-3 text-gray-100 bg-custom-primaryColor"
                        >
                          {isSubmitting ? "Adding..." : "Add New tag"}
                        </button>
                      </form>
                    )}
                  </Formik>
                  {/* <p className="text-lg leading-relaxed text-slate-500">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p> */}
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
