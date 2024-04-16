import React, { useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import DataTable from "../components/DataTable";
import { AiOutlineSend } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import { getRecipientsAction } from "../actions/sendAirtimeActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

const SendSmsList = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("AuthToken");
  const { recipients } = useSelector((state) => state.getRecipients);

  const columns = [
    {
      Header: "createdAt",
      accessor: "createdAt",
      Cell: ({ value }) => moment(value).format("MMM Do YY")
    },
    {
      Header: "Name",
      accessor: "Name",
    },
    {
      Header: "Amount Airtime",
      accessor: "amountAirtime",
    },
    {
      Header: "Provider",
      accessor: "customerName",
    },
    {
      Header: "Receiver Airtime Number",
      accessor: "receiverAirtimeNumber",
    },
    {
        Header: "Message",
        accessor: "message",
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
            onClick={() => {}}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getRecipientsAction(token));
  }, []);
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-row">
          <div className="lg:ml-56 min-h-screen bg-[#F9F9FB] mt-[90px] w-[90%]">
            <div className="flex items-left px-1 lg:px-50 pt-8 pb-8">
              <div className="space-x-8 lg:ml-7">
                <Link
                  to="/dashboard/sendSms"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryHover "
                >
                  <AiOutlineSend className="text-white w-6 mt-1 -ml-2" />
                  Send Sms
                </Link>
              </div>
            </div>
            <div className="m-4 md:m-1 mt-10">
              {recipients?.length > 0 ? (
                <DataTable
                  data={recipients}
                  columns={columns}
                  title="Airtime Lists"
                  placeholder=""
                />
              ) : (
                <>
                  <h3>
                    No recipients found for this time, start sending Sms!
                  </h3>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendSmsList;
