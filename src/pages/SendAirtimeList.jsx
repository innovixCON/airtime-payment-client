import React, { useState, Fragment, useEffect } from "react";
import {
  XCircleIcon,
  CheckIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/solid";
import DataTable from "../components/DataTable";
import { DummyData } from "../components/Data";
import { AiOutlineSend } from "react-icons/ai";
import { Combobox, Transition } from "@headlessui/react";
import {
  sendAirtimeAction,
  getRecipientsAction,
} from "../actions/sendAirtimeActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SendAirtimeList = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const [amountAirtime, setAmountAirtime] = useState({});
  const [receiverAirtimeNumber, setReceiverAirtimeNumber] = useState({});
  const { loading } = useSelector((state) => state.sendAirtime);
  const { recipients } = useSelector((state) => state.getRecipients);
  const token = localStorage.getItem("AuthToken");
  const [removeModal, setRemoveModal] = useState(false);

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
            onClick={() => {}}
          />
        </div>
      ),
    },
  ];
  const onAmountAirtimeChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setAmountAirtime({ value: em });
    } else {
      setAmountAirtime({ value: em, message: "write airtime to send" });
    }
  };
  const onReceiverPhoneChange = (e) => {
    var em = e.target.value;
    if (em != "") {
      setReceiverAirtimeNumber({ value: em });
    } else {
      setReceiverAirtimeNumber({
        value: em,
        message: "write phone to receive",
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (amountAirtime.value === "" || amountAirtime.value === null) {
      setAmountAirtime({ message: "write airtime to send" });
    } else if (
      receiverAirtimeNumber.value === "" ||
      receiverAirtimeNumber.value === null
    ) {
      setReceiverAirtimeNumber({ message: "write phone to receive" });
    } else {
      const payload = {
        receiverAirtimeNumber: receiverAirtimeNumber.value,
        amountAirtime: parseInt(amountAirtime.value),
      };
      dispatch(sendAirtimeAction(token, payload));
    }
  };

  useEffect(() => {
    dispatch(getRecipientsAction());
  }, []);

  const handleRemove = () => {};
  return (
    <>
      <div
        className={`h-full w-full z-20 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center  px-4 ${
          modal === true ? "block" : "hidden"
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-2xl dark:text-black text-center w-11/12 ">
              Send New Airtime
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <label className="mb-12"> Phone Number </label>
              <div className="input">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    name="Amount"
                    className="w-full mt-2 p-2 text-sm text-gray-500 font-sans border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    onChange={onReceiverPhoneChange}
                  />
                </div>
                <span className="text-red-500">
                  {receiverAirtimeNumber.message}
                </span>
              </div>
              <label className="mb-12"> Amount </label>
              <div className="input">
                <div className="grouped-input flex items-center h-full w-full rounded-md">
                  <input
                    name="Amount"
                    className="w-full mt-2 p-2 text-sm text-gray-500 font-sans border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    onChange={onAmountAirtimeChange}
                  />
                </div>
                <span className="text-red-500">{amountAirtime.message}</span>
              </div>
              <div className="w-full mt-2 flex justify-between items-center">
                <button
                  className="group relative  flex justify-center py-2 px-4 border border-transparent
                  text-lg font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-400
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DA091F] mt-12 w-[30%] md:w-1/4  font-sans "
                  onClick={() => setModal(false)}
                  type="button"
                >
                  Cancel
                </button>
                {loading ? (
                  <button
                    className="w-1/2 md:w-1/2  flex justify-center font-sans group relative  py-2 px-4 border
                   text-lg font-medium rounded-md text-primary  border-primary bg-white hover:bg-[#ea3c4f]
                 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DA091F] mt-12"
                    type="submit"
                  >
                    Loading...
                  </button>
                ) : (
                  <button
                    className="w-1/2 md:w-1/2  flex justify-center font-sans group relative  py-2 px-4 border
                   text-lg font-medium rounded-md text-primary  border-primary bg-white hover:bg-[#ea3c4f]
                 hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DA091F] mt-12"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Send Airtime
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Remove Modal */}
      <div
        className={`min-h-full w-screen z-30 bg-black bg-opacity-30 backdrop-blur-sm absolute flex items-center justify-center px-4 ${
          removeModal === true ? "block" : "hidden"
        }`}
      >
        <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4 md:w-1/2  xl:w-4/12 rounded-lg p-4 pb-8">
          <div className="card-title w-full flex  flex-wrap justify-center items-center  ">
            <h3 className="font-bold text-sm text-gray-700 dark:text-white text-center w-11/12">
              Delete message
            </h3>
            <hr className=" bg-primary border-b my-3 w-full" />
          </div>
          <div className="card-body">
            <form className=" py-3 px-8">
              <div>
                <h2 className="text-center m-4 text-xl">
                  Are you sure you want to delete this message
                </h2>
              </div>
              <div className="w-full flex justify-between">
                <button
                  className="group relative  flex justify-center py-2 px-4 border border-transparent
                  text-lg font-medium rounded-md text-white bg-yellow-300 hover:bg-yellow-400
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DA091F] mt-12 w-[30%] md:w-1/4  font-sans "
                  data-testid="delete"
                  onClick={() => setRemoveModal(false)}
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="w-1/2 md:w-1/2  flex justify-center font-sans group relative  py-2 px-4 border
                  text-lg font-medium rounded-md text-primary  border-primary bg-white hover:bg-[#ea3c4f]
                hover:text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DA091F] mt-12"
                  onClick={handleRemove}
                  type="submit"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Remove Modal */}
      <div className="flex flex-col h-screen">
        <div className="flex flex-row">
          <div className="lg:ml-56 min-h-screen bg-[#F9F9FB] mt-[90px] w-[90%]">
            <div className="flex items-left px-1 lg:px-50 pt-8 pb-8">
              <div className="space-x-8 lg:ml-7">
                <button
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryHover "
                  onClick={() => setModal(true)}
                >
                  <AiOutlineSend className="text-white w-6 mt-1 -ml-2" />
                  Send Airtime
                </button>
              </div>
            </div>
            <div className="m-4 md:m-1 mt-10">
              {recipients?.length > 0 ? (
                <DataTable
                  data={recipients}
                  columns={columns}
                  title="Airtime"
                  placeholder=""
                />
              ) : (
                <>
                  <h3>
                    No recipients found for this time, start sending Airtime!
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

export default SendAirtimeList;
