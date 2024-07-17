import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
		<Link href={'/'}>
			<Image
				className="my-2 w-auto h-auto"
				src="/img/itri-living-logo.png"
				alt="Itri Living Logo"
				width={160}
				height={100}
			/>
		</Link>
  );
}
