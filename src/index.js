import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import About from './pages/About';
import HookUseState from './pages/HookUseState';
import HookUseEffect from './pages/HookUseEffect';
import HookUseContext from './pages/HookUseContext';
import HookUseReducer from './pages/HookUseReducer';
import HookUseRef from './pages/HookUseRef';
import HookUseMemo from './pages/HookUseMemo';
import HookUseCallback from './pages/HookUseCallback';
import HookUseLayoutEffect from './pages/HookUseLayoutEffect';
import HookUseImperativeHandle from './pages/HookUseImperativeHandle';
import Navbar from './components/partial/Navbar';
import Footer from './components/Footer';
import StatePenghitung from './pages/demo/StatePenghitung';
import StateWarna from './pages/demo/StateWarna';
import StateFormulir from './pages/demo/StateFormulir';
import EffectReset from './pages/demo/EffectReset';
import EffectApi from './pages/demo/EffectApi';
import EffectDom from './pages/demo/EffectDom';
import './assets/css/Base.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	  <React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/HookUseState" element={<HookUseState />} />
				<Route path="/HookUseEffect" element={<HookUseEffect />} />
				<Route path="/HookUseContext" element={<HookUseContext />} />
				<Route path="/HookUseReducer" element={<HookUseReducer />} />
				<Route path="/HookUseRef" element={<HookUseRef />} />
				<Route path="/HookUseMemo" element={<HookUseMemo />} />
				<Route path="/HookUseCallback" element={<HookUseCallback />} />
				<Route path="/HookUseLayoutEffect" element={<HookUseLayoutEffect />} />
				<Route path="/HookUseImperativeHandle" element={<HookUseImperativeHandle />} />
				<Route path="/about" element={<About />} />
				<Route path="/penghitung" element={<StatePenghitung />} />
				<Route path="/warna" element={<StateWarna />} />
				<Route path="/formulir" element={<StateFormulir />} />
				<Route path="/mengatur-ulang" element={<EffectReset />} />
				<Route path="/mengatur-api" element={<EffectApi />} />
				<Route path="/memperbaharui-dom" element={<EffectDom />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
