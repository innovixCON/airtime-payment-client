
import React from "react";
import logo from "../assets/setup1.jpg";
import "../components/css/style.css"
import useAuthStore from "../components/hooks/UseAuthStore";
import {  useNavigate } from "react-router-dom";



function Home() {
 
    const navigate = useNavigate();
    const { AuthStatus } = useAuthStore();
  
    const handleClick = () => {
      if (AuthStatus) {
        navigate("/dashboard/");
      } else {
        navigate('/login');
      }
    };
    return (
    <div
      className="h-screen cont">
      <div className="imageCont">
        <img className="image" src={logo} alt="homeimage" />
      </div>
      <div className="flex flex-col text-white space-y-4 items-center absolute top-[50%] left-[30%]">
        <h2 className=" text-5xl font-bold">Call Africa welcomes you</h2>
        <p className="text-3xl font-light">Your go-to platform for mobile solutions</p>
        <div className=" space-x-6 h-5">
          <button className=" bg-red-800 font-semibold h-12 w-auto text-white text-2xl px-4 py-2 border border-white hover:bg-transparent"
           onClick={handleClick}
          >
         
            Get started
          </button>
          <button className="bg-transparent font-semibold text-white text-2xl hover:opacity-50 h-12 w-32  px-4 py-2 border border-white ">
            Contact
          </button>
        </div>
      </div>
    </div>

  );
}

export default Home;