import Link from "next/link";
import Image from "next/image";

export default function LoginHeader() {
	return (
		<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
			<Link className="relative block pt-6" href={'/'}>
				<Image
					className="my-2"
					src="/img/itri-living-logo.png"
					alt="Itri Living Logo"
					width={160}
					height={100}
				/>
			</Link>
		</div>
	);
}
