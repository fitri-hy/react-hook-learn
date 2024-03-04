import React from "react";
import LayoutEffectDom from "./code/LayoutEffectDom";
import LayoutEffectElemen from "./code/LayoutEffectElemen";
import LayoutEffectKomponen from "./code/LayoutEffectKomponen";
import '../assets/css/App.css';

function HookUseLayoutEffect() {
  return (
    <section className="pt-24 text-gray-700 dark:text-gray-200 bg-neutral-100 dark:bg-neutral-900 p-4">
		<div className="mx-auto max-w-7xl text-center md:w-11/12 xl:w-9/12 md:text-center">
			<h1 className="mb-8 text-center text-4xl font-extrabold leading-none tracking-normal text-gray-700 md:text-6xl md:tracking-tight dark:text-gray-200">
				<span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-500 to-purple-500 lg:inline">
				UseLayoutEffect Hook
				</span>
			</h1>
			<LayoutEffectDom />
			<LayoutEffectElemen />
			<LayoutEffectKomponen />
		</div>
	</section>
  );
}

export default HookUseLayoutEffect;
