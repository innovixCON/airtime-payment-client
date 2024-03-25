import React from "react";
import { userAmount } from "../components/Data";

const Dashboard = () => {
  return (
    <div className="flex flex-col grow bg-light mt-1">
      <div className="flex flex-row pb-8 justify-center">
        <div className="lg:ml-56 w-[90%] h-[100%]">
          <div className="grid grid-cols-2 mb-12 md:mb-24 lg:mb-0 lg:grid-cols-4">
            {userAmount.map((item, index) => (
              <div key={index} className="border bg-white py-4 dark:bg-dark-bg md:w-[70%] h-32 md:h-40 mx-2 md:ml-16 lg:ml-10 mt-12 md:mt-20 lg:mt-8 text-center flex flex-col justify-center items-center rounded-lg">
                <h4 className="font-['sans'] font-medium mt-2 text-base text-black">
                  {item.title}
                  {/* <ChatIcon className="text-primary w-10" /> */}
                </h4>
                <h1 className="font-['sans] font-semibold text-4xl mb-2 text-black">
                  $ { item.amount }
                </h1>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
