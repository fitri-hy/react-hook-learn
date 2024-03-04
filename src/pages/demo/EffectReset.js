import React, { useEffect, useState } from "react";
import '../../assets/css/App.css';

function EffectReset() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(0);
  }, []);
  
  return (
    <section className="h-screen pt-24 text-gray-700 dark:text-gray-200 bg-neutral-100 dark:bg-neutral-900">
		<div className="mx-auto max-w-7xl md:w-11/12 xl:w-9/12 flex flex-col items-center mt-12">
			<h1 className="mb-8 text-center text-4xl font-extrabold leading-none tracking-normal text-gray-700 md:text-6xl md:tracking-tight dark:text-gray-200">
				<span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-500 to-purple-500 lg:inline">
					useEffect<br/>Mengatur Ulang
				</span>
			</h1>
			<div className="w-full flex flex-col items-center bg-white dark:bg-neutral-800 shadow-lg py-12 px-4 rounded-lg mt-12">
				<p className="text-2xl font-bold text-gray-700 dark:text-gray-200">Hitungan</p>
				<p className="px-4 py-2 text-2xl font-bold bg-green-500 rounded-lg my-4 text-gray-100">{count}</p>
				<div className="mt-6 flex gap-4">
					<button className="px-4 py-2 text-sm font-medium text-white transition bg-indigo-400 rounded-lg hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700" onClick={() => setCount(prevCount => prevCount + 1)}>
						Tambah
					</button>
					<button className="px-4 py-2 text-sm font-medium text-white transition bg-rose-400 rounded-lg hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700" onClick={() => setCount(0)}>
						Reset
					</button>
				</div>
			</div>
		</div>
	</section>
  );
}

export default EffectReset;
