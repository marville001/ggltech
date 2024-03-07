import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import React from 'react';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import SectionTitleBorder from "@/components/common/SectionTitleBorder";

const HeroSection = () => {
	return (
		<div className="mx-auto relative isolate flex max-w-7xl md:flex-row justify-between p-6 md:py-8 lg:py-12 lg:px-8 gap-4 flex-col-reverse items-center">
			{/*<div*/}
			{/*	className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"*/}
			{/*	aria-hidden="true"*/}
			{/*>*/}
			{/*	<div*/}
			{/*		className="relative left-[calc(50%-11rem)] opacity-[.1] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"*/}
			{/*		style={{*/}
			{/*			clipPath:*/}
			{/*				'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',*/}
			{/*		}}*/}
			{/*	/>*/}
			{/*</div>*/}

			<div className="flex-1">
				<h1 className="font-bold text-2xl md:text-4xl text-primary">Welcome to GGL Technologies</h1>

				<SectionTitleBorder />

				<p className="md:text-lg">We’re a software development company that loves finding solutions to complicated problems! We focus on the construction industry, but we also implement solutions for fintech, healthcare, IoT, startups and other industries. By creating fast and efficient mobile and web applications, we will help your business grow.</p>

				<div className="mt-4 flex gap-4">
					<Link href={"/about-us"} className={cn(buttonVariants(), "px-3 md:!px-8 flex-1 sm:flex-none h-auto items-center md:text-lg inline-flex gap-2 mt-4")}>
						<ChatBubbleLeftRightIcon className="w-4 md:w-6 h-4 md:h-6" />
						Learn More
					</Link>
					<Link href={"/contact-us"} className={cn(buttonVariants({ variant: "outline" }), "px-3 md:!px-8 flex-1 sm:flex-none h-auto items-center md:text-lg inline-flex gap-2 mt-4")}>
						<ChatBubbleLeftRightIcon className="w-4 md:w-6 h-4 md:h-6" />
						Contact Us
					</Link>
				</div>
			</div>
			<div className="flex-1">
				<Image width={300} height={300} className="!w-full !h-full" alt="GGL TECH" src={"/images/hero-section-graphic.svg"} />
			</div>
		</div>
	);
};

export default HeroSection;