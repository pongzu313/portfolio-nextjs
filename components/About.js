import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
	return (
		<div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#1E90FF]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">
						Hi there!, I’m Koby, a curious software developer who’s trying to
						get a bit better every day.
					</p>
					<p className="py-2 text-gray-600">
						As a software developer who has over 5 years of experience, My works 
						have been always remained the trusted and successful art stuff for 
						from startup business to wide range enterprise eCommerce. 
						Mainly, I am focusing JS frameworks and libraries such as React, 
						Three.js, D3.js and so on.
					</p>
					<p className="py-2 text-gray-600">
						I would like to provide outstanding service with my creative ideas suited
						for modern architecture using my ability
					</p>
					<p className="py-2 text-gray-600">
						Hope to be an assistant and developer of your successful business.
					</p>
					<Link href="/#projects">
						<p className="py-2 text-gray-600 underline cursor-pointer">
							Check out some of my latest projects
						</p>
					</Link>
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image src={AboutImg} className="rounded-xl" alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
