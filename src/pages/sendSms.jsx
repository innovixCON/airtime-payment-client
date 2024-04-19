import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  sendAirtimeAction,
  sendAirtimeToMultipleUsers,
} from "../actions/sendAirtimeActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

const SendSms = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [amountAirtime, setAmountAirtime] = useState("");
  const [receiverAirtimeNumber, setReceiverAirtimeNumber] = useState("");
  const [name, setName] = useState("");
  const { loading } = useSelector((state) => state.sendAirtime);
  const token = localStorage.getItem("AuthToken");

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const onAmountAirtimeChange = (e) => {
    setAmountAirtime(e.target.value);
  };

  const onReceiverPhoneChange = (e) => {
    setReceiverAirtimeNumber(e.target.value);
  };

  const onNameChange = (e) =>{
    setName(e.target.value)
  };

  const handleSubmitFile = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please upload an Excel file");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0]; // Assuming you have only one sheet
      const worksheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      console.log("Parsed data:", parsedData);

      try {
        await sendAirtimeToMultipleUsers(parsedData);
        toast.success("Airtime sent successfully");
      } catch (error) {
        console.error("Error sending airtime:", error);
        toast.error("Failed to send airtime");
      }
    };
    reader.readAsBinaryString(file);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!amountAirtime.trim()) {
      toast.error("Please enter the amount");
      return;
    }
    if (!receiverAirtimeNumber.trim()) {
      toast.error("Please enter the receiver's phone number");
      return;
    }
    if(!name){
      toast.error("Please enter the receiver's name");
      return;
    }

    const payload = {
      receiverAirtimeNumber: receiverAirtimeNumber,
      amountAirtime: parseInt(amountAirtime),
      Name:name
    };
    dispatch(sendAirtimeAction(token, payload));
      toast.success("Airtime sent successfully");
  };

  return (
    <div className={`w-full px-4 flex justify-center items-center`}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="bg-white dark:bg-dark-bg w-full sm:w-3/4  xl:w-4/12 rounded-lg p-4 pb-8">
        <div className="card-title w-full flex flex-wrap justify-center items-center">
          <h3 className="font-bold text-2xl dark:text-black text-center w-full">
            Send New Messages
          </h3>
          <hr className=" bg-primary border-b my-3 w-full" />
        </div>
        <div className="card-body">
          <form className="py-3 px-1" onSubmit={handleSubmitForm}>
            <div className="input">
              <label htmlFor="fileInput" className="mb-2">
                Upload Excel File
              </label>
              <input
                id="fileInput"
                type="file"
                accept=".xls,.xlsx"
                onChange={handleFileUpload}
                className="w-full mt-2 p-2 text-sm text-gray-500 font-sans border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />
            </div>
            <div className="w-full mt-2 flex justify-center items-center">
              <button
                className="w-full md:w-full flex justify-center font-sans group relative py-2 px-4 border
                  text-lg font-medium rounded-md text-primary border-primary bg-white hover:bg-[#ea3c4f]
                  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DA091F] mt-4"
                type="submit"
                disabled={loading}
                onClick={handleSubmitFile}
              >
                { loading ? "Send Messages......" : "Send Message from File"}
              </button>
            </div>
          </form>

          <div className="flex justify-center items-center my-4">
            <hr className="border-primary border-b my-4 w-[50%]" />
              <span className="mx-4">or</span>
            <hr className="border-primary border-b my-4 w-[50%]" />
          </div>

          <form className="py-3 px-1" onSubmit={handleSubmitForm}>
          <div className="input">
              <label className="mb-2">Name</label>
              <input
                type="text"
                value={name}
                placeholder="Enter receiver's name"
                onChange={onNameChange}
                className="w-full mt-2 p-2 text-sm text-gray-500 font-sans border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                required
              />
            </div>
            <div className="input mt-3">
              <label className="mb-2">Phone Number</label>
              <input
                type="text"
                value={receiverAirtimeNumber}
                onChange={onReceiverPhoneChange}
                placeholder="Enter receiver's phone number ex:78 / 79"
                required
                className="w-full mt-2 p-2 text-sm text-gray-500 font-sans border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />
            </div>
            <div className="input mt-3">
              <label className="mb-2">Amount</label>
              <input
                type="number"
                value={amountAirtime}
                onChange={onAmountAirtimeChange}
                placeholder="Enter amount"
                required
                className="w-full mt-2 p-2 text-sm text-gray-500 font-sans border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />
            </div>
            <div className="w-full mt-2 flex justify-center items-center">
              <button
                className="w-full md:w-full flex justify-center font-sans group relative py-2 px-4 border
                  text-lg font-medium rounded-md text-primary border-primary bg-white hover:bg-[#ea3c4f]
                  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DA091F] mt-4"
                type="submit"
                disabled={loading}
              >
                Send Message from Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendSms;
