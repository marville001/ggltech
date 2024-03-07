"use client";

import { useState } from 'react';;
import { Dialog } from '@headlessui/react';
import {
	Bars3Icon,
	ChatBubbleLeftRightIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const MainHeader = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const closeMenu = () => {
		setMobileMenuOpen(false);
	};

	return (
		<header className="bg-white bottom_shadow inset-x-0 top-0">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">GGL Tech</span>
						<div className="w-[45px] h-[45px]">
							<Image width={50} height={50} className="!w-full rounded-full !h-full object-cover" src="/images/logo.svg" alt="" />
						</div>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-8 w-8" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex items-center lg:gap-x-10">
					<Link href="/" className="font-semibold hover:border-b-[3px] hover:border-b-primary leading-6 text-gray-900">
						Home
					</Link>
					<Link href="/#portfolio" className="font-semibold hover:border-b-[3px] hover:border-b-primary leading-6 text-gray-900">
						Portfolio
					</Link>
					<Link href="/#services" className="font-semibold hover:border-b-[3px] hover:border-b-primary leading-6 text-gray-900">
						Services
					</Link>
					<Link href="/#team" className="font-semibold hover:border-b-[3px] hover:border-b-primary leading-6 text-gray-900">
						Our Team
					</Link>
					<Link href="/#about-us" className="font-semibold hover:border-b-[3px] hover:border-b-primary leading-6 text-gray-900">
						About Us
					</Link>
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<Link href="/#contact-us" className={cn(buttonVariants(), "text-lg flex gap-2")}>
						<ChatBubbleLeftRightIcon className="w-6 h-6" />
						Contact Us
					</Link>
				</div>
			</nav>
			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Link
							onClick={closeMenu} href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img
								className="h-8 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								alt=""
							/>
						</Link>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={closeMenu}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-8 w-8" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Link
									onClick={closeMenu}
									href="/"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Home
								</Link>
								<Link
									onClick={closeMenu}
									href="/#portfolio"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Portfolio
								</Link>
								<Link
									onClick={closeMenu}
									href="/#services"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Services
								</Link>
								<Link
									onClick={closeMenu}
									href="/#our-team"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Our Team
								</Link>
								<Link
									onClick={closeMenu}
									href="/#about-us"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									About Us
								</Link>
							</div>
							<div className="py-6">
								<Link
									onClick={closeMenu}
									href="/#contact-us"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Contact Us
								</Link>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
};

export default MainHeader;