'use client';

export default function UserIcon({ initialLetters }) {
	return (
		<div className="h-8 w-8 relative">
			<div className="flex items-center justify-center h-full w-full text-dark font-medium text-sm uppercase">
				{initialLetters}
			</div>
		</div>
	);
}
