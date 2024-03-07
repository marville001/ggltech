import { Clock, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import React from 'react';
import SectionTitleBorder from '@/components/common/SectionTitleBorder'

const ContactSection = () => {
	return (
		<div className="bg-primary text-white py-6 lg:py-12" id="contact-us">

			<div className={"flex items-center justify-center flex-col"}>
				<h2 className="text-2xl md:text-3xl text-white capitalize leading-[40px] font-bold">Contact Us</h2>
				<SectionTitleBorder />
			</div>

			<div className="mx-auto max-w-6xl flex-wrap flex justify-center px-4 gap-4 xl:gap-8 items-center py-6">
				<div className="flex items-center gap-4 flex-col sm:flex-row py-4 flex-1">
					<Clock className="h-14 w-14" />
					<Link href="tel:+254704437066" className="flex flex-col items-center sm:items-start">
						<span className="text-lg">Mon-Fri 8am-5pm</span>
						<span className="text-2xl font-bold">+254704437066</span>
					</Link>
				</div>
				<div className="flex items-center gap-4 flex-col sm:flex-row py-4 flex-1">
					<Mail className="h-14 w-14" />
					<Link href="mailto:contact@ggltechnologies.com" className="flex flex-col items-center sm:items-start">
						<span className="text-lg">Support Mail</span>
						<span className="text-2xl font-bold">contact@ggltechnologies.com</span>
					</Link>
				</div>
				<div className="flex items-center gap-4 flex-col sm:flex-row py-4 flex-1">
					<MapPin className="h-14 w-14" />
					<div className="flex flex-col items-center sm:items-start">
						<span className="text-lg">Nairobi, Kenya</span>
						<span className="text-2xl font-bold">Kimathi Way Plaza</span>
					</div>
				</div>
			</div>

			
		</div>
	);
};

export default ContactSection;