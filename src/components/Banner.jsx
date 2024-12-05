import React from 'react';
import { bannerMessage } from '../constants';

const Banner = () => {
    return (
        <>
            {bannerMessage.show && (
                <div className="py-3 text-center bg-gradient-rainbow700">
                    <div className="container">
                        <p className="font-medium">
                            <span className="hidden sm:inline">
                                {bannerMessage.text}
                            </span>{' '}
                            <a
                                href={bannerMessage.linkHref}
                                className="underline underline-offset-4"
                            >
                                {bannerMessage.linkText}
                            </a>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Banner;
