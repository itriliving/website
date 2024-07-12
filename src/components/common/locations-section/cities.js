'use client';
import { useState, useEffect } from 'react';

export default function Cities({ scrollNext, scrollPrev }) {
	const [selected, setSelected] = useState(0);

	useEffect(() => {});

	return (
		<div className="flex gap-6 -mx-6 px-6 my-10 border-b border-extra-light overflow-x-auto no-scrollbar sm:mx-0 sm:px-0">
			<button className="py-4 uppercase shrink-0 grow font-medium text-sm xl:text-base border-b-2 focus:outline-none hover:text-dark">
				Nador
			</button>
			<button className="py-4 uppercase shrink-0 grow font-medium text-sm xl:text-base border-b-2 focus:outline-none hover:text-dark">
				Dakhla
			</button>
			<button className="py-4 uppercase shrink-0 grow font-medium text-sm xl:text-base border-b-2 focus:outline-none hover:text-dark">
				Merzouga
			</button>
			<button className="py-4 uppercase shrink-0 grow font-medium text-sm xl:text-base border-b-2 focus:outline-none hover:text-dark">
				Sierra leone
			</button>
			<button className="py-4 uppercase shrink-0 grow font-medium text-sm xl:text-base border-b-2 focus:outline-none hover:text-dark">
				Marrakesh
			</button>
		</div>
	);
}
