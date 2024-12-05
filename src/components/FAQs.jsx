import React, { useState } from 'react';
import { itemsFAQs } from '../constants';
import Heading from './Heading';
import { plusIcon, minusIcon } from '../assets/icons';
import { AnimatePresence, motion } from 'framer-motion';

const FAQs = () => {
    const [openIndexes, setOpenIndexes] = useState({});

    const toggleOpen = (index) => {
        setOpenIndexes((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="bg-black text-white section-py bg-gradient-to-b from-purple-deep to-black">
            <div className="container">
                <Heading
                    className="max-w-[648px] mx-auto"
                    title="Frequently asked questions"
                />

                <div className="mt-12 max-w-[648px] mx-auto">
                    {itemsFAQs.map((item, index) => (
                        <div
                            key={index}
                            className="py-7 border-b border-white/30"
                        >
                            <div
                                className="flex items-center cursor-pointer"
                                onClick={() => toggleOpen(index)}
                            >
                                <span className="flex-1 text-lg font-bold">
                                    {item.question}
                                </span>

                                {openIndexes[index] ? (
                                    <img
                                        src={minusIcon}
                                        alt="minus icon to hide the answer"
                                    />
                                ) : (
                                    <img
                                        src={plusIcon}
                                        alt="plus icon to review the answer"
                                    />
                                )}
                            </div>

                            <AnimatePresence>
                                {openIndexes[index] && (
                                    <motion.div
                                        className={` text-white/70`}
                                        initial={{
                                            opacity: 0,
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            height: 'auto',
                                            marginTop: '16px',
                                        }}
                                        exit={{
                                            opacity: 0,
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                    >
                                        {item.answer}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
