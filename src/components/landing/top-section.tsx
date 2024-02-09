/** @format */

export default function TopSection() {
	return (
		<div className='text-center flex justify-center flex-col'>
			<div className='font-semibold dark:text-white'>
				<h1 className='text-5xl md:text-7xl font-bold'>
					<span className='text-primary-500 dark:text-primary_light'>Passwordless</span>{' '}
					is
				</h1>
				<h1 className='text-5xl md:text-7xl font-bold '>the future.</h1>
			</div>

			<div className='mt-12 text-sm md:text-xl text-gray-700 dark:text-gray-300'>
				<p className='font-regular '>
					Signing in without a password is faster, safer and easier.
				</p>
				<p className='font-regular '>
					With Auth Armor, give your users a glimpse into the future.
				</p>
			</div>

			<div className='flex items-center justify-center mt-16'>
				<button className='bg-primary-900 dark:bg-bg_btn dark:text-black hover:bg-gray-800 text-white font-semibold text-sm md:text-lg px-6 md:px-8 rounded py-4 mr-2 font-sans  h-[100%]'>
					Get started for free
				</button>
				<button className='bg-primary-500 dark:bg-primary_light hover:bg-primary-600 text-white font-semibold  text-sm md:text-lg px-6 md:px-8 rounded  py-4 ml-2  h-[100%]'>
					Book a demo
				</button>
			</div>
		</div>
	);
}
