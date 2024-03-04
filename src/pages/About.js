import React, { useState, useEffect } from 'react';
import '../assets/css/App.css';

function About() {
  	const [data, setData] = useState('');

	useEffect(() => {
	  fetch('code/structure.txt')
		.then(response => response.text())
		.then(data => setData(data));
	}, []);
  return (
    <section className="w-full pt-24 text-gray-700 dark:text-gray-200 bg-neutral-100 dark:bg-neutral-900 p-4">
		<div className="w-full h-36 md:h-64 bg-center bg-[url('https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg')]">
		</div>
		<div className="-top-20 relative bottom-0 w-full flex flex-col items-center">
			<img className="border-4 w-32 h-32 rounded-lg" src="https://camo.githubusercontent.com/f4289891f29849772b7f5484303c90045a74d795b6666ad9549b2ae8c4aa1227/68747470733a2f2f66697472692e6f727a706172746e6572732e636f6d2f7374617469632f6d656469612f696d672d6d6f62696c652e66666534653732656361353830333661666262362e6a7067" alt="profile"/>
			<h2 className="text-3xl font-bold text-gray-700">Fitri HY</h2>
			<p>@fitri-hy</p>
			<pre class="p-4 mt-4 w-full bg-gray-800 text-gray-200 rounded-md" style={{ whiteSpace: 'pre-wrap' }}>{data}</pre>
			<div className="w-full flex text-gray-600 flex-col items-center mt-12">
				<p className="font-bold text-sm">Don't be shy !</p>
				<h2 className="font-bold text-2xl">Get in Touch</h2>
				<p className="py-4 text-center">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas <br/>or opportunities to be part of your visions.</p>
			</div>
			<div className="w-full grid text-gray-600 grid-cols-2 gap-5 py-6">
				<div className="flex flex-col bg-slate-300 items-center rounded-md p-4">
					<h2 className="font-bold text-2xl">Email</h2>
					<p className="text-center mt-4">
						<a href="mailto:support@hy-tech.my.id">support@hy-tech.my.id</a>
					</p>
				</div>
				<div className="flex flex-col bg-slate-300 items-center rounded-md p-4">
					<h2 className="font-bold text-2xl">Phone</h2>
					<p className="text-center mt-4">
						<a href="tel:6281525977595">+62 815-2597-7595</a>
					</p>
				</div>
			</div>
		</div>
	</section>
  );
}

export default About;
