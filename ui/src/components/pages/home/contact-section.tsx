import { Clock, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import React from 'react';
import SectionTitleBorder from '@/components/common/SectionTitleBorder'
import SectionTitle from "@/components/ui/section-title";

const ContactSection = () => {
	return (
		<div className="bg-primary text-white py-6 lg:py-12" id="contact-us">

			<div className={"flex items-center justify-center flex-col"}>
				<h2 className="text-2xl md:text-3xl text-white capitalize leading-[40px] font-bold">Contact Us</h2>
				<SectionTitleBorder/>
			</div>

			<h3 className="max-w-4xl text-center mx-auto mt-3 md:text-lg">Have a query, looking to explore possibilities
				or just want to say hello? Drop us a line! Our team is eager to assist, collaborate, and navigate the
				ever-evolving landscape of technology alongside you. Your digital journey begins with a simple
				message.</h3>

			<div className="mx-auto max-w-6xl flex-wrap flex justify-center px-4 gap-4 xl:gap-8 items-center py-6">
				<div className="flex items-center gap-4 flex-col sm:flex-row py-4 flex-1">
					<Clock className="h-14 w-14"/>
					<Link href="tel:+254704437066" className="flex flex-col items-center sm:items-start">
						<span className="text-lg">Mon-Fri 8am-5pm</span>
						<span className="text-2xl font-bold">+254704437066</span>
					</Link>
				</div>
				<div className="flex items-center gap-4 flex-col sm:flex-row py-4 flex-1">
					<Mail className="h-14 w-14"/>
					<Link href="mailto:grannexgrouplimited@com" className="flex flex-col items-center sm:items-start">
						<span className="text-lg">Support Mail</span>
						<span className="text-2xl font-bold">grannexgrouplimited@com</span>
					</Link>
				</div>
			</div>


		</div>
	);
};

export default ContactSection;