import {
    Banner,
    Navbar,
    Hero,
    LogoTicker,
    Features,
    ProductShowcase,
    FAQs,
    CallToAction,
    Footer,
} from './components';


const App = () => {
    return (
        <div className="antialiased">
            <Banner />
            <Navbar />
            <Hero />
            <LogoTicker />
            <Features />
            <ProductShowcase />
            <FAQs />
            <CallToAction />
            <Footer />
        </div>
    );
};

export default App;
