import { Button } from "../ui/button";

export default function FirstStep({ setStep }: { setStep: (step: number) => void }) {
    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold text-white">How would you like to proceed?</h1>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button
                    onClick={() => setStep(1)}
                    className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
                >
                    Upload Resume
                </Button>
                <Button
                    onClick={() => setStep(2)}
                    className="px-6 py-3 bg-gray-100 text-black rounded-lg hover:bg-gray-300 transition"
                >
                    Fill Manually
                </Button>
            </div>
        </div>
    )
}