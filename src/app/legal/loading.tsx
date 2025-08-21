'use client';

import { Skeleton } from "@/components/ui/skeleton";

export default function LegalSkeleton() {
    return (
        <div className="min-h-screen bg-black/55 text-white py-12 px-6 mt-20">
            <div className="max-w-4xl mx-auto bg-black/70 shadow-lg rounded-2xl p-6">
                {/* Header */}
                <div className="flex justify-center mb-8">
                    <Skeleton className="h-8 w-48 rounded-md" />
                </div>

                {/* Tabs */}
                <div className="flex justify-center space-x-6 border-b pb-4 mb-6">
                    <Skeleton className="h-6 w-28 rounded-md" />
                    <Skeleton className="h-6 w-28 rounded-md" />
                    <Skeleton className="h-6 w-28 rounded-md" />
                </div>

                {/* Content area */}
                <div className="space-y-4 min-h-[200px]">
                    <Skeleton className="h-6 w-40 rounded-md" /> {/* Section heading */}
                    <Skeleton className="h-4 w-full rounded-md" />
                    <Skeleton className="h-4 w-5/6 rounded-md" />
                    <Skeleton className="h-4 w-2/3 rounded-md" />

                    {/* List bullets placeholder */}
                    <div className="space-y-2 pl-6">
                        <Skeleton className="h-4 w-1/2 rounded-md" />
                        <Skeleton className="h-4 w-2/3 rounded-md" />
                        <Skeleton className="h-4 w-1/3 rounded-md" />
                    </div>

                    <Skeleton className="h-4 w-3/4 rounded-md" />
                </div>
            </div>
        </div>
    );
}
