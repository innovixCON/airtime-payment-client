import React, { useEffect } from "react";
import { totalAirtimeUserSentAction } from "../actions/sendAirtimeActions";
import { useDispatch, useSelector } from "react-redux";
import { totalSmsAction } from "../actions/smsActions";

const Dashboard = () => {
  const token = localStorage.getItem("AuthToken");
  const { totalAirtimeUserSent } = useSelector(
    (state) => state.totalAirtimeUserSent
  );
  const { totalSms } = useSelector((state) => state.totalSms);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalAirtimeUserSentAction(token));
    dispatch(totalSmsAction(token));
  }, []);

  return (
    <div className="flex flex-col grow bg-light mt-1">
      <div className="flex flex-row pb-8 justify-center">
        <div className="lg:ml-56 w-[90%] h-[100%]">
          <div className="grid grid-cols-2 mb-12 md:mb-24 lg:mb-0 lg:grid-cols-4">
            <div className="border bg-white py-4 dark:bg-dark-bg md:w-[70%] h-32 md:h-40 mx-2 md:ml-16 lg:ml-10 mt-12 md:mt-20 lg:mt-8 text-center flex flex-col justify-center items-center rounded-lg">
              <h4 className="font-['sans'] font-medium mt-2 text-2xl  text-black">
                Total Airtime Sent
              </h4>
              <h2 className="font-['sans] font-semibold text-base mt-2 text-black">
                RWF {totalAirtimeUserSent ? totalAirtimeUserSent : 0}
              </h2>
            </div>
            <div className="border bg-white py-4 dark:bg-dark-bg md:w-[70%] h-32 md:h-40 mx-2 md:ml-16 lg:ml-10 mt-12 md:mt-20 lg:mt-8 text-center flex flex-col justify-center items-center rounded-lg">
              <h4 className="font-['sans'] font-medium mt-2 text-2xl text-black">
                SMS Sent
              </h4>
              <h2 className="font-['sans] font-semibold text-base mt-2 text-black">
                {totalSms ? totalSms : 0}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
