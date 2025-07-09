"use client";

export default function FullGridBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
            {/* Static grid container */}
            <div
                className="w-full h-full grid"
                style={{
                    gridTemplateColumns: `repeat(auto-fill, 24px)`,
                    gridTemplateRows: `repeat(auto-fill, 24px)`,
                }}
            >
                {Array.from({ length: 1500 }).map((_, index) => (
                    <div
                        key={index}
                        className="border border-yellow-700 opacity-10"
                        style={{
                            width: `20px`,
                            height: `20px`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
