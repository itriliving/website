'use client';

export default function GoToTop() {

	function handleClick() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
  
	return (
		<button
			onClick={handleClick}
			className="fixed bottom-4 right-8 lg:bottom-8 lg:right-12 opacity-40 hover:opacity-100 transition-opacity"
		>
			<svg
				className="h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 16 16"
			>
				<path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
			</svg>
		</button>
	);
}
