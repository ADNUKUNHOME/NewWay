'use client';

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";

export default function AvatarFunctions({
    user,
    logout,
}: {
    user: { email: string };
    logout: () => void;
}) {
    const [openDialog, setOpenDialog] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const firstLetter = user.email.charAt(0).toUpperCase() || "?";

    return (
        <div>
            {/* Avatar dropdown */}
            <DropdownMenu open={openMenu} onOpenChange={setOpenMenu}>
                <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                        <AvatarImage src="/user-avatar.png" alt={user.email} />
                        <AvatarFallback className="text-yellow-500 font-bold">
                            {firstLetter}
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="center">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>{user.email}</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        onClick={() => setOpenDialog(true)}
                        className="text-red-500 focus:text-red-500"
                    >
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent className="bg-black/80 text-white">
                    <DialogHeader>
                        <DialogTitle>Are you sure you want to log out?</DialogTitle>
                        <DialogDescription>
                            You’ll need to log back in to access your account.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button
                                variant="secondary"
                                onClick={() => setOpenMenu(true)}
                            >Cancel</Button>
                        </DialogClose>
                        <Button
                            onClick={logout}
                            variant="destructive"
                        >
                            Logout
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
