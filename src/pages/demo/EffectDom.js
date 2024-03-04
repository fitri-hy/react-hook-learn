import React, { useEffect, useState, useRef } from "react";
import '../../assets/css/App.css';

function EffectDom() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = text;
    }
  }, [text]);
  
  return (
    <section className="h-full pt-24 text-gray-700 dark:text-gray-200 bg-neutral-100 dark:bg-neutral-900">
		<div className="mx-auto max-w-7xl md:w-11/12 xl:w-9/12 flex flex-col items-center mt-12">
			<h1 className="mb-8 text-center text-4xl font-extrabold leading-none tracking-normal text-gray-700 md:text-6xl md:tracking-tight dark:text-gray-200">
				<span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-500 to-purple-500 lg:inline">
					useEffect<br/>Memperbaharui DOM
				</span>
			</h1>
			<div className="w-full flex flex-col items-center bg-white dark:bg-neutral-800 shadow-lg py-12 px-4 rounded-lg mt-12">
				<input className="bg-gray-200 dark:bg-neutral-900 p-2 rounded-md mb-4" type="text" placeholder="Input teks .." ref={inputRef} onChange={(e) => setText(e.target.value)} />
				<p className="text-2xl font-bold text-gray-700 dark:text-gray-200">Pembaharuan Input</p>
				<p className="py-4 text-gray-600 dark:text-gray-300">{text}</p>
			</div>
		</div>
	</section>
  );
}

export default EffectDom;
