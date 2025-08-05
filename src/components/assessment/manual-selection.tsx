import { Button } from "../ui/button";

export default function ManualSelection({ setStep, setSelectedLevel }: { setStep: (step: number) => void; setSelectedLevel: (level: string) => void }) {
    return (
        <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-semibold text-white">Select Your Current Status</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["10th Pass", "12th Pass", "Graduation", "Undergraduate", "Employee"].map((level) => (
                    <Button
                        key={level}
                        onClick={() => {
                            setSelectedLevel(level);
                            setStep(3);
                        }}
                        className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
                    >
                        {level}
                    </Button>
                ))}
            </div>
            <Button
                onClick={() => setStep(0)}
                className="text-md text-white mt-2 hover:text-blue-200 bg-red-500 px-2 py-2 rounded-lg transition hover:bg-red-700"
            >
                Go Back
            </Button>
        </div>
    )
}