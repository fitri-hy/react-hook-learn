import { useState, useEffect } from "react";
import Prism from "prismjs";
import HookCode from "../../components/code/HookCode";

function ReducerDaftarItem() {
  const language = "javascript";
  const [code, setCode] = useState("");
  useEffect(() => {
    const loadFile = async () => {
      try {
        const response = await fetch('/code/usereducer-daftaritem.txt');
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
								<h2 className="text-lg font-bold text-gray-200">Daftar Item</h2>
							</div>
							<button onClick={copyCode} className="flex items-center justify-center text-white font-semibold text-sm px-2 py-1">
								{copySuccess ? "📑 Copied!" : "📄"}
							</button>
						</div>
						<HookCode code={code} language={language} />
					</div>
				</div>
			</div>
  );
}

export default ReducerDaftarItem;
