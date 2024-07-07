import PlusIcon from "./plus-icon";

export default function FAQs() {
  return (
		<section class="relative border-dark py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24 bg-transparent ">
			<div class="mx-auto px-[6.67vw] sm:px-[12vw] md:px-10 lg:px-12 md:max-w-4xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div class="flex flex-col gap-12 max-w-4xl mx-auto items-center">
					<div>
						<div class="max-w-lg lg:max-w-2xl text-center undefined">
							<h2 class="font-heading tracking-tight text-dark text-4xl lg:text-5xl">
								<span>Got questions?</span>
							</h2>
							<div class="text-lg prose-a:text-dark prose-a:font-medium prose-a:underline hover:prose-a:text-light mt-4 lg:text-xl">
								<p>
									If our Membership FAQs are not enough, feel
									free to book a call with us and we’ll be
									happy to assist you!
								</p>
							</div>
							<div class="inline-block grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-6">
								<a
									class="font-semibold inline-flex items-center justify-center rounded-[3.125rem] active:outline-none active:duration-[50ms] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer disabled:pointer-events-none disabled:opacity-40 ring-offset-transparent transition-colors duration-[250ms] min-w-[10rem] text-base gap-2 px-6 py-[11px] text-dark border border-dark hover:bg-dark/5 active:bg-dark/10 focus-visible:ring-black md:max-w-sm"
									target="_blank"
									href="/membership-schedule-meeting"
								>
									<span>Request a call</span>
								</a>
							</div>
						</div>
					</div>
					<div class="border-y border-dark divide-y divide-dark w-full">
						<div data-headlessui-state="">
							<button
								class="transition-color duration-200 text-left text-base px-2 py-4 text-dark flex items-center justify-between w-full xl:text-lg hover:bg-dark/[.03] data-[open]:bg-medium"
								id="headlessui-disclosure-button-:r1p:"
								type="button"
								aria-expanded="false"
								data-headlessui-state=""
							>
								<span class="pr-4 data-[open]:font-semibold data-[not-open]:font-medium">
									What is Outsite? How does it work?
								</span>
								<PlusIcon />
							</button>
						</div>
						<div data-headlessui-state="">
							<button
								class="transition-color duration-200 text-left text-base px-2 py-4 text-dark flex items-center justify-between w-full xl:text-lg hover:bg-dark/[.03] data-[open]:bg-medium"
								id="headlessui-disclosure-button-:r1q:"
								type="button"
								aria-expanded="false"
								data-headlessui-state=""
							>
								<span class="pr-4 data-[open]:font-semibold data-[not-open]:font-medium">
									Do I need to be a Member to stay at Outsite?
								</span>
								<PlusIcon />
							</button>
						</div>
						<div data-headlessui-state="">
							<button
								class="transition-color duration-200 text-left text-base px-2 py-4 text-dark flex items-center justify-between w-full xl:text-lg hover:bg-dark/[.03] data-[open]:bg-medium"
								id="headlessui-disclosure-button-:r1r:"
								type="button"
								aria-expanded="false"
								data-headlessui-state=""
							>
								<span class="pr-4 data-[open]:font-semibold data-[not-open]:font-medium">
									What are the benefits of being a Member?
								</span>
								<PlusIcon />
							</button>
						</div>
						<div data-headlessui-state="">
							<button
								class="transition-color duration-200 text-left text-base px-2 py-4 text-dark flex items-center justify-between w-full xl:text-lg hover:bg-dark/[.03] data-[open]:bg-medium"
								id="headlessui-disclosure-button-:r1s:"
								type="button"
								aria-expanded="false"
								data-headlessui-state=""
							>
								<span class="pr-4 data-[open]:font-semibold data-[not-open]:font-medium">
									How does Outsite vet Members?
								</span>
								<PlusIcon />
							</button>
						</div>
						<div data-headlessui-state="">
							<button
								class="transition-color duration-200 text-left text-base px-2 py-4 text-dark flex items-center justify-between w-full xl:text-lg hover:bg-dark/[.03] data-[open]:bg-medium"
								id="headlessui-disclosure-button-:r1t:"
								type="button"
								aria-expanded="false"
								data-headlessui-state=""
							>
								<span class="pr-4 data-[open]:font-semibold data-[not-open]:font-medium">
									How does Membership Renewal work?
								</span>
								<PlusIcon />
							</button>
						</div>
						<div data-headlessui-state="">
							<button
								class="transition-color duration-200 text-left text-base px-2 py-4 text-dark flex items-center justify-between w-full xl:text-lg hover:bg-dark/[.03] data-[open]:bg-medium"
								id="headlessui-disclosure-button-:r1u:"
								type="button"
								aria-expanded="false"
								data-headlessui-state=""
							>
								<span class="pr-4 data-[open]:font-semibold data-[not-open]:font-medium">
									Can I get a refund for my Membership?
								</span>
								<PlusIcon />
							</button>
						</div>
						<div data-headlessui-state="">
							<button
								class="transition-color duration-200 text-left text-base px-2 py-4 text-dark flex items-center justify-between w-full xl:text-lg hover:bg-dark/[.03] data-[open]:bg-medium"
								id="headlessui-disclosure-button-:r1v:"
								type="button"
								aria-expanded="false"
								data-headlessui-state=""
							>
								<span class="pr-4 data-[open]:font-semibold data-[not-open]:font-medium">
									How can I upgrade from annual Membership to
									lifetime?
								</span>
								<PlusIcon />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
