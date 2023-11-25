import SectionTitle from "@/components/ui/section-title";
import services from "@/data/services.json";
import Image from "next/image";


const ServicesSection = () => {
	return (
		<section id="services" className="mx-auto max-w-7xl p-6 md:py-8 lg:py-12 lg:px-8">
			<SectionTitle
				title="Our Services"
				summary="We have 3+ years of experience in mobile and web app development that empowers businesses to strengthen their digital footprint in the highly competitive global marketplace."
			/>

			<div className="my-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
				{
					services?.map((service) => (
						<div key={service.id} className="shadow bg-white self-start border p-4 flex flex-col _items-center rounded-xl hover:scale-[102%] transition overflow-hidden group">
							<Image src={service?.image} width={300} height={200} alt={service.title} />

							<h3 className="text-[28px] font-semibold mt-4 text-primary">{service.title}</h3>
							<p className="mt-4">{service.summary}</p>
						</div>
					))
				}
			</div>
		</section>
	);
};

export default ServicesSection;