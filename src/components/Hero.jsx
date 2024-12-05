import React from 'react';
import { cursorImg, messageImg } from '../assets/images';
import { rightArrow } from '../assets/icons';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="bg-black text-white bg-gradient-purple section-py relative overflow-clip">
            <div className="absolute-x-center absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px]  rounded-[100%] bg-black border border-purple-light bg-radialGradient-darkPurple top-[calc(100%-96px)] sm:top-[calc(100%-120px)] "></div>

            <div className="container relative">
                <div className="flex-center">
                    <a
                        href="#"
                        className="inline-flex gap-3 border-2 py-1 px-2 rounded-lg border-white/30"
                    >
                        <span className="bg-gradient-sunset text-transparent bg-clip-text [-webkit-background-clip:text] ">
                            Version 2.0 is her
                        </span>
                        <span className="inline-flex items-center gap-1">
                            <span>Read More</span>
                            <img src={rightArrow} alt="right arrow" />
                        </span>
                    </a>
                </div>

                <div className="flex-center mt-8">
                    <div className="relative">
                        <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center">
                            One Task <br /> a Time
                        </h1>

                        <motion.div
                            drag
                            dragSnapToOrigin
                            className="absolute right-[476px] top-[108px] hidden sm:inline"
                        >
                            <img
                                src={cursorImg}
                                alt="cuesor image"
                                height={200}
                                width={200}
                                className="max-w-none"
                                draggable="false"
                            />
                        </motion.div>

                        <motion.div
                            drag
                            dragSnapToOrigin
                            className="absolute top-[56px] left-[498px] hidden sm:inline"
                        >
                            <img
                                src={messageImg}
                                alt="message image"
                                height={200}
                                width={200}
                                className="max-w-none"
                                draggable="false"
                            />
                        </motion.div>
                    </div>
                </div>

                <div className="flex-center">
                    <p className="text-center text-xl mt-8 max-w-md">
                        Celebrate the joy of accomplisthment with an app
                        designed to track progress, motinate your efforts, and
                        celcbrate your successes.
                    </p>
                </div>

                <div className="flex-center mt-8">
                    <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
                        Get for free
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
