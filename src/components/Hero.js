import { useState, useEffect } from "react";
import Prism from "prismjs";
import Code from "./code/Code";

const Hero = () => {
  const language = "javascript";
  const [code, setCode] = useState("");
  useEffect(() => {
    const loadFile = async () => {
      try {
        const response = await fetch('/code/home.txt');
        const text = await response.text();
        setCode(text);
      } catch (error) {
        console.error("Error loading file:", error);
      }
    };

    loadFile();
  }, []);
  
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  
  return (
		<div className="mt-6 md:mt-16">
			<div className="mx-auto max-w-7xl text-center md:w-11/12 xl:w-9/12 md:text-center">
				<h1 data-aos="zoom-in" className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-700 md:text-6xl md:tracking-tight dark:text-gray-200">
					<span>
Pelajari </span>
					<span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-500 to-purple-500 lg:inline">
React Hooks </span>
					<span>
Dasar</span>
				</h1>
				<p data-aos="fade-up" className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24 dark:text-gray-300">
React hooks adalah fitur canggih di React yang memungkinkan Anda menambahkan status dan fitur lainnya ke komponen fungsional.
				</p>
				<div data-aos="fade-up" className="mb-4 space-x-0 md:space-x-2 md:mb-8">
					<a href="#hooks" className="mx-2 inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-indigo-400 hover:bg-indigo-500 rounded-2xl shadow-md sm:w-auto sm:mb-0">
Memulai
						<svg className="animate-bounce w-6 h-6 ml-2 -mb-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8.5 4.5a.5.5 0 00-1 0v5.793L5.354 8.146a.5.5 0 10-.708.708l3 3a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V4.5z" />
						</svg>
					</a>
				</div>
			</div>
			<Code code={code} language={language} />
		</div>
  );
};

export default Hero;
