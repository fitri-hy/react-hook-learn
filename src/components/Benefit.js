
const Benefit = () => {
  return (
	<div className="mt-32 sm:mt-26">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mx-auto max-w-2xl text-center">
				<h1 data-aos="zoom-in" className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-700 md:text-6xl md:tracking-tight dark:text-gray-200">
					<span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-indigo-500 to-purple-500 lg:inline">
Manfaat React Hook
					</span>
				</h1>
				<p data-aos="fade-up" className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
React Hook adalah fungsi khusus yang memungkinkan Anda "mengaitkan" keadaan dan logika lainnya ke komponen fungsional React tanpa harus menulis kelas. Mereka memiliki beberapa manfaat utama:
				</p>
			</div>
			<div className="mx-auto mt-6 sm:mt-16 lg:mt-16">
				<dl data-aos="zoom-in-up" className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-12">
					<div className="relative pl-20 p-4 rounded-lg shadow-md bg-white dark:bg-neutral-800">
					  <dt className="text-base font-semibold leading-7 text-gray-800 dark:text-white">
						<div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
						  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							  <path stroke="none" d="M0 0h24v24H0z" />
							  <path d="M4.876 13.61A4 4 0 1011 17h6" />
							  <path d="M15.066 20.502A4 4 0 1017 13c-.706 0-1.424.179-2 .5L12 8" />
							  <path d="M16 8a4 4 0 10-8 0c0 1.506.77 2.818 2 3.5L7 17" />
						  </svg>
						</div>
Mengurangi Boilerplate Code
					  </dt>
					  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-200">
Hook menghilangkan kebutuhan akan metode class lifecycle dan penghubung keadaan, yang secara signifikan mengurangi kode boilerplate. Ini membuat komponen Anda lebih mudah dibaca dan dirawat.
					  </dd>
					</div>
					<div className="relative pl-20 p-4 rounded-lg shadow-md bg-white dark:bg-neutral-800">
					  <dt className="text-base font-semibold leading-7 text-gray-800 dark:text-white">
						<div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
						  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							 <path stroke="none" d="M0 0h24v24H0z" />
							  <path d="M4.876 13.61A4 4 0 1011 17h6" />
							  <path d="M15.066 20.502A4 4 0 1017 13c-.706 0-1.424.179-2 .5L12 8" />
							  <path d="M16 8a4 4 0 10-8 0c0 1.506.77 2.818 2 3.5L7 17" />
						  </svg>
						</div>
 Manajemen Keadaan Terpusat
					  </dt>
					  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-200">
Hook memungkinkan Anda untuk mengelola keadaan di lokasi pusat, yang meningkatkan keterbacaan dan dapat membantu mengurangi bug terkait keadaan.
					  </dd>
					</div>
					<div className="relative pl-20 p-4 rounded-lg shadow-md bg-white dark:bg-neutral-800">
					  <dt className="text-base font-semibold leading-7 text-gray-800 dark:text-white">
						<div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
						  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							 <path stroke="none" d="M0 0h24v24H0z" />
							  <path d="M4.876 13.61A4 4 0 1011 17h6" />
							  <path d="M15.066 20.502A4 4 0 1017 13c-.706 0-1.424.179-2 .5L12 8" />
							  <path d="M16 8a4 4 0 10-8 0c0 1.506.77 2.818 2 3.5L7 17" />
						  </svg>
						</div>
Komponen Dapat Digunakan Kembali
					  </dt>
					  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-200">
 Hook dapat diekstrak menjadi komponen fungsional yang dapat digunakan kembali, memudahkan pembuatan komponen yang kompleks dan dapat digunakan kembali.
					  </dd>
					</div>
					<div className="relative pl-20 p-4 rounded-lg shadow-md bg-white dark:bg-neutral-800">
					  <dt className="text-base font-semibold leading-7 text-gray-800 dark:text-white">
						<div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
						  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							 <path stroke="none" d="M0 0h24v24H0z" />
							  <path d="M4.876 13.61A4 4 0 1011 17h6" />
							  <path d="M15.066 20.502A4 4 0 1017 13c-.706 0-1.424.179-2 .5L12 8" />
							  <path d="M16 8a4 4 0 10-8 0c0 1.506.77 2.818 2 3.5L7 17" />
						  </svg>
						</div>
Peningkatan Performa
					  </dt>
					  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-200">
React menggunakan teknik memoisasi untuk menghindari render ulang yang tidak perlu, dan hook memanfaatkannya, yang mengarah pada peningkatan performa aplikasi.
					  </dd>
					</div>
					<div className="relative pl-20 p-4 rounded-lg shadow-md bg-white dark:bg-neutral-800">
					  <dt className="text-base font-semibold leading-7 text-gray-800 dark:text-white">
						<div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
						  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							 <path stroke="none" d="M0 0h24v24H0z" />
							  <path d="M4.876 13.61A4 4 0 1011 17h6" />
							  <path d="M15.066 20.502A4 4 0 1017 13c-.706 0-1.424.179-2 .5L12 8" />
							  <path d="M16 8a4 4 0 10-8 0c0 1.506.77 2.818 2 3.5L7 17" />
						  </svg>
						</div>
Dukungan Keadaan Lokal
					  </dt>
					  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-200">
Hook useState memungkinkan Anda membuat keadaan lokal dalam komponen fungsional, yang hanya tersedia untuk komponen tersebut. Ini berguna untuk mengelola keadaan yang tidak perlu dibagikan dengan komponen lain.
					  </dd>
					</div>
					<div className="relative pl-20 p-4 rounded-lg shadow-md bg-white dark:bg-neutral-800">
					  <dt className="text-base font-semibold leading-7 text-gray-800 dark:text-white">
						<div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
						  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							 <path stroke="none" d="M0 0h24v24H0z" />
							  <path d="M4.876 13.61A4 4 0 1011 17h6" />
							  <path d="M15.066 20.502A4 4 0 1017 13c-.706 0-1.424.179-2 .5L12 8" />
							  <path d="M16 8a4 4 0 10-8 0c0 1.506.77 2.818 2 3.5L7 17" />
						  </svg>
						</div>
Mudah Diuji
					  </dt>
					  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-200">
Hook memudahkan pengujian komponen karena mereka tidak mengandalkan metode siklus hidup kelas, yang bisa rumit untuk diuji.
					  </dd>
					</div>
					<div className="relative pl-20 p-4 rounded-lg shadow-md bg-white dark:bg-neutral-800">
					  <dt className="text-base font-semibold leading-7 text-gray-800 dark:text-white">
						<div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
						  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							 <path stroke="none" d="M0 0h24v24H0z" />
							  <path d="M4.876 13.61A4 4 0 1011 17h6" />
							  <path d="M15.066 20.502A4 4 0 1017 13c-.706 0-1.424.179-2 .5L12 8" />
							  <path d="M16 8a4 4 0 10-8 0c0 1.506.77 2.818 2 3.5L7 17" />
						  </svg>
						</div>
Adopsi Bertahap
					  </dt>
					  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-200">
Anda dapat mengadopsi hook secara bertahap dalam basis kode Anda yang ada, memungkinkan transisi yang mulus ke pendekatan baru ini.
					  </dd>
					</div>
					<div className="relative pl-20 p-4 rounded-lg shadow-md bg-white dark:bg-neutral-800">
					  <dt className="text-base font-semibold leading-7 text-gray-800 dark:text-white">
						<div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
						  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							 <path stroke="none" d="M0 0h24v24H0z" />
							  <path d="M4.876 13.61A4 4 0 1011 17h6" />
							  <path d="M15.066 20.502A4 4 0 1017 13c-.706 0-1.424.179-2 .5L12 8" />
							  <path d="M16 8a4 4 0 10-8 0c0 1.506.77 2.818 2 3.5L7 17" />
						  </svg>
						</div>
Dukungan Komunitas Kuat
					  </dt>
					  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-200">
React Hook didukung oleh komunitas pengembang React yang besar, menyediakan sumber daya, dukungan, dan contoh kode yang melimpah.
					  </dd>
					</div>
					<div className="relative pl-20 p-4 rounded-lg shadow-md bg-white dark:bg-neutral-800">
					  <dt className="text-base font-semibold leading-7 text-gray-800 dark:text-white">
						<div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
						  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							 <path stroke="none" d="M0 0h24v24H0z" />
							  <path d="M4.876 13.61A4 4 0 1011 17h6" />
							  <path d="M15.066 20.502A4 4 0 1017 13c-.706 0-1.424.179-2 .5L12 8" />
							  <path d="M16 8a4 4 0 10-8 0c0 1.506.77 2.818 2 3.5L7 17" />
						  </svg>
						</div>
Dukungan Library Eksternal
					  </dt>
					  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-200">
Banyak library eksternal sekarang mendukung hook, yang memungkinkan Anda mengintegrasikan fitur mereka ke dalam komponen fungsional Anda dengan mudah.
					  </dd>
					</div>
					<div className="relative pl-20 p-4 rounded-lg shadow-md bg-white dark:bg-neutral-800">
					  <dt className="text-base font-semibold leading-7 text-gray-800 dark:text-white">
						<div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
						  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
							 <path stroke="none" d="M0 0h24v24H0z" />
							  <path d="M4.876 13.61A4 4 0 1011 17h6" />
							  <path d="M15.066 20.502A4 4 0 1017 13c-.706 0-1.424.179-2 .5L12 8" />
							  <path d="M16 8a4 4 0 10-8 0c0 1.506.77 2.818 2 3.5L7 17" />
						  </svg>
						</div>
Pembelajaran yang Mudah
					  </dt>
					  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-200">
Hook relatif mudah dipelajari dibandingkan dengan konsep React kelas, memudahkan pengembang baru untuk memulai dengan React.
					  </dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
  );
};

export default Benefit;
