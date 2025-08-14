import { Button } from "../ui/button";

export default function UpdateButton() {
    return (
        <Button
            variant="outline"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md transition-colors duration-300"
        >
            Update Roadmap
        </Button>
    );
}