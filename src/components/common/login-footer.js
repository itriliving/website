import Image from "next/image";

export default function LoginFooter() {
	return (
		<div className="bg-dark py-12 lg:py-4 relative z-10" id="footer">
			<div className="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div className="flex flex-col gap-8 items-center lg:flex-row lg:gap-12">
					<div className="shrink-0 grow-0">
						<Image
							className="mb-4 w-auto h-auto"
							src="/img/itri-living-logo-white.png"
							alt="Logo"
							width={200}
							height={200}
						/>
					</div>
					<div className="flex items-center gap-4 text-sm text-off-white/90 shrink-0 grow justify-center flex-wrap lg:justify-start">
						<a
							target="_blank"
							className="shrink-0 hover:text-off-white/100"
							href="/code-of-conduct"
						>
							Code of Conduct
						</a>
						<div className="shrink-0">•</div>
						<a
							className="shrink-0 hover:text-off-white/100"
							href="/privacy-policy"
						>
							Privacy Policy
						</a>
						<div className="shrink-0">•</div>
						<a
							className="shrink-0 hover:text-off-white/100"
							href="/terms"
						>
							Terms &amp; Conditions
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
