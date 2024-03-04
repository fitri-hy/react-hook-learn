import React, { useState } from "react";
import '../../assets/css/App.css';

function StateWarna() {
  const [color, setColor] = useState("#E06666");
  const handleChangeColor = (newColor) => {
    setColor(newColor);
  };
  
  return (
    <section className="h-screen pt-24 text-gray-700 dark:text-gray-200 bg-neutral-100 dark:bg-neutral-900">
		<div className="mx-auto max-w-7xl md:w-11/12 xl:w-9/12 flex flex-col items-center mt-12">
			<h1 className="mb-8 text-center text-4xl font-extrabold leading-none tracking-normal text-gray-700 md:text-6xl md:tracking-tight dark:text-gray-200">
				<span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-500 to-purple-500 lg:inline">
					useState<br/>Pengubah Warna
				</span>
			</h1>
			<div className="w-full flex flex-col items-center bg-white dark:bg-neutral-800 shadow-lg py-12 px-4 rounded-lg mt-12">
				<p className="font-bold text-2xl text-gray-700 dark:text-gray-200">Warna Saat Ini</p>
				<div className="flex h-24 w-32 my-4 text-white items-center justify-center rounded-md" style={{ background: color }}>
					{color}
				</div>
				<div className="flex gap-4 mt-4">
					<button className="px-4 py-1 rounded-md text-white" style={{ background: "#3D85C6" }} onClick={() => handleChangeColor("#3D85C6")}>#3D85C6</button>
					<button className="px-4 py-1 rounded-md text-white" style={{ background: "#52BE4F" }} onClick={() => handleChangeColor("#52BE4F")}>#52BE4F</button>
					<button className="px-4 py-1 rounded-md text-white" style={{ background: "#DDD600" }} onClick={() => handleChangeColor("#DDD600")}>#DDD600</button>
				</div>
			</div>
		</div>
	</section>
  );
}

export default StateWarna;
