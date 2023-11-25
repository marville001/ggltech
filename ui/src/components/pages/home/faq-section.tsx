"use client";

import SectionTitle from "@/components/ui/section-title";
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';

import faqs from "@/data/faqs.json";

const FaqsSection = () => {
	return (
		<section className="bg-slate-50">
			<div className="mx-auto max-w-2xl p-6 md:py-8 lg:py-12 lg:px-8">
				<SectionTitle title="FAQs" summary="Get answers to the most asked development-related questions." />

				<div className="py-6 lg:py-10 flex flex-col gap-4">
					{
						faqs?.map((faq, idx) => (
							<Disclosure key={idx} as="div" className="-mx-3">
								{({ open }) => (
									<>
										<Disclosure.Button className="flex w-full items-center justify-between p-2 text-base font-semibold leading-7 text-gray-900 bg-[#f2f2f2]">
											{faq.title}
											{
												open ? (
													<MinusIcon
														className={'h-5 w-5 flex-none'}
														aria-hidden="true"
													/>
												) : (
													<PlusIcon
														className={'h-5 w-5 flex-none'}
														aria-hidden="true"
													/>
												)
											}
										</Disclosure.Button>
										<Disclosure.Panel className="bg-[#fbfbfb] p-2">
											{faq.content}
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))
					}

				</div>
			</div>
		</section>
	);
};

export default FaqsSection;