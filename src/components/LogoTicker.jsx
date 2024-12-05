import React from 'react';
import { logoTicker } from '../constants';
import { motion } from 'framer-motion';

const LogoTicker = () => {
    return (
        <div className="bg-black text-white section-py">
            <div className="container">
                <h2 className="text-xl text-center text-white/70">
                    Trusted by the world's most innovative teams
                </h2>

                <div
                    className="flex overflow-hidden mt-9 relative
                              before:content-[''] before:z-10 before:absolute before:h-full before:w-5 before:left-0 before:top-0 before:bg-gradient-right800
                              after:content-[''] after:z-10 after:absolute after:h-full after:w-5  after:right-0 after:top-0 after:bg-gradient-left800
                              "
                >
                    <motion.div
                        className="flex-center gap-16 flex-none pr-16"
                        transition={{
                            duration: 20,
                            ease: 'linear',
                            repeat: Infinity,
                        }}
                        initial={{ translateX: 0 }}
                        animate={{ translateX: '-50%' }}
                    >
                        {logoTicker.map((logo, index) => (
                            <img
                                key={`${logo.src} - ${index}`}
                                src={logo.src}
                                alt={logo.alt}
                                className="flex-none h-8 w-auto"
                            />
                        ))}
                        {logoTicker.map((logo, index) => (
                            <img
                                key={`${logo.src} - ${index}`}
                                src={logo.src}
                                alt={logo.alt}
                                className="flex-none h-8 w-auto"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default LogoTicker;
