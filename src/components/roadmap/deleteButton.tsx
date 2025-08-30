'use client';

import { Loader2, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { useAuth } from "../../../AuthContext";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { useState } from "react";
import { toast } from "sonner";
import { DeleteRoadmap } from "@/actions/roadmap/deleteRoadmap";
import { useRouter } from "next/navigation";

export default function DeleteButton() {

    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const { user, setUser } = useAuth();
    const userEmail = user?.email;
    const hasRoadmap = user?.hasRoadmap;
    const router = useRouter();

    const handleDeleteRoadmap = async () => {
        setOpenDialog(false);
        setLoading(true);
        toast("Deleting your Roadmap!");

        await DeleteRoadmap(userEmail).then((data) => {
            if (data.success) {
                console.log("Roadmap deleted successfully: ", data);

                if (user) {
                    const updatedUser = { ...user, hasRoadmap: false };
                    setUser(updatedUser);
                    localStorage.setItem("user", JSON.stringify(updatedUser));
                }

                setLoading(false);
                toast.success(data.message || "Roadmap Deleted Successfully!");
                router.push("/assessment");
            } else {
                console.log("Failed to delete Roadmap: ", data);
                setLoading(false);
                toast.error(data.message || "Roadmap deletion Failed! Please try again.");
            }
        });
    };


    return (
        <>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="default"
                        onClick={() => {
                            if (hasRoadmap) {
                                setOpenDialog(true);
                            } else {
                                toast.error("You have to create a roadmap first!");
                            }
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md transition-colors duration-300"
                    >
                        <Trash2 />
                        <span className="hidden md:flex ml-2">Delete</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Delete your Roadmap</p>
                </TooltipContent>
            </Tooltip>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className="bg-black/80 text-white">
                    <DialogHeader>
                        <DialogTitle>
                            Are You Sure?
                        </DialogTitle>
                        <DialogDescription>
                            Are you sure you want to Delete your Roadmap? After proceeding you should create a new One!
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button
                                variant="secondary"
                            >Cancel</Button>
                        </DialogClose>
                        <Button
                            onClick={handleDeleteRoadmap}
                            variant="destructive"
                        >
                            {loading ? <><Loader2 className="animate-spin" />Deleting...</> : "Delete"}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>

    )
}