import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function ResumeSection({ setStep }: { setStep: (step: number) => void }) {
    return (
        <div className="flex flex-col gap-4 items-center w-full max-w-md">
            <h2 className="text-xl font-semibold text-white">Upload Your Resume</h2>
            <Input
                type="file"
                accept=".pdf,.doc,.docx"
                className="text-white"
                onChange={(e: any) => {
                    const file = e.target.files[0];
                    if (file) {
                        console.log("Resume selected:", file.name);
                    }
                }}
            />
            <Button
                onClick={() => alert("Resume submitted (mock)")}
                className="mt-4 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
            >
                Submit Resume
            </Button>
            <Button
                onClick={() => setStep(0)}
                className="text-md text-white mt-2 hover:text-blue-200 bg-red-500 px-2 py-2 rounded-lg transition hover:bg-red-700"
            >
                Go Back
            </Button>
        </div>
    )
}