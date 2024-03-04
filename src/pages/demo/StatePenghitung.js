import React, { useState } from "react";
import '../../assets/css/App.css';

function StatePenghitung() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };
  const handleIncrementMin = () => {
    setCount(prevCount => prevCount - 1);
  };
  
  return (
    <section className="h-screen pt-24 text-gray-700 dark:text-gray-200 bg-neutral-100 dark:bg-neutral-900">
		<div className="mx-auto max-w-7xl md:w-11/12 xl:w-9/12 flex flex-col items-center mt-12">
			<h1 className="mb-8 text-center text-4xl font-extrabold leading-none tracking-normal text-gray-700 md:text-6xl md:tracking-tight dark:text-gray-200">
				<span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-500 to-purple-500 lg:inline">
					useState<br/>Penghitung
				</span>
			</h1>
			<div className="w-full flex flex-col items-center bg-white dark:bg-neutral-800 shadow-lg py-12 px-4 rounded-lg mt-12">
				<div className="text-2xl font-bold text-gray-700 dark:text-gray-200">Nilai Hitung</div>
				<p className="bg-indigo-400 px-4 py-3 text-3xl rounded-md text-white font-bold my-4">{count}</p>
				<div className="flex gap-4">
					<button className="bg-rose-400 px-4 py-1 rounded-md text-gray-100" onClick={handleIncrementMin}>Kurang</button>
					<button className="bg-green-400 px-4 py-1 rounded-md text-gray-100" onClick={handleIncrement}>Tambah</button>
				</div>
			</div>
		</div>
	</section>
  );
}

export default StatePenghitung;
