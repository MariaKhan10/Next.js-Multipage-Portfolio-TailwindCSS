import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const Navbar = () => {
  const navbarBackground = `rgba(30, 58, 138, 0.85)`; // A semi-transparent dark blue
  return (
    <div className="z-50 sticky top-0">
      <div style={{ backgroundColor: navbarBackground }} className="py-4 px-8 shadow-lg">
        <header className="body-font">
          <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <Image
                alt="logo"
                width={40}
                height={80}
                src={require("../../../public/pictures/logofrontend.jpg")}
              />
              <span className="ml-3 text-xl">Maria Khan</span>
            </Link>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link href="/" className="mr-5 text-white hover:text-gray-300 hover:underline">
                Home
              </Link>
              <Link href="/about" className="mr-5 text-white hover:text-gray-300 hover:underline">
                About
              </Link>
              <Link href="/skills" className="mr-5 text-white hover:text-gray-300 hover:underline">
                Skills
              </Link>
              <Link href="/projects" className="mr-5 text-white hover:text-gray-300 hover:underline">
                Projects
              </Link>
              <Link href="/contact" className="mr-5 text-white hover:text-gray-300 hover:underline">
                Contact
              </Link>
            </nav>

            <a href="/cv/cv.pdf" download="CV.pdf">
              <button className="inline-flex text-white items-center bg-indigo-900 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">
                Download CV
                <MdOutlineFileDownload className="text-xl ml-2" />
              </button>
            </a>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
