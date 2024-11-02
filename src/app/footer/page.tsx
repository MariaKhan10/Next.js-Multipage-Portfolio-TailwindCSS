import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-indigo-200"> 
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              alt="Maria Khan Logo"
              width={30}
              height={30}
              src={require("../../../public/pictures/logofrontend.jpg")}
            />
            <span className="ml-3 text-md">Maria Khan</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Maria Khan
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link target="_blank" href="https://www.instagram.com/khan__mariah?igsh=MXBqbGJzcjl0OW5rMQ==" className="ml-3 text-gray-500 hover:text-[#e4405f] transition duration-300 ease-in-out">
              <FaInstagram className="text-2xl" />
            </Link>
            <Link target="_blank" href="https://github.com/MariaKhan10" className="ml-3 text-gray-500 hover:text-[#333] transition duration-300 ease-in-out">
              <FaGithub className="text-2xl" />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/mariakhan10/" className="ml-3 text-gray-500 hover:text-[#0077b5] transition duration-300 ease-in-out">
              <FaLinkedin className="text-2xl" />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/profile.php?id=100003139598578&mibextid=ZbWKwL" className="ml-3 text-gray-500 hover:text-[#3b5999] transition duration-300 ease-in-out">
              <FaFacebook className="text-2xl" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
