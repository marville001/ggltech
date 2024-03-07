import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
	return (
		<div className="bg-primary py-4 px-4">
			<div className="mx-auto max-w-[1240px] py-8">
				<div className="flex justify-between items-start flex-col gap-10 px-2 md:flex-row">
					<ul className="flex flex-col gap-3">
						<li>
							<Link className="text-white font-urbanist leading[26px] text-[16px]" href="/#team">Our Team</Link>
						</li>
						<li>
							<Link className="text-white font-urbanist leading[26px] text-[16px]" href="/#contact-us">Contact Us</Link>
						</li>
						<li>
							<Link className="text-white font-urbanist leading[26px] text-[16px]" href="/#faqs">FAQs</Link>
						</li>
						<li>
							<Link className="text-white font-urbanist leading[26px] text-[16px]" href="/#about-us">About GGL</Link>
						</li>
					</ul>

					<div>
						<h3 className="font-[700] text-[28px] md:text-[42px] font-urbanist capitalize max-w-[450px] text-white">
							Subscribe to Our Newsletter
						</h3>
						<div className="bg-white p-1.5 flex rounded-full mt-5">
							<input
								type="text"
								className="flex-1 w-full px-3 bg-transparent border-none focus:outline-none focus:ring-0 focus:border-none"
								placeholder="Enter your Email"
							/>
							<Button className="rounded-full uppercase font-[700] !px-6 !h-none">Subscribe</Button>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<Link href={""} scroll={false}>
							<svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 55 60" fill="none">
								<path d="M51.1852 25.0334C54.3854 39.9209 46.2643 54.242 33.0462 57.0205C19.8282 59.799 6.51847 49.9827 3.31824 35.0952C0.117998 20.2078 8.23907 5.88665 21.4572 3.10815C34.6752 0.32965 47.9849 10.1459 51.1852 25.0334Z" fill="white" />
								<path d="M34.6797 18.7398L17.945 20.4987C14.6617 20.8438 12.2875 23.8591 12.6422 27.2336L13.5459 35.8314C13.9005 39.2059 16.8497 41.6617 20.133 41.3166L36.8677 39.5577C40.1511 39.2126 42.5252 36.1973 42.1705 32.8229L41.2668 24.225C40.9122 20.8505 37.963 18.3947 34.6797 18.7398ZM31.7971 29.9897L24.373 34.6492C24.1752 34.7733 23.9179 34.6424 23.8929 34.4049L23.0612 26.4914C23.0358 26.2506 23.2667 26.0685 23.4871 26.1554L31.743 29.4094C31.9884 29.5061 32.0205 29.8495 31.7971 29.9897Z" fill="currentColor"

									className="text-primary"
								/>
							</svg>
						</Link>
						<Link href={""} scroll={false}>
							<svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 55 60" fill="none">
								<path d="M52.2106 30.1195C52.2457 45.347 41.3245 57.6667 27.8176 57.6363C14.3107 57.6059 3.33278 45.2369 3.29776 30.0093C3.26273 14.7818 14.1839 2.46214 27.6908 2.49255C41.1977 2.52296 52.1756 14.892 52.2106 30.1195Z" fill="white" />
								<path d="M30.3921 15.8425L35.4943 16.3788C35.4943 16.3788 34.5218 22.9042 41.8433 24.1383L41.3108 29.2046C41.3108 29.2046 37.3522 29.039 34.4515 26.2996L33.4074 36.7648C33.2109 38.6348 32.4643 40.4045 31.262 41.8502C30.0597 43.2959 28.4558 44.3526 26.653 44.8868C24.8502 45.4209 22.9295 45.4086 21.1337 44.8512C19.338 44.2938 17.7478 43.2165 16.5643 41.7554C15.3807 40.2944 14.657 38.5152 14.4846 36.6429C14.3122 34.7705 14.6988 32.8891 15.5956 31.2364C16.4924 29.5838 17.8591 28.2342 19.5229 27.3583C21.1867 26.4823 23.0728 26.1194 24.9428 26.3153L26.2706 26.4549L25.7262 31.6346C24.8898 31.2741 23.961 31.1869 23.0722 31.3854C22.1833 31.584 21.3799 32.0582 20.7765 32.7404C20.1731 33.4225 19.8006 34.2779 19.712 35.1843C19.6235 36.0907 19.8234 37.0019 20.2834 37.788C20.7433 38.5741 21.4398 39.1948 22.2734 39.5616C23.1069 39.9285 24.0351 40.0227 24.9254 39.8309C25.8157 39.639 26.6227 39.1709 27.2312 38.4933C27.8398 37.8158 28.2188 36.9633 28.3142 36.0576L30.3921 15.8425Z" fill="currentColor"

									className="text-primary"
								/>
							</svg>
						</Link>
						<Link href={""} scroll={false}>
							<svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 55 60" fill="none">
								<path d="M51.191 24.9099C54.3912 39.7973 46.2702 54.1184 33.0521 56.8969C19.834 59.6754 6.52433 49.8592 3.3241 34.9717C0.123858 20.0842 8.24493 5.76312 21.463 2.98462C34.6811 0.206115 47.9908 10.0224 51.191 24.9099Z" fill="white" />
								<path fillRule="evenodd" clipRule="evenodd" d="M14.2396 31.344C13.7054 26.2617 13.4383 23.7206 14.457 21.763C14.9119 20.8888 15.5383 20.1153 16.2988 19.4886C18.0018 18.0851 20.543 17.818 25.6253 17.2839C30.7076 16.7497 33.2488 16.4826 35.2064 17.5013C36.0805 17.9562 36.8541 18.5826 37.4808 19.3431C38.8842 21.0461 39.1513 23.5873 39.6855 28.6696C40.2197 33.7519 40.4867 36.293 39.4681 38.2507C39.0132 39.1248 38.3868 39.8984 37.6263 40.5251C35.9232 41.9285 33.3821 42.1956 28.2998 42.7298C23.2175 43.2639 20.6763 43.531 18.7187 42.5123C17.8445 42.0574 17.071 41.431 16.4443 40.6705C15.0408 38.9675 14.7738 36.4264 14.2396 31.344ZM33.5486 29.315C33.9309 32.9528 31.2919 36.2118 27.6541 36.5941C24.0162 36.9765 20.7573 34.3374 20.3749 30.6996C19.9926 27.0618 22.6316 23.8028 26.2694 23.4205C29.9073 23.0381 33.1662 25.6772 33.5486 29.315ZM27.4198 34.3656C29.8269 34.1127 31.5731 31.9563 31.3201 29.5492C31.0671 27.1422 28.9107 25.396 26.5037 25.649C24.0966 25.902 22.3504 28.0584 22.6034 30.4654C22.8564 32.8724 25.0128 34.6186 27.4198 34.3656ZM33.0117 23.9309C33.8843 23.8392 34.5173 23.0575 34.4256 22.1849C34.3339 21.3123 33.5522 20.6792 32.6796 20.7709C31.807 20.8627 31.174 21.6444 31.2657 22.517C31.3574 23.3896 32.1391 24.0226 33.0117 23.9309Z" fill="currentColor"

									className="text-primary"
								/>
							</svg>
						</Link>
						<Link href={""} scroll={false}>
							<svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 56 60" fill="none">
								<path d="M52.2165 29.9959C52.2515 45.2234 41.3304 57.5431 27.8235 57.5127C14.3166 57.4823 3.33864 45.1133 3.30362 29.8858C3.26859 14.6583 14.1897 2.3386 27.6966 2.36901C41.2036 2.39942 52.1815 14.7684 52.2165 29.9959Z" fill="white" />
								<path d="M28.2717 44.8474L29.6804 31.4447L34.4056 31.9413L35.662 26.7924L30.2293 26.2214L30.5798 22.8865C30.7387 21.3742 31.2881 20.3901 33.5659 20.6295L36.4712 20.9335L36.9622 16.2619C36.4664 16.1455 34.7567 15.822 32.7506 15.6111C28.5619 15.1709 25.4385 17.3036 24.9686 21.7739L24.5638 25.6259L19.8265 25.128L19.2775 30.3513L24.0148 30.8492L22.6061 44.2518L28.2718 44.8473L28.2717 44.8474Z" fill="currentColor"

									className="text-primary"
								/>
							</svg>
						</Link>
					</div>
				</div>
			</div>
			<div className="mx-auto max-w-[1240px] px-2">
				<svg className="!w-full mt-4" height="2" viewBox="0 0 1570 2" fill="none" xmlns="http://www.w3.org/2000/svg">
					<line x1="-8.74228e-08" y1="1.00146" x2="1570" y2="1.00133" stroke="url(#paint0_linear_1_761)" strokeWidth="2" />
					<line x1="-8.74228e-08" y1="1.00146" x2="1570" y2="1.00133" stroke="white" strokeWidth="2" />
					<defs>
						<linearGradient id="paint0_linear_1_761" x1="1570" y1="-9.47182" x2="-12.0001" y2="-9.47183" gradientUnits="userSpaceOnUse">
							<stop stopColor="white" stopOpacity="0" />
							<stop offset="0.53125" stopColor="white" />
							<stop offset="1" stopColor="white" stopOpacity="0" />
						</linearGradient>
					</defs>
				</svg>


				<div className="flex justify-center mt-3 items-center gap-4 text-white">
					<p className="">© 2023 GGL Technologies</p>

					<ul className="flex justify-center items-center gap-8 ml-4">
						<li className="list-disc">
							<Link href="/terms-and-condition">Terms</Link>
						</li>
						<li className="list-disc">
							<Link href="/privacy-policy">Privacy</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;