import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import SwiperComponent from "./SwiperComponent";

export default function LoginForm() {
  const [isShowOTP, setIsShowOTP] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [countDownTime, setCountDownTime] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    let interval = null;
    if (!countDownTime) {
      return;
    }
    if (isShowOTP) {
      interval = setInterval(() => {
        setCountDownTime(countDownTime - 1);
      }, 1000);
    } else if (!isShowOTP) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isShowOTP, countDownTime]);

  const requestOtp = () => {
    setIsShowOTP(true);
    console.log(`Send mobile number to server : ${mobileNumber}`);
  };

  const resendOtpRequest = () => {
    console.log("Resend Otp");
    setCountDownTime(30);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isShowOTP) {
      requestOtp();
    } else {
      navigate("/enter");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center bg-gray-400 py-8 h-screen sm:px-6 lg:px-12">
        <section className="max-w-4xl px-2">
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:divide-x shadow-lg sm:divide-gray-300 py-4 bg-white rounded-md">
            <div className="sm:col-span-1 sm:block hidden px-12">
              <h1 className="text-lg mt-8 text-gray-700 text-center font-medium">
                {`Join India's largest learning destination`}
              </h1>
              <div className="py-6">
               <SwiperComponent/>
              </div>
            </div>
            <div className="col-span-1">
              <img className="mx-auto mt-8 w-32 h-28" src={logo} alt="logo" />
              <div className="sm:px-12 px-6 py-6">
                <div className="text-center">
                  <div className="mb-12">
                    <h4 className="pb-0.5 text-lg text-gray-700 font-semibold">
                      Sign in to your Account
                    </h4>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="">
                  {!isShowOTP && (
                    <>
                      <div className="relative z-0">
                        <div className="pointer-events-none absolute inset-y-0 -left-2 flex items-center pl-3">
                          <span className="text-sm">+91</span>
                        </div>
                        <input
                          type="tel"
                          value={mobileNumber}
                          min={0}
                          autoFocus
                          pattern="[0-9]{10}"
                          required
                          maxLength={10}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          id="mobileNumber"
                          className="block py-2.5 pt-3 px-0 pl-9 bg-white sm:w-full w-72 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
                          placeholder=" "
                        />
                        <label
                          htmlFor="mobileNumber"
                          className="absolute text-gray-700 font-medium duration-300 transform -translate-y-6 scale-75 top-1.5 -z-10 origin-[0]"
                        >
                          Enter Contact Number
                        </label>
                      </div>
                    </>
                  )}
                  {isShowOTP && (
                    <>
                      <div className="-mt-8">
                        <h1 className="font-medium text-sm  text-gray-600">
                          An OTP has been sent to{" "}
                          <span className="text-sm text-gray-500">
                            1234567890
                          </span>
                        </h1>
                      </div>
                      <div className="relative mt-5 z-0">
                        <input
                          type="tel"
                          min={0}
                          // pattern="[0-9]{10}"
                          required
                          id="otp"
                          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="otp"
                          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                          OTP
                        </label>
                      </div>
                    </>
                  )}
                  <div className="px-1 mt-4">
                    {isShowOTP && (
                      <div className="items-center gap-2 flex">
                        {countDownTime !== 0 && (
                          <h1 className="text-sm text-gray-600">
                            Resend in{" "}
                            <span className="font-semibold">
                              {countDownTime}
                            </span>{" "}
                            seconds
                          </h1>
                        )}
                        {countDownTime === 0 && (
                          <button
                            type="button"
                            onClick={resendOtpRequest}
                            className="text-sm font-medium text-gray-600 cursor-pointer"
                          >
                            Send New OTP
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  <div className={`w-full ${isShowOTP ? "mt-6" : "mt-10"}`}>
                    <button
                      type="submit"
                      className={`w-full rounded-md border border-none ${
                        mobileNumber.length === 10
                          ? "bg-[#22B6ED]"
                          : "bg-[#9fbfcb] opacity-50"
                      }  py-2 text-center tracking-wider font-medium text-white shadow-sm outline-none`}
                    >
                      {isShowOTP ? "Submit" : "Continue"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
