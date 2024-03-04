import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
	<footer class="w-full text-gray-700 dark:text-gray-200 bg-neutral-100 dark:bg-neutral-900 pt-32 sm:pt-26">
	  <div class="bg-white dark:bg-neutral-800 mx-auto md:px-12 pt-12 pb-4 border dark:border-neutral-700">
		<div class="flex flex-wrap text-left lg:text-left">
		  <div class="w-full lg:w-6/12 px-4">
			<h4 class="text-3xl font-bold text-gray-700 dark:text-gray-200">React Hook</h4>
			<h5 class="text-lg mt-0 mb-2 text-gray-600 dark:text-gray-300">
			  Pelajari React Hook dengan mudah dan terapkan pada proyek Anda.
			</h5>
		  </div>
		  <div class="w-full lg:w-6/12 px-4">
			<div class="grid grid-cols-2 gap-2 mb-6">
			  <div class="w-full px-4">
				<span class="block uppercase text-gray-700 text-sm font-bold mb-2 dark:text-gray-200">Useful Links</span>
				<ul class="list-unstyled">
				  <li>
					<a class="text-gray-600 hover:text-gray-800 block pb-2 text-sm dark:text-gray-300 dark:hover:text-gray-400" href="#hooks">Hook</a>
				  </li>
				  <li>
					<Link to="/about" class="text-gray-600 hover:text-gray-800 block pb-2 text-sm dark:text-gray-300 dark:hover:text-gray-400">About</Link>
				  </li>
				</ul>
			  </div>
			  <div class="w-full px-4">
				<span class="block uppercase text-gray-700 text-sm font-bold mb-2 dark:text-gray-200">Follow</span>
				<div class="mt-6 lg:mb-0 mb-6">
					<button onClick={() => { window.location.href = "https://github.com/fitri-hy"; }} class="bg-indigo-400 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-md outline-none focus:outline-none mr-2" type="button">
						<i class="fab fa-twitter"></i>
					</button>
					<button onClick={() => { window.location.href = "https://github.com/fitri-hy"; }} class="bg-indigo-400 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-md outline-none focus:outline-none mr-2" type="button">
						<i class="fab fa-facebook-square"></i>
					</button>
					<button onClick={() => { window.location.href = "https://github.com/fitri-hy"; }} class="bg-indigo-400 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-md outline-none focus:outline-none mr-2" type="button">
						<i class="fab fa-github"></i>
					</button>
				</div>
			  </div>
			</div>
		  </div>
		</div>
		<hr class="my-6 border-blueGray-300"/>
		<div class="flex flex-wrap items-center md:justify-between justify-center">
		  <div class="w-full md:w-4/12 px-4 mx-auto text-center">
			<div class="text-sm text-blueGray-500 py-1">
			  Copyright ©2024
			  <a href="https://github.com/fitri-hy" class="text-Gray-500 font-bold"> HyTech. </a>
			  All right reserved.
			</div>
		  </div>
		</div>
	  </div>
	</footer>
  );
};

export default Footer;
