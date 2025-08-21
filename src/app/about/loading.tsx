"use client";

export default function Loading() {
    return (
        <div className="min-h-screen text-gray-200 px-6 py-12 mt-20 animate-pulse space-y-16">
            {/* Header Section */}
            <section className="text-center max-w-3xl mx-auto space-y-4">
                <div className="h-10 bg-gray-700/40 rounded-md w-2/3 mx-auto" />
                <div className="h-4 bg-gray-600/40 rounded-md w-11/12 mx-auto" />
                <div className="h-4 bg-gray-600/40 rounded-md w-4/5 mx-auto" />
            </section>

            {/* Mission Section */}
            <section className="max-w-4xl mx-auto space-y-4">
                <div className="h-8 bg-gray-700/40 rounded-md w-1/3" />
                <div className="space-y-3">
                    <div className="h-4 bg-gray-600/40 rounded-md w-full" />
                    <div className="h-4 bg-gray-600/40 rounded-md w-11/12" />
                    <div className="h-4 bg-gray-600/40 rounded-md w-5/6" />
                </div>
            </section>

            {/* Values Section */}
            <section className="max-w-4xl mx-auto space-y-6">
                <div className="h-8 bg-gray-700/40 rounded-md w-1/4" />
                <div className="grid md:grid-cols-3 gap-6">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="rounded-2xl p-6 border border-yellow-600/30 bg-black/20 space-y-4"
                        >
                            <div className="h-6 bg-gray-700/40 rounded-md w-1/2" />
                            <div className="h-4 bg-gray-600/40 rounded-md w-full" />
                            <div className="h-4 bg-gray-600/40 rounded-md w-5/6" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className="max-w-4xl mx-auto space-y-8">
                <div className="h-8 bg-gray-700/40 rounded-md w-1/4" />
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-2xl border border-yellow-600/30 bg-black/20 space-y-4">
                        <div className="w-24 h-24 rounded-full bg-gray-700/40 mx-auto" />
                        <div className="h-5 bg-gray-700/40 rounded-md w-2/3 mx-auto" />
                        <div className="h-4 bg-gray-600/40 rounded-md w-3/4 mx-auto" />
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center max-w-3xl mx-auto space-y-6">
                <div className="h-8 bg-gray-700/40 rounded-md w-1/2 mx-auto" />
                <div className="h-4 bg-gray-600/40 rounded-md w-4/5 mx-auto" />
                <div className="h-10 bg-gray-700/40 rounded-md w-40 mx-auto" />
            </section>
        </div>
    );
}
