import SectionTitle from "@/components/ui/section-title";
import React from 'react';

const ServicesSection = () => {
	return (
		<section className="mx-auto max-w-7xl p-6 md:py-8 lg:py-12 lg:px-8">
			<SectionTitle
				title="Our Services"
				summary="We have 3+ years of experience in mobile and web app development that empowers businesses to strengthen their digital footprint in the highly competitive global marketplace."
			/>
		</section>
	);
};

export default ServicesSection;