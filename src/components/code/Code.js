import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const [copySuccess, setCopySuccess] = useState(false);
  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
  };

  return (
	<div className="w-full mx-auto mt-20 text-center md:w-10/12">
		<div className="relative z-0 w-full mt-8">
			<div className="relative overflow-hidden shadow-lg">
				<div className="flex justify-between items-center px-4 bg-indigo-400 rounded-b-none h-14 rounded-xl">
					<div className="flex space-x-1.5">
						<div className="w-3 h-3 bg-rose-400 rounded-full"></div>
						<div className="w-3 h-3 bg-yellow-400 border-white rounded-full"></div>
						<div className="w-3 h-3 bg-green-400 border-white rounded-full"></div>
					</div>
					<button onClick={copyCode} className="flex items-center justify-center text-white font-semibold text-sm px-2 py-1">
						{copySuccess ? "📑 Copied!" : "📄"}
					</button>
				</div>
				<div className="py-0 -my-4">
					<pre>
						<code className={`language-${language}`}>{code}</code>
					</pre>
				</div>
			</div>
		</div>
	</div>
  );
}
