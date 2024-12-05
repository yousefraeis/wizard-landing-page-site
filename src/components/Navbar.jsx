import React from 'react';
import { logo } from '../assets/images';
import { menu } from '../assets/icons';

const Navbar = () => {
    return (
        <div className="bg-black">
            <div className="px-4 ">
                <div className="py-4 flex-between">
                    <div className="relative">
                        <div className="absolute w-full top-2 bottom-0 bg-gradient-rainbow900 blur-lg" />
                        <img
                            src={logo}
                            alt="Saas logo"
                            className="h-12 w-12 object-contain relative"
                        />
                    </div>

                    <div className="border-2 border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden">
                        <img
                            src={menu}
                            alt="menu icon"
                            className="text-white"
                        />
                    </div>

                    <nav className="hidden sm:flex items-center gap-6 ">
                        <a
                            href="#"
                            className="text-white text-opacity-60 hover:text-opacity-100 transition"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-white text-opacity-60 hover:text-opacity-100 transition"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className="text-white text-opacity-60 hover:text-opacity-100 transition"
                        >
                            Updates
                        </a>
                        <a
                            href="#"
                            className="text-white text-opacity-60 hover:text-opacity-100 transition"
                        >
                            Help
                        </a>
                        <a
                            href="#"
                            className="text-white text-opacity-60 hover:text-opacity-100 transition"
                        >
                            Customers
                        </a>
                        <button className="bg-white py-2 px-4 rounded-lg">
                            Get for free
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
