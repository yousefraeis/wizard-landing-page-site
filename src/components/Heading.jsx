const Heading = ({ title, description = '', className }) => {
    return (
        <div>
            {title && (
                <h2
                    className={`text-center font-bold text-5xl sm:text-6xl tracking-tighter 
                                ${className || ''}`}
                >
                    {title}
                </h2>
            )}

            {description && (
                <p className="max-w-xl mx-auto text-center text-xl mt-5 text-white/70">
                    {description}
                </p>
            )}
        </div>
    );
};

export default Heading;
