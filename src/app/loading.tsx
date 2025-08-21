"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function HomeLoading() {
    return (
        <div className="flex flex-col items-center justify-center w-full mt-20 px-6 space-y-16">
            {/* Hero Section Skeleton */}
            <section className="flex flex-col items-center text-center space-y-4">
                <Skeleton className="h-12 w-64 rounded-lg" /> {/* Title */}
                <Skeleton className="h-6 w-80 rounded-lg" /> {/* Subtitle */}
                <Skeleton className="h-12 w-40 rounded-lg mt-4" /> {/* Button */}
            </section>

            {/* Demo Section Skeleton */}
            <section className="w-full sm:w-[500px] md:w-[650px] lg:w-[800px] space-y-6">
                {/* Heading */}
                <div className="flex flex-col items-center space-y-3">
                    <Skeleton className="h-10 w-3/4 rounded-lg" />
                    <Skeleton className="h-6 w-1/2 rounded-lg" />
                </div>

                {/* Card */}
                <div className="flex flex-col items-center bg-black/10 rounded-2xl p-6 space-y-6 shadow-md">
                    {/* Progress Bar */}
                    <Skeleton className="h-3 w-full rounded-full" />

                    {/* Content */}
                    <div className="flex flex-col items-center space-y-3 w-full">
                        <Skeleton className="h-8 w-1/3 rounded-lg" /> {/* Section Title */}
                        <Skeleton className="h-5 w-5/6 rounded-lg" />
                        <Skeleton className="h-5 w-4/6 rounded-lg" />
                        <Skeleton className="h-5 w-3/6 rounded-lg" />
                    </div>

                    {/* Separator */}
                    <Skeleton className="h-[1px] w-full" />

                    {/* Navigation */}
                    <div className="flex justify-between w-full">
                        <Skeleton className="h-10 w-24 rounded-lg" />
                        <Skeleton className="h-10 w-24 rounded-lg" />
                    </div>
                </div>
            </section>
        </div>
    );
}
