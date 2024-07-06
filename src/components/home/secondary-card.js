import Link from 'next/link';
import Image from 'next/image';

export default function SecondaryCard({
	title,
	image,
	description,
	link,
	linkText,
}) {
	return (
		<div className="relative flex flex-col gap-4">
			<div className="relative aspect-square">
				<Image
					src={image}
					height={1000}
					width={1000}
					alt="Secondary Card"
				/>
			</div>
			<div className="flex grow flex-col justify-between">
				<div className="space-y-2">
					<h3 className="mt-2 font-body font-semibold uppercase tracking-normal text-xl">
						{title}
					</h3>
					<div className="content-wrapper">
						<p>{description}</p>
					</div>
				</div>
				<div className="mt-4">
					<Link
						href={link}
						className="font-semibold inline-flex items-center justify-center rounded-[3.125rem] active:outline-none active:duration-[50ms] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-40 ring-offset-transparent transition-colors duration-[250ms] text-base gap-2 text-dark hover:brightness-90 active:brightness-75 focus-visible:ring-dark underline"
					>
						<span>{linkText}</span>
						<div className="relative h-5 w-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
								/>
							</svg>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
