import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import dice from "./assets/dice.png";
import podySelfie from "./assets/body.png";
import podyUpper from "./assets/body-upper.png";
import podyUppertwo from "./assets/upper-body-two.jpg";
import { FaCircleCheck } from "react-icons/fa6";

function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selectedPose, setSelectedPose] = useState(null);
  const [poseData, setPoseData] = useState([
    { name: "None", image: `${dice}` },
    { name: "Body Selfie", image: `${podySelfie}` },
    { name: "Upper Body 1", image: `${podyUpper}` },
    { name: "Upper Body 2", image: `${podyUppertwo}` },
  ]);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  //when user select pose display icon
  const handlePoseClick = (index) => {
    setSelectedPose(index);
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-200 bg-opacity-50 p-5   overflow-y-auto">
      <div className="pt-5 mx-2 flex flex-col relative bg-white shadow-md rounded-md h-full w-full">
        <div className="form-control w-full px-10">
          <label className="label">
            <span className="label-text text-lg">Clothing</span>
          </label>
          <input
            type="text"
            placeholder="e.g. blue dress, neckless, black choker"
            className="input input-bordered w-full "
          />
          <label className="label mt-5">
            <span className="label-text text-lg">Background</span>
          </label>
          <input
            type="text"
            placeholder="e.g. cabin, morning time, sunlight"
            className="input input-bordered w-full "
          />
          <div className="flex flex-col mt-5">
            <div className="form-control w-28">
              <label className="cursor-pointer label ">
                <input
                  type="checkbox"
                  className={`toggle  ${
                    isEnabled
                      ? "bg-primary border border-primary"
                      : "bg-gray-400"
                  }`}
                  checked={isEnabled}
                  onChange={toggleSwitch}
                />
                <span className="label-text text-lg">Smile</span>
              </label>
            </div>
          </div>
          <label className="label mt-5">
            <span className="label-text text-lg">Select a Pose</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-4 mx-auto w-full">
            {poseData.map((pose, index) => (
              <div
                className={`cursor-pointer bg-white border-2 rounded-md h-[130px] w-full flex flex-col items-center justify-center p-[10px] ${
                  index === selectedPose ? "border border-primary" : ""
                }`}
                key={index}
                onClick={() => handlePoseClick(index)}
              >
                <div className="justify-start  w-full">
                  <div className="flex flex-row justify-between">
                    <div className="text-lg">{pose.name}</div>
                    {index === selectedPose ? (
                      <FaCircleCheck className="text-primary" size={20} />
                    ) : (
                      <></>
                    )}
                  </div>

                  <img
                    className="w-20 h-20 border border-gray-300 rounded-md"
                    src={pose.image}
                    alt={pose.name}
                  />
                </div>
              </div>
            ))}
          </div>
          <label className="label mt-5">
            <span className="label-text text-lg"># of Images</span>
          </label>
          <input
            type="number"
            placeholder="5"
            className="input input-bordered w-full "
          />
        </div>
        <div className="bg-gray-100  w-full mt-5 justify-end flex items-end">
          <button className="btn btn-primary normal-case mx-10 my-3">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
