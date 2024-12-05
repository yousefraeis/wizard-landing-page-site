import React, { useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const Feature = ({ title, description, icon }) => {
    const offsetX = useMotionValue(-100);
    const offsetY = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
    const border = useRef(null);

    useEffect(() => {
        const updateMousePosition = (e) => {
            if (!border.current) return;
            const borderRect = border.current.getBoundingClientRect();
            offsetX.set(e.x - borderRect.x);
            offsetY.set(e.y - borderRect.y);
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative">
            <motion.div
                className="absolute inset-0 border-2 border-purple-400 w-full h-full rounded-xl"
                style={{
                    WebkitMaskImage: maskImage,
                    maskImage,
                }}
                ref={border}
            />
            <div className="inline-flex justify-center items-center h-14 w-14 bg-white text-black rounded-lg">
                <img src={icon} alt={title} />
            </div>
            <h3 className="mt-6 font-bold">{title}</h3>
            <p className="mt-2 text-white/70">{description}</p>
        </div>
    );
};

export default Feature;
