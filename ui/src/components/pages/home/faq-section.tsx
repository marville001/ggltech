import SectionTitle from "@/components/ui/section-title";
import React from 'react';

const FaqsSection = () => {
	return (
		<section className="mx-auto max-w-7xl p-6 md:py-8 lg:py-12 lg:px-8">
			<SectionTitle title="FAQs" summary="Get answers to the most asked development-related questions." />
		</section>
	);
};

export default FaqsSection;