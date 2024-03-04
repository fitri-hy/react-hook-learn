import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Prism from "prismjs";
import HookCode from "../../components/code/HookCode";

function StatePenghitung() {
  const language = "javascript";
  const [code, setCode] = useState("");
  useEffect(() => {
    const loadFile = async () => {
      try {
        const response = await fetch('/code/usestate-penghitung.txt');
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
  
  const [copySuccess, setCopySuccess] = useState(false);
  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
  };
  
  return (

			<div className="w-full mx-auto mt-20 text-center">
				<div className="relative z-0 w-full mt-8">
					<div className="relative overflow-hidden shadow-lg">
						<div className="flex justify-between items-center px-4 bg-indigo-400 rounded-b-none h-auto py-4 items-center rounded-xl">
							<div className="flex items-center space-x-1.5">
								<div className="w-3 h-3 bg-rose-400 rounded-full"></div>
								<div className="w-3 h-3 bg-yellow-400 border-white rounded-full"></div>
								<div className="w-3 h-3 bg-green-400 border-white rounded-full"></div>
								<h2 className="text-lg font-bold text-gray-200">Penghitung</h2>
							</div>
							<div className="flex items-center space-x-1.5">
								<button onClick={copyCode} className="flex items-center justify-center text-white font-semibold text-sm px-2 py-1">
									{copySuccess ? "📑 Copied!" : "📄"}
								</button>
								<Link to="/penghitung">
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 384 512">
										<path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
									</svg>
								</Link>
							</div>
						</div>
						<HookCode code={code} language={language} />
					</div>
				</div>
			</div>
  );
}

export default StatePenghitung;
