import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to send the message here
        console.log('Message sent:', { name, email, message });
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        <div className="bg-black min-h-screen flex flex-col justify-center items-center text-3xl py-32 -mt-10">
            <div className="text-white font-light">
                <div className="text-lg flex flex-col items-center justify-center mb-8 py-7">
                    <p className=" text-3xl">GET IN TOUCH</p>
                </div>
                <div className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-8 ">
                            <FaPhone className="text-white text-3xl mr-4" />
                            <p className="text-white text-sm font-semibold">078803333</p>
                        </div>
                        <div className="flex items-center mb-8 ">
                            <FaEnvelope className="text-whitetext-3xl mr-4" />
                            <p className="text-white text-sm font-semibold">call@gmail.com</p>
                        </div>
                        <div className="flex items-start">
                            <FaMapMarkerAlt className="text-white text-3xl mr-4 mt-1" />
                            <div>
                                <p className="text-white text-sm">KACYIRU, Ubumwe House, 3rd floor</p>
                                <p className="text-white text-sm">Kigali, Rwanda</p>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="w-screen max-w-5xl">
                    <div className="flex mb-4">
                        <div className="w-full mr-2">
                            <label htmlFor="name" className="block  font-bold mb-2">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-2 rounded-md bg-white text-black  p-96"
                            />
                        </div>
                        <div className="w-full ml-2">
                            <label htmlFor="email" className="block  text-white font-bold mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 rounded-md bg-white text-black  p-80"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-white font-bold mb-2">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
                            rows="10"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-1/2 bg-red-700 text-white py-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-200 ml-48"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;