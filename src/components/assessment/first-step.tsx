import { FileWarning, Upload, UserRoundPen } from "lucide-react";
import Link from "next/link";

export default function FirstStep({
    setStep,
    hasRoadmap,
}: {
    setStep: (step: number) => void;
    hasRoadmap: boolean | undefined;
}) {
    return (
        <div className="flex flex-col items-center gap-6 max-w-2xl">
            <h1 className="text-3xl font-bold text-white text-center">
                How would you like to proceed?
            </h1>
            <div className="flex flex-col gap-4 w-full">
                {
                    hasRoadmap &&
                    <div
                        className="flex items-center bg-black/55 hover:bg-black/70 px-6 py-4 text-amber-200 border border-dashed border-amber-400 rounded-lg w-full mb-6"
                    >
                        <span className="mr-4 text-3xl">⚠</span>
                        <span className="text-sm md:text-base">
                            You can't create roadmap when you have one already! You can edit the existing roadmap instead. Go to {" "}
                            <Link
                                href="/roadmap"
                                className="font-bold underline text-amber-400"
                            >Roadmap</Link>{" "}
                            to edit.</span>
                    </div>
                }

                {/* Upload Resume */}
                <div
                    onClick={() => setStep(1)}
                    className="flex flex-col items-center bg-yellow-600 px-6 py-4 text-white rounded-lg w-full hover:bg-yellow-700 transition cursor-pointer"
                >
                    <div className="flex items-center">
                        <Upload className="w-6 h-6" />
                        <span className="ml-2 font-bold">Upload Resume</span>
                    </div>
                    <p className="text-sm text-yellow-100 mt-1 text-center">
                        Upload a <span className="font-semibold">PDF</span> or <span className="font-semibold">DOCX</span> file and we’ll extract your details automatically.
                    </p>
                </div>

                {/* Divider */}
                <div className="flex w-full items-center text-center text-white">
                    <div className="w-1/2 h-0.5 bg-white" />
                    <p className="font-bold mx-2">or</p>
                    <div className="w-1/2 h-0.5 bg-white" />
                </div>

                {/* Fill Manually */}
                <div
                    onClick={() => setStep(2)}
                    className="flex flex-col items-center bg-gray-100 px-6 py-4 text-black rounded-lg w-full hover:bg-gray-300 transition cursor-pointer"
                >
                    <div className="flex items-center">
                        <UserRoundPen className="w-6 h-6" />
                        <span className="ml-2 font-bold">Fill Manually</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 text-center">
                        Enter your information step-by-step at your own pace.
                    </p>
                </div>
            </div>
        </div>
    );
}