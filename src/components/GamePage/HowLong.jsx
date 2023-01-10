import React from "react";

export default function HowLong() {
  return (
    <div className=" px-12 lg:text-3xl text-2xl text-not-white">
      <div className="max-w-6xl p-5 md:p-12 mx-auto rounded-md bg-medium-grey shadow-xl hover:drop-shadow-lg transition-all duration-300 ease-linear">
        <div className="md:grid md:grid-col-5 mx-auto w-fit md:w-full grid-flow-col gap-4">
          <h2 className="text-[#FF7C3B] text-center py-4">HowLongToBeat</h2>
          <div className="col-span-4 md:flex flex-row justify-center">
            <div className="col-span-1 mx-7">
              <ul className="my-3 ">
                <li className="underline decoration-white underline-offset-8">Main Story</li>
                <li className="mt-2">12 hours </li>
              </ul>
            </div>
            <div className="col-span-1 mx-7">
              <ul className="my-3">
                <li className="underline decoration-white underline-offset-8">Story + Sides</li>
                <li className="mt-2">15 hours</li>
              </ul>
            </div>
            <div className="col-span-1 mx-7">
              <ul className="my-3">
                <li className="underline decoration-white underline-offset-8">Everything</li>
                <li className="mt-2">16 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
