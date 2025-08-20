'use client';

import { Check, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "../ui/dialog";
import { useState } from "react";
import { Avatar } from "../ui/avatar";
import { Badge } from "../ui/badge";

export default function TrackProgress() {
    const [openDialog, setOpenDialog] = useState(false);
    const [started, setStarted] = useState(false);
    const [completed, setCompleted] = useState(false);

    return (
        <>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="default"
                        onClick={() => {
                            setOpenDialog(true);
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors duration-300"
                    >
                        <TrendingUp />
                        <span className="hidden md:flex ml-2">Progress</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Track your progress</p>
                </TooltipContent>
            </Tooltip>

            {/* progress tracking Dialog */}
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className="bg-black/80 text-white max-w-2xl items-center justify-center">
                    <DialogHeader className="w-full">
                        <DialogTitle className="text-2xl font-bold text-yellow-300 text-center">
                            YOUR PROGRESS
                        </DialogTitle>
                        <DialogDescription>
                            <p className="text-gray-400 text-center">
                                Track your progress across different phases of your roadmap.
                            </p>
                        </DialogDescription>
                        <div className="flex flex-col gap-5 mt-5">
                            {
                                ["Phase 1", "Phase 2", "Phase 3"].map((data, idx) => (
                                    <div key={idx} className="flex items-center justify-between bg-gray-400 text-black p-4 rounded-lg">
                                        <div className="text-center text-xl font-bold">
                                            {data}
                                        </div>
                                        <Avatar
                                            onClick={() => setStarted((prev) => !prev)}
                                            className={`flex items-center justify-center font-bold cursor-pointer
    ${started ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-600"}`}
                                        >
                                            {started ? <Check /> : "S"}
                                        </Avatar>

                                        <Avatar
                                            onClick={() => setCompleted((prev) => !prev)}
                                            className={`flex items-center justify-center font-bold cursor-pointer
    ${completed ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-600"}`}
                                        >
                                            {completed ? <Check /> : "C"}
                                        </Avatar>
                                        <Badge className={`text-center text-xs font-bold p-2
                                    ${completed ? "bg-green-500" : ""}`}>
                                            Completed
                                        </Badge>
                                    </div>
                                ))
                            }

                        </div>
                    </DialogHeader>
                    <DialogFooter>

                    </DialogFooter>
                </DialogContent >
            </Dialog >
        </>
    );
}