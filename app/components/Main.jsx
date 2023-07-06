import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = ({ darkMode }) => {
  return (
    <div
      id="home"
      className={
        darkMode
          ? "w-full h-screen text-center bg-black"
          : "w-full h-screen text-center"
      }
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className={darkMode ? "py-4 text-[#fff]" : "py-4 text-gray-700"}>
            Hey, I'm <span className="text-[#379237]">Nate</span>
          </h1>
          <h1 className={darkMode ? "py-2 text-[#fff]" : "py-2 text-gray-700"}>
            An Aspiring Developer
          </h1>
          <p
            className={
              darkMode
                ? "py-4 text-[#fff] max-w-[70%] m-auto"
                : "py-4 text-gray-600 max-w-[70%] m-auto"
            }
          >
            Driven by a deep passion for web development, my career goal is to
            make a mark in the tech industry. A transformative data analytics
            internship fueled my enthusiasm for application development,
            solidifying my determination to excel as a web developer.
            Self-taught skills helped me develop and launch a passion project
            showcasing my desire for continued growth and fast-learning
            capabilities.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/nathan-karns-63820a216/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#379237] animated-icon">
                <FaLinkedinIn color={darkMode ? "white" : ""} />
              </div>
            </Link>
            <Link href="https://github.com/Karns11">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#379237] animated-icon">
                <FaGithub color={darkMode ? "white" : ""} />
              </div>
            </Link>
            <Link href="mailto:karnsnat@msu.edu">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#379237] animated-icon">
                <AiOutlineMail color={darkMode ? "white" : ""} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
