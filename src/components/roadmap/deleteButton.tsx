import { Button } from "../ui/button";

export default function DeleteButton() {
    return (
        <Button
            variant="outline"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-md transition-colors duration-300"
        >
            Delete Roadmap
        </Button>
    )
}