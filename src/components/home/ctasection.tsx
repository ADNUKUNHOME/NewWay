import Link from "next/link";
import { Button } from "../ui/button";

const CtaSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-center w-full px-4 py-16 text-white">
            <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg">Make it today and make your future safe and well-planned!</p>
                <Link href={"/signup"}>
                    <Button className="px-6 py-3 my-4 text-white bg-gradient-to-r from-yellow-400 to-yellow-700 rounded-2xl hover:from-yellow-700 hover:to-yellow-400 hover:scale-105 shadow-2xl transition-all duration-300">
                        Sign Up Free Now
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default CtaSection;