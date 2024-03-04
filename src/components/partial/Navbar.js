import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import Switcher from "../Switcher";

const Navbar = () => {
  const [active, setActive] = useState('/');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full z-50 fixed border-b flex justify-between items-center py-4 px-6 text-gray-900 dark:text-white bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700">
        <Link to="/" className="flex items-center logo-container">
          <img className="h-8" src="images/logo.svg" alt="logo"/>
          <h1 className="text-lg font-bold text-gray-600 dark:text-gray-200">React Hook</h1>
        </Link>
		<div className="hidden md:block">
			<div className="flex">
				<Link to="/"
					className={active === '/' ? "text-indigo-500 border-b-4 border-indigo-500 px-2 py-1 me-6 font-bold dark:text-indigo-400 dark:border-indigo-400" : "text-gray-600 me-6 font-bold px-2 py-1 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-500"}
					onClick={() => setActive('/')}>
					Home
				</Link>
				<div className="flex flex-col">
					<button className="flex gap-2 hover:text-indigo-500 dark:hover:text-indigo-500 items-center text-gray-600 me-3 font-bold px-2 py-1 dark:text-gray-200" onClick={() => setIsOpen(!isOpen)}>
						Hooks
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
					</button>
					{isOpen && (
					<div className="absolute flex flex-col mt-16 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 shadow-lg rounded-md py-4 px-4 w-max">
						<Link to="/HookUseState"
							className={active === '/HookUseState' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 me-6 font-bold dark:text-indigo-400 dark:border-indigo-400 my-2" : "text-gray-600 me-6 font-bold px-2 py-1 dark:text-gray-200 border-s-4 border-gray-500 my-2 hover:text-indigo-500 dark:hover:text-indigo-500 hover:border-indigo-500"}
							onClick={() => setActive('/HookUseState')}>
							useState
						</Link>
						<Link to="/HookUseEffect"
							className={active === '/HookUseEffect' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 me-6 font-bold dark:text-indigo-400 dark:border-indigo-400 my-2" : "text-gray-600 me-6 font-bold px-2 py-1 dark:text-gray-200 border-s-4 border-gray-500 my-2 hover:text-indigo-500 dark:hover:text-indigo-500 hover:border-indigo-500"}
							onClick={() => setActive('/HookUseEffect')}>
							useEffect
						</Link>
						<Link to="/HookUseContext"
							className={active === '/HookUseContext' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 me-6 font-bold dark:text-indigo-400 dark:border-indigo-400 my-2" : "text-gray-600 me-6 font-bold px-2 py-1 dark:text-gray-200 border-s-4 border-gray-500 my-2 hover:text-indigo-500 dark:hover:text-indigo-500 hover:border-indigo-500"}
							onClick={() => setActive('/HookUseContext')}>
							useContext
						</Link>
						<Link to="/HookUseReducer"
							className={active === '/HookUseReducer' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 me-6 font-bold dark:text-indigo-400 dark:border-indigo-400 my-2" : "text-gray-600 me-6 font-bold px-2 py-1 dark:text-gray-200 border-s-4 border-gray-500 my-2 hover:text-indigo-500 dark:hover:text-indigo-500 hover:border-indigo-500"}
							onClick={() => setActive('/HookUseReducer')}>
							useReducer
						</Link>
						<Link to="/HookUseRef"
							className={active === '/HookUseRef' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 me-6 font-bold dark:text-indigo-400 dark:border-indigo-400 my-2" : "text-gray-600 me-6 font-bold px-2 py-1 dark:text-gray-200 border-s-4 border-gray-500 my-2 hover:text-indigo-500 dark:hover:text-indigo-500 hover:border-indigo-500"}
							onClick={() => setActive('/useRef')}>
							useRef
						</Link>
						<Link to="/HookUseMemo"
							className={active === '/HookUseMemo' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 me-6 font-bold dark:text-indigo-400 dark:border-indigo-400 my-2" : "text-gray-600 me-6 font-bold px-2 py-1 dark:text-gray-200 border-s-4 border-gray-500 my-2 hover:text-indigo-500 dark:hover:text-indigo-500 hover:border-indigo-500"}
							onClick={() => setActive('/HookUseMemo')}>
							useMemo
						</Link>
						<Link to="/HookUseCallback"
							className={active === '/HookUseCallback' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 me-6 font-bold dark:text-indigo-400 dark:border-indigo-400 my-2" : "text-gray-600 me-6 font-bold px-2 py-1 dark:text-gray-200 border-s-4 border-gray-500 my-2 hover:text-indigo-500 dark:hover:text-indigo-500 hover:border-indigo-500"}
							onClick={() => setActive('/HookUseCallback')}>
							useCallback
						</Link>
						<Link to="/HookUseLayoutEffect"
							className={active === '/HookUseLayoutEffect' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 me-6 font-bold dark:text-indigo-400 dark:border-indigo-400 my-2" : "text-gray-600 me-6 font-bold px-2 py-1 dark:text-gray-200 border-s-4 border-gray-500 my-2 hover:text-indigo-500 dark:hover:text-indigo-500 hover:border-indigo-500"}
							onClick={() => setActive('/HookUseLayoutEffect')}>
							useLayoutEffect
						</Link>
						<Link to="/HookUseImperativeHandle"
							className={active === '/HookUseImperativeHandle' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 me-6 font-bold dark:text-indigo-400 dark:border-indigo-400 my-2" : "text-gray-600 me-6 font-bold px-2 py-1 dark:text-gray-200 border-s-4 border-gray-500 my-2 hover:text-indigo-500 dark:hover:text-indigo-500 hover:border-indigo-500"}
							onClick={() => setActive('/HookUseImperativeHandle')}>
							useImperativeHandle
						</Link>
					</div>
					)}
				</div>
				<Link to="/about"
					className={active === '/about' ? "text-indigo-500 border-b-4 border-indigo-500 px-2 py-1 me-6 font-bold dark:text-indigo-400 dark:border-indigo-400" : "text-gray-600 me-6 font-bold px-2 py-1 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-500"}
					onClick={() => setActive('/about')}>
					About
				</Link>
			</div>
		</div>
		<div className="flex gap-4">
			<button className="block md:hidden" onClick={toggleMenu}>
			  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
			  </svg>
			</button>
			<Switcher/>
		</div>
      </nav>

      {/* Menu Mobile */}
      <div className={`${menuOpen ? "fixed top-0 right-0" : "fixed top-0 -right-full"} w-2/1 h-full bg-white dark:bg-neutral-800 z-50 border border-gray-300 dark:border-neutral-700 shadow-lg transition-all duration-500`} ref={menuRef}>
        <div className="flex flex-col justify-between p-6">
			<button className="fixed block md:hidden" onClick={toggleMenu}>
			  <svg className="h-6 w-6 text-rose-500"xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
				<path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
			  </svg>
			</button>
			<div className="h-full flex flex-col gap-4 pt-12 pb-6">
				<Link to="/"
				  className={active === '/' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 font-bold dark:text-indigo-400 dark:border-indigo-400" : "text-gray-600 font-bold px-2 py-1 dark:text-gray-200 dark:hover:text-indigo-500"}
				  onClick={() => {
					toggleMenu();
					setActive('/');
				  }}>
				  Home
				</Link>
				<Link to="/HookUseState"
				  className={active === '/HookUseState' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 font-bold dark:text-indigo-400 dark:border-indigo-400" : "text-gray-600 font-bold px-2 py-1 dark:text-gray-200 dark:hover:text-indigo-500"}
				  onClick={() => {
					toggleMenu();
					setActive('/HookUseState');
				  }}>
				  useState
				</Link>
				<Link to="/HookUseEffect"
				  className={active === '/HookUseEffect' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 font-bold dark:text-indigo-400 dark:border-indigo-400" : "text-gray-600 font-bold px-2 py-1 dark:text-gray-200 dark:hover:text-indigo-500"}
				  onClick={() => {
					toggleMenu();
					setActive('/HookUseEffect');
				  }}>
				  useEffect
				</Link>
				<Link to="/HookUseContext"
				  className={active === '/HookUseContext' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 font-bold dark:text-indigo-400 dark:border-indigo-400" : "text-gray-600 font-bold px-2 py-1 dark:text-gray-200 dark:hover:text-indigo-500"}
				  onClick={() => {
					toggleMenu();
					setActive('/HookUseContext');
				  }}>
				  useContext
				</Link>
				<Link to="/HookUseReducer"
				  className={active === '/HookUseReducer' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 font-bold dark:text-indigo-400 dark:border-indigo-400" : "text-gray-600 font-bold px-2 py-1 dark:text-gray-200 dark:hover:text-indigo-500"}
				  onClick={() => {
					toggleMenu();
					setActive('/HookUseReducer');
				  }}>
				  useReducer
				</Link>
				<Link to="/HookUseRef"
				  className={active === '/HookUseRef' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 font-bold dark:text-indigo-400 dark:border-indigo-400" : "text-gray-600 font-bold px-2 py-1 dark:text-gray-200 dark:hover:text-indigo-500"}
				  onClick={() => {
					toggleMenu();
					setActive('/HookUseRef');
				  }}>
				  useRef
				</Link>
				<Link to="/HookUseMemo"
				  className={active === '/HookUseMemo' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 font-bold dark:text-indigo-400 dark:border-indigo-400" : "text-gray-600 font-bold px-2 py-1 dark:text-gray-200 dark:hover:text-indigo-500"}
				  onClick={() => {
					toggleMenu();
					setActive('/HookUseMemo');
				  }}>
				  useMemo
				</Link>
				<Link to="/HookUseCallback"
				  className={active === '/HookUseCallback' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 font-bold dark:text-indigo-400 dark:border-indigo-400" : "text-gray-600 font-bold px-2 py-1 dark:text-gray-200 dark:hover:text-indigo-500"}
				  onClick={() => {
					toggleMenu();
					setActive('/HookUseCallback');
				  }}>
				  useCallback
				</Link>
				<Link to="/HookUseLayoutEffect"
				  className={active === '/HookUseLayoutEffect' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 font-bold dark:text-indigo-400 dark:border-indigo-400" : "text-gray-600 font-bold px-2 py-1 dark:text-gray-200 dark:hover:text-indigo-500"}
				  onClick={() => {
					toggleMenu();
					setActive('/HookUseLayoutEffect');
				  }}>
				  useLayoutEffect
				</Link>
				<Link to="/HookUseImperativeHandle"
				  className={active === '/HookUseImperativeHandle' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 font-bold dark:text-indigo-400 dark:border-indigo-400" : "text-gray-600 font-bold px-2 py-1 dark:text-gray-200 dark:hover:text-indigo-500"}
				  onClick={() => {
					toggleMenu();
					setActive('/HookUseImperativeHandle');
				  }}>
				  useImperativeHandle
				</Link>
				<Link to="/about"
				  className={active === '/about' ? "text-indigo-500 border-s-4 border-indigo-500 px-2 py-1 font-bold dark:text-indigo-400 dark:border-indigo-400" : "text-gray-600 font-bold px-2 py-1 dark:text-gray-200  dark:hover:text-indigo-500"}
				  onClick={() => {
					toggleMenu();
					setActive('/about');
				  }}>
				  About
				</Link>
			</div>
        </div>
		<a className="absolute w-full bottom-0 flex gap-2 justify-center p-6 text-indigo-400" onClick={() => { window.location.href = "https://github.com/fitri-hy"; }}>
			<span>
				<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
					<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
				</svg>
			</span>
			<span>
				<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
					<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/>
				</svg>
			</span>
			<span>
				<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
					<path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"/>
				</svg>
			</span>
			<span>
				<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
					<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
				</svg>
			</span>
		</a>
      </div>
    </>
  );
};

export default Navbar;
