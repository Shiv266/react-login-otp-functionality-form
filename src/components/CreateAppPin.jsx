import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import "../assets/styles/numberInput.css";

let currentPinIndex = 0;

export default function CreateAppPin() {
  const [pin, setPin] = useState(new Array(4).fill(""));
  const [activePinIndex, setActivePinIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const pinInputRef = useRef(null);
  // let isLoggedIn = true;
  let subHeading = (
    <span>
      We value security. PIN helps keep your data safe &{" "}
      <br className="hidden sm:block" />
      secure
    </span>
  );

  useEffect(() => {
    pinInputRef.current?.focus();
  }, [activePinIndex]);

  const handlePinChange = ({ target }) => {
    const { value } = target;
    const newPinArray = [...pin];
    newPinArray[currentPinIndex] = value.substring(value.length - 1);
    if (!value) {
      setActivePinIndex(currentPinIndex - 1);
    } else {
      setActivePinIndex(currentPinIndex + 1);
    }

    setPin(newPinArray);
  };
  const handleOnKeyDown = ({ key }, index) => {
    currentPinIndex = index;
    if (key === "Backspace") setActivePinIndex(currentPinIndex - 1);
  };

  const handlePinSubmit = (e) => {
    e.preventDefault();
    console.log(pin);
  };

  return (
    <>
      <div className="mx-auto bg-gray-400 py-8 h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mx-auto flex sm:w-full px-8 max-w-xl mt-8 py-8 bg-white shadow-2xl rounded-md flex-col border-2">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-full border-4 bg-white text-center border-[#22B6ED]`}
              >
                <LockClosedIcon className="h-10 w-10 text-[#22B6ED]" />
              </div>
            </div>
            <div className="flex flex-col mt-6 space-y-2 justify-center items-center">
              <div
                className={`${
                  isLoggedIn ? "text-lg" : "text-base"
                } font-semibold text-gray-800`}
              >
                <p>
                  {isLoggedIn ? `Hi, Shivam Singh` : `Set New e-Learning Pin`}
                </p>
              </div>
              <div className="text-sm text-center font-medium text-gray-600">
                <p>
                  {isLoggedIn ? "Please enter e-Learning Pin here" : subHeading}
                </p>
              </div>
            </div>
            <form onSubmit={handlePinSubmit} className="space-y-8 mt-6">
              <div className="flex items-center justify-center space-x-6">
                {pin.map((_, index) => (
                  <React.Fragment key={index}>
                    <input
                      type="number"
                      // min={0}
                      ref={activePinIndex === index ? pinInputRef : null}
                      onChange={handlePinChange}
                      pattern="[0-9]{10}"
                      className="h-12 w-12 spin-button-none rounded-md border border-gray-300 bg-white text-center focus:outline-none focus:ring-[#5dc7ee] focus:border-gray-400 focus:bg-gray-50 focus:ring-1"
                      name="pin"
                      value={pin[index]}
                      onKeyDown={(e) => handleOnKeyDown(e, index)}
                    />
                  </React.Fragment>
                ))}
              </div>
              <div className="flex justify-center sm:px-28">
                <button
                  disabled={pin.includes("") ? true : false}
                  className={`w-full rounded-md border border-none ${
                    !pin.includes("")
                      ? "bg-[#22B6ED]"
                      : "bg-[#9fbfcb] opacity-50"
                  }  py-2.5 text-center font-semibold uppercase text-white shadow-sm outline-none`}
                >
                  {isLoggedIn ? "Submit" : "Set Pin"}
                </button>
              </div>
              {isLoggedIn && (
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => setIsLoggedIn(false)}
                    className="text-[#1A92BF] -mt-1 text-sm font-medium"
                  >
                    Forgot e-Learning PIN?
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
