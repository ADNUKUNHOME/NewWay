import SquareGridBackground from "../common/bg";

export default function HomeHero() {
    return (
        <section className="relative w-full h-screen bg-black overflow-hidden">
            <SquareGridBackground />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold">Welcome to NewWay</h1>
                <p className="mt-4 text-lg text-gray-300">
                    Personalized AI Roadmaps for Students
                </p>
            </div>
        </section>
    );
}
