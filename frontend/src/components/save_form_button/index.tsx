'use client'

import { PutFormsById } from "@/actions/form";
import { Button } from "../ui/button";
import { HiSaveAs } from "react-icons/hi";
import formContext from "@/hooks/form-context";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
export function SaveFormButton({
    id
}: {
    id: string
}) {

    const { fields } = formContext();
    const router = useRouter();

    const save = async () => {
        try {
            if (fields.length === 0) {
                toast.warning("You should add a fields first.");
                return;
            };
            await PutFormsById(id, fields);
            toast.success("Form created successfully");
            router.push("/")
        } catch (error) {
            toast.error("Somithing went wrong, please try again later");
        }
    }
    return (
        <Button
            onClick={save}
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer gap-2">
            <HiSaveAs className="text-white" />
            Save
        </Button>
    )
}