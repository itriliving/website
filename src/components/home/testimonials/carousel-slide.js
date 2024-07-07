import Image from "next/image";

export default function CarouselSlide({ text, name, img, work }) {
	return (
		<div class="flex flex-col items-center relative gap-8 my-slide">
			<blockquote class="font-heading text-2xl lg:text-3xl text-center tracking-tight">
				{text}
			</blockquote>
			<div class="flex items-center gap-4">
				<div class="w-16 h-16 rounded-full overflow-hidden relative">
          <Image className="w-full h-full absolute object-cover" src={img} alt="Image" height={100} width={100} />
        </div>
				<div class="flex flex-col items-start">
					<span class="text-lg font-medium text-dark">
						{name}
					</span>
					<span class="text-base text-gray-600">{work}</span>
				</div>
			</div>
		</div>
	);
}
