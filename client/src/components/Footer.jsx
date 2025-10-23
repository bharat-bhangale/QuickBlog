import React from "react";
import { assets, footer_data } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/5">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                {/* Logo and description */}
                <div>
                    <img src={assets.logo} alt="logo" className="w-32 sm:w-44" />
                    <p className="max-w-[410px] mt-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Consequuntur velit voluptates, corporis architecto quam fuga
                        nesciunt voluptas quis quisquam consequatur asperiores. Excepturi
                        delectus voluptatem facere ad autem possimus unde eveniet.
                    </p>
                </div>

                {/* Footer Links */}
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {footer_data.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                                {section.title}
                            </h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a
                                            href="#"
                                            className=" hover:underline cursor-pointer transition duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Copyright */}
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                © 2025 QuickBlog by GreatStack — All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
