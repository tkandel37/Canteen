import Footer from "components/footer/FooterAuthDefault";


import SignIn from "views/auth/SignIn";
import SignupForm from "views/auth/Register";

export default function Auth({isRegister}) {
  return (
    <div>
      <div className="relative float-right w-full !bg-white dark:!bg-[#111111]">
        <main className={`mx-auto`}>
          <div className="relative flex">
            <div className="mx-auto flex  w-full flex-col justify-start pt-12 md:max-w-[75%]  lg:max-w-[1013px] lg:px-8 lg:pt-0  xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
              </div>
              {isRegister ? <SignIn /> : <SignupForm />}
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
