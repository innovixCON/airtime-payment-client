import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black h-screen">
      <footer className=" text-white py-12 text-3xl font-light">
        <div className="container mx-auto flex justify-center flex-wrap">
          <div className="w-full md:w-1/3 px-6">
            <h4 className="font-bold mb-4">Site Map</h4>
            <div className="flex items-center mb-2">
              <FaFacebook className="mr-2" />
              <p>Facebook</p>
            </div>
            <div className="flex items-center mb-2">
              <FaTwitter className="mr-2" />
              <p>Twitter</p>
            </div>
            <div className="flex items-center mb-2">
              <FaInstagram className="mr-2" />
              <p>Instagram</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-6">
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex items-center mb-2">
              <FaFacebook className="mr-2" />
              <p>Facebook</p>
            </div>
            <div className="flex items-center mb-2">
              <FaTwitter className="mr-2" />
              <p>Twitter</p>
            </div>
            <div className="flex items-center mb-2">
              <FaInstagram className="mr-2" />
              <p>Instagram</p>
            </div>
            <div className="flex items-center mb-2">
              <FaYoutube className="mr-2" />
              <p>YouTube</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex justify-between py-4 border-t border-gray-600 mt-8">
          <p>Copyright 2023 Call Africa</p>
          <p>Terms & Conditions</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;