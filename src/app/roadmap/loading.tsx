"use client";

export default function Loading() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-8">
            {/* Header Skeleton */}
            <div className="w-full sm:w-[500px] md:w-[650px] lg:w-[800px] bg-black/10 backdrop-blur-xs border-0 border-t border-b border-slate-400 rounded-lg shadow animate-pulse p-8 space-y-4">
                <div className="h-8 bg-gray-700/40 rounded-md w-2/3 mx-auto" />
                <div className="h-4 bg-gray-600/40 rounded-md w-4/5 mx-auto" />

                <div className="flex items-center justify-between w-full mt-6">
                    <div className="h-10 w-24 bg-gray-700/40 rounded-md" />
                    <div className="h-10 w-24 bg-gray-700/40 rounded-md" />
                    <div className="h-10 w-24 bg-gray-700/40 rounded-md" />
                    <div className="h-10 w-24 bg-gray-700/40 rounded-md" />
                </div>
            </div>

            {/* Card Skeleton */}
            <div className="w-full sm:w-[500px] md:w-[650px] lg:w-[800px] bg-black/10 backdrop-blur-xs border-0 border-b border-slate-400 rounded-lg shadow animate-pulse p-8 space-y-6 min-h-[400px]">
                {/* Progress Bar */}
                <div className="h-2 bg-gray-700/40 rounded-full w-full" />

                {/* Title */}
                <div className="mt-6 h-6 bg-gray-700/40 rounded-md w-1/2 mx-auto" />

                {/* Content lines */}
                <div className="space-y-3 mt-4">
                    <div className="h-4 bg-gray-600/40 rounded-md w-full" />
                    <div className="h-4 bg-gray-600/40 rounded-md w-11/12" />
                    <div className="h-4 bg-gray-600/40 rounded-md w-5/6" />
                    <div className="h-4 bg-gray-600/40 rounded-md w-3/4" />
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6">
                    <div className="h-10 w-24 bg-gray-700/40 rounded-md" />
                    <div className="h-10 w-24 bg-gray-700/40 rounded-md" />
                </div>
            </div>
        </section>
    );
}
