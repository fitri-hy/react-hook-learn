import React, { useEffect, useState } from "react";
import '../../assets/css/App.css';

function EffectApi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  
  return (
    <section className="h-full pt-24 text-gray-700 dark:text-gray-200 bg-neutral-100 dark:bg-neutral-900">
		<div className="mx-auto max-w-7xl md:w-11/12 xl:w-9/12 flex flex-col items-center mt-12">
			<h1 className="mb-8 text-center text-4xl font-extrabold leading-none tracking-normal text-gray-700 md:text-6xl md:tracking-tight dark:text-gray-200">
				<span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-500 to-purple-500 lg:inline">
					useEffect<br/>Mengambil API
				</span>
			</h1>
			<div className="w-full flex flex-col items-center bg-white dark:bg-neutral-800 shadow-lg py-12 px-4 rounded-lg mt-12">
				<p className="text-2xl font-bold text-gray-700 dark:text-gray-200">Data Fetch</p>
				<p className="text-center my-4 text-gray-700 dark:text-gray-200">https://restcountries.com/v2/all</p>
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
					{data.map(item => <p className="flex items-center justify-center bg-gray-600 text-center rounded-md p-2 text-white" key={item.id}>{item.name} </p>)}
				</div>
			</div>
		</div>
	</section>
  );
}

export default EffectApi;
