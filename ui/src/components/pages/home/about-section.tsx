import SectionTitleBorder from "@/components/common/SectionTitleBorder";
import { buttonVariants } from "@/components/ui/button";
import SectionTitle from "@/components/ui/section-title";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

const AboutSection = () => {
	return (
		<section id="about-us" className="mx-auto max-w-5xl p-2 sm:p-6 md:py-8 lg:py-12 lg:px-8">
			<div className="flex py-8 md:items-center flex-col gap-6 lg:gap-16 md:flex-row">
				<div className="flex-1">
					<Image
						className="object-cover sm:!h-[450px] !w-full"
						src="/images/technology-in-the-workplace.png" width={500} height={400} priority alt="About Us" />
				</div>
				<article className="flex-1">
					<h2 className="text-2xl md:text-3xl text-primary capitalize leading-[40px] font-bold">About GGL Technologies</h2>
					<SectionTitleBorder />
					<p className="">
						Welcome to GGL Technologies a software, web and graphic design company based in Kenya. We specialize in providing innovative solutions to businesses of all sizes in various industries. Our team of experts has a wealth of experience and knowledge in software development, web design, and graphic design, allowing us to deliver top-quality products and services to our clients.
					</p>
					<p className="mt-4">
						Our software development services cover a wide range of technologies, including mobile apps, desktop applications, and web-based solutions. Our web design services include website design, website development, website maintenance, and website hosting. Our graphic design services cover logo design, branding, print design, and social media graphics.
					</p>

					<Link
						href="/#about-us"
						className={
							cn("mt-5", buttonVariants())
						}
					>Learn More</Link>
				</article>
			</div>
		</section>
	);
};

export default AboutSection;