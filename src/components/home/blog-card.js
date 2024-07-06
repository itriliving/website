import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({
	link,
	image,
	tag,
	title,
	description,
	date,
}) {
	return (
		<Link href={link} className="flex flex-col justify-between">
			<div>
				<div className="relative w-full aspect-standard mb-4">
					<Image
						className="h-full object-cover w-full"
						src={image}
						height={1000}
						width={1000}
						alt="Blog Image"
					/>
					<div className="w-full h-full bg-gradient-to-b from-dark/80 via-transparent to-transparent absolute top-0 left-0"></div>
					<div className="absolute top-4 left-4 rounded-full border border-off-white uppercase text-xs font-medium text-off-white px-3 py-1">
						{tag}
					</div>
				</div>

				<p className="flex items-center text-base font-medium mb-2">
					<svg
						height={22}
						width={22}
						focusable="false"
						className="pr-2"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							fill="currentColor"
							d="M112 0c8.8 0 16 7.2 16 16V64H320V16c0-8.8 7.2-16 16-16s16 7.2 16 16V64h32c35.3 0 64 28.7 64 64v32 32V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 160 128C0 92.7 28.7 64 64 64H96V16c0-8.8 7.2-16 16-16zM416 192H32V448c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V192zM384 96H64c-17.7 0-32 14.3-32 32v32H416V128c0-17.7-14.3-32-32-32z"
						></path>
					</svg>
					<span>{date}</span>
				</p>
				<h3 className="text-lg font-body uppercase font-semibold tracking-normal mb-2 line-clamp-1">
					{title}
				</h3>
				<p className="mb-4 line-clamp-2">{description}</p>
			</div>
			<p className="flex gap-2 items-center underline font-semibold text-dark hover:text-dark/90 active:text-dark/80">
				<span>Read post</span>
				<svg
					height={17}
					width={17}
					focusable="false"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
				>
					<path
						fill="currentColor"
						d="M443.3 267.3c6.2-6.2 6.2-16.4 0-22.6l-176-176c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L393.4 240 16 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l377.4 0L244.7 420.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l176-176z"
					></path>
				</svg>
			</p>
		</Link>
	);
}
