import { Button } from "../ui/button";
import { HiSaveAs } from "react-icons/hi";
export function SaveFormButton() {
    return (
        <Button
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer gap-2">
            <HiSaveAs className="text-white" />
            Save
        </Button>
    )
}