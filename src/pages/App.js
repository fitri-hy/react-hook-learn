import React, {useEffect} from "react";
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Benefit from '../components/Benefit';
import '../assets/css/App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
	AOS.init();
  }, [])
  return (
    <section className="w-full pt-24 text-gray-700 dark:text-gray-200 bg-neutral-100 dark:bg-neutral-900 p-4">
		<Hero />
		<Featured />
		<Benefit />
	</section>
  );
}

export default App;
