import React from 'react';
import { socialIcons } from '../constants';

const Footer = () => {
    return (
        <footer className="py-5 bg-black text-white/60 border-t border-white/20">
            <div className="container">
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                    <div className="text-center">
                        © {new Date().getFullYear()} {''} All rights reserved.
                        Your Company, Inc All rights reserved
                    </div>

                    <ul className="flex justify-center gap-2.5">
                        {socialIcons.map((icon, index) => (
                            <li key={index} className='cursor-pointer'>
                                <a href={icon.href}></a>
                                <img src={icon.src} alt={icon.alt} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
