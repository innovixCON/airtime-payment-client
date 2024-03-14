import React, { useState } from "react";
import { XCircleIcon, PaperAirplaneIcon } from "@heroicons/react/solid";
import DataTable from "../components/DataTable";
import { DummyData } from "../components/Data";
import { AiOutlineSend } from "react-icons/ai";


const SendAirtimeList = () => {
  const [modal, setModal] = useState(false);
  const columns = [
    {
      Header: "Amount Airtime",
      accessor: "amountAirtime",
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
    },
    {
      Header: "Receiver Airtime Number",
      accessor: "receiverAirtimeNumber",
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => (
        <div className=" items-center justify-center flex space-x-2 text-center w-full">
          <XCircleIcon
            width="30"
            height="30"
            cursor="pointer"
            className="text-red-500"
            onClick={() => {
              // setUserToRemove(row.original);
              // setRemoveModal(true);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-row">
          <div className="lg:ml-56 min-h-screen bg-[#F9F9FB] mt-[90px] w-[90%]">
            <div className="flex items-left px-1 lg:px-50 pt-8 pb-8">
              <div className="space-x-8 lg:ml-7">
                <button
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryHover "
                  onClick={() => setModal(true)}
                >
                  <AiOutlineSend className="text-white w-6 mt-1 -ml-2" />{" "}
                  Send Airtime
                </button>
              </div>
            </div>
            <div className="m-4 md:m-1 mt-10">
              {DummyData?.length > 0 && (
                <DataTable
                  data={DummyData}
                  columns={columns}
                  title="Airtime"
                  placeholder=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendAirtimeList;
