import React, { useRef } from 'react';
import Heading from './Heading';
import { appScreen } from '../assets/images';
import { motion, useScroll, useTransform } from 'framer-motion';
const ProductShowcase = () => {
    const image = useRef(null);
    const { scrollYProgress } = useScroll({
        target: image,
        offset: ['start end', 'end end'],
    });
    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    return (
        <div
            className="bg-black text-white section-py 
                        bg-gradient-to-b from-black to-purple-deep"
        >
            <div className="container">
                <Heading
                    title="Intuitive interface "
                    description="Celebrate the joy of accomplisthment with an app  designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time."
                />
                <motion.div
                    style={{
                        opacity: opacity,
                        rotateX: rotateX,
                        transformPerspective: '800px',
                    }}
                >
                    <img
                        src={appScreen}
                        alt="the product screenshot"
                        className="mt-14 mx-auto"
                        ref={image}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default ProductShowcase;
