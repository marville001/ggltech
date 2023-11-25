import Link from "next/link";

const page = () => {
	return (
		<main>
			<section className="min-h-[60vh] flex justify-center items-center flex-col wrapper">
				<h1 className="text-[120px] md:text-[150px] font-bold">404</h1>
				<p className="max-w-[500px] text-[20px] text-center">We couldn't locate that page, sorry about that! Please check the URL and try again, or you can head back to our
					<Link href="/" className="text-primary ml-2 capitalize underline">Homepage</Link>
					.</p>
			</section>
		</main>
	);
};

export default page;