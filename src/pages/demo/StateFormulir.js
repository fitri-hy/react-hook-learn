import React, { useState } from "react";
import '../../assets/css/App.css';

function StateWarna() {
  const [formData, setFormData] = useState({});
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  
  return (
    <section className="h-screen pt-24 text-gray-700 dark:text-gray-200 bg-neutral-100 dark:bg-neutral-900">
		<div className="mx-auto max-w-7xl md:w-11/12 xl:w-9/12 flex flex-col items-center mt-12">
			<h1 className="mb-8 text-center text-4xl font-extrabold leading-none tracking-normal text-gray-700 md:text-6xl md:tracking-tight dark:text-gray-200">
				<span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-500 to-purple-500 lg:inline">
					useState<br/>Formulir
				</span>
			</h1>
			<div className="w-full flex flex-col items-center bg-white dark:bg-neutral-800 shadow-lg py-12 px-4 rounded-lg mt-12">
				<h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">Formulir Pendaftaran</h1>
				<form onSubmit={handleSubmit}>
					<div className="md:flex mb-4">
						<div className="md:flex-1 md:pr-3">
							<label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold pb-2">Nama</label>
							<input className="w-full bg-gray-200 dark:bg-neutral-900 shadow-inner p-2 rounded-md border-0" type="text" id="nama" name="Nama" onChange={handleChange} value={formData.nama}/>
						</div>
						<div className="md:flex-1 md:pr-3">
							<label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold pb-2">Nama</label>
							<input className="w-full bg-gray-200 dark:bg-neutral-900 shadow-inner p-2 rounded-md border-0" type="email" id="email" name="Email" onChange={handleChange} value={formData.email} />
						</div>
					</div>
					<div className="md:flex mb-4">
						<div className="md:flex-1 md:pr-3">
							<label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold pb-2">Password</label>
							<input className="w-full bg-gray-200 dark:bg-neutral-900 shadow-inner p-2 rounded-md border-0" type="password" id="password" name="Password" onChange={handleChange} value={formData.password}/>
						</div>
					</div>
					<button className="px-4 py-2 bg-indigo-400 rounded-md text-gray-100" type="submit">Daftar</button>
				</form>
				<div className="mt-8">
					<table class="min-w-full">
						<tbody>
							<tr class="bg-gray-100 border-b">
							  {Object.keys(formData).map((key) => (
								<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" key={key}>{key}: {formData[key]}</td>
							  ))}
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</section>
  );
}

export default StateWarna;
