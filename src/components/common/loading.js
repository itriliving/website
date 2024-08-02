import Image from 'next/image';

export default function Loading() {
	return (
		<div className="fixed top-0 right-0 w-full h-full flex items-center justify-center bg-medium z-50">
			<div className='flex flex-col items-center'>
				<div className="mb-4 w-44 h-auto">
					<Image
						src="/img/itri-logo-big.png"
						alt="Loading"
						width={200}
						height={200}
					/>
				</div>
				<p className="animate-[pulse_1s_ease-in-out_infinite]">
					Loading...
				</p>
			</div>
		</div>
	);
}
