import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

export default function DeleteButton() {
    return (
        <Button
            variant="default"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-md transition-colors duration-300"
        >
            <Trash2 />
            <span className="hidden md:flex ml-2">Delete</span>
        </Button>
    )
}