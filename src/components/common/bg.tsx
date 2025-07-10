"use client";

import { useEffect, useState, ReactNode } from "react";

export default function FullGridBackground() {
    const [grid, setGrid] = useState<ReactNode[]>([]);

    const generateGrid = () => {
        const spacing = 24;
        const cols = Math.floor(window.innerWidth / spacing);
        const rows = Math.floor(window.innerHeight / spacing);
        const centerX = cols / 2;
        const centerY = rows / 2;
        const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);

        const tempGrid = [];

        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const dx = x - centerX;
                const dy = y - centerY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const opacity = Math.max(0, 1 - distance / maxDistance);

                tempGrid.push(
                    <div
                        key={`${x}-${y}`}
                        className="border border-yellow-400"
                        style={{
                            width: `${spacing - 4}px`,
                            height: `${spacing - 4}px`,
                            opacity: opacity * 0.4,
                        }}
                    />
                );
            }
        }

        setGrid(tempGrid);
    };

    useEffect(() => {
        generateGrid();

        const handleResize = () => {
            generateGrid();
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="absolute inset-0 z-[-1] bg-black overflow-hidden">
            <div
                className="w-full h-full grid"
                style={{
                    gridTemplateColumns: `repeat(auto-fill, 24px)`,
                    gridTemplateRows: `repeat(auto-fill, 24px)`,
                }}
            >
                {grid}
            </div>
        </div>
    );
}
