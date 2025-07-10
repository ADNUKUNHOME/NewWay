import HowItWorksCards from "./howitworkscard";

const HowItWorks = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4">
            <div className="flex flex-col items-center justify-center text-white mb-12 text-center">
                <h1 className="text-4xl md:text-6xl font-bold">How It Works</h1>
                <p className="text-lg text-zinc-400 font-medium mt-4 max-w-xl">
                    Your AI-powered guide to becoming a professional — built around your goals and skills.
                </p>
            </div>
            <HowItWorksCards />
        </section>
    );
};

export default HowItWorks;
