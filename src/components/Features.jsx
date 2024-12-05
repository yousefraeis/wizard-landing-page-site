import { featuresCards } from '../constants';
import Heading from './Heading';
import Feature from './Feature';


const Features = () => {
    
    return (
        <div className="bg-black text-white section-py">
            <div className="container">
                <Heading
                    title="Everything you need"
                    description="Enjoy customizable lists, teamwork tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly."
                />

                <div className="mt-16 flex flex-col sm:flex-row gap-4">
                    {featuresCards.map((card, index) => (
                        <Feature
                            key={index}
                            title={card.title}
                            description={card.description}
                            icon={card.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
