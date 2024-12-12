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
        <div className="antialiased overflow-x-clip">
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
