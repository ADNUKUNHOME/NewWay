import { PencilIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function UpdateButton() {
    return (
        <Button
            variant="default"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md transition-colors duration-300"
        >
            <PencilIcon />
            <span className="hidden md:flex ml-2">Update</span>
        </Button>
    );
}