import React, { useRef } from 'react';
import Heading from './Heading';
import { emjiStar, helixImg } from '../assets/images';
import { motion, useScroll, useTransform } from 'framer-motion';

const CallToAction = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end'],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
    return (
        <div
            className="bg-black text-white py-[72px] sm:py-32 text-center overflow-hidden"
            ref={containerRef}
        >
            <div className="container max-w-xl relative">
                <motion.div style={{ translateY }}>
                    <img
                        src={helixImg}
                        alt=""
                        className="hidden sm:block absolute top-6 left-[calc(100%+36px)]"
                    />
                </motion.div>

                <motion.div style={{ translateY }}>
                    <img
                        src={emjiStar}
                        alt=""
                        className="hidden sm:block absolute -top-[80px] right-[calc(100%+24px)]"
                    />
                </motion.div>

                <Heading
                    title="Get instand access"
                    description="Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts."
                />

                <form className="mt-10 flex flex-col gap-3 max-w-sm mx-auto sm:flex-row">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="h-12 bg-white/20 rounded-lg  px-5 font-medium 
                                  placeholder:text-[#9CA3AF] sm:flex-1 focus:outline-none 
                                  "
                    />
                    <button className="bg-white text-black h-12 rounded-lg px-5">
                        Get access
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CallToAction;
