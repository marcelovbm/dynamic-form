'use client'

import { PutFormsById } from "@/actions/form";
import { Button } from "../ui/button";
import { HiSaveAs } from "react-icons/hi";
import formContext from "@/hooks/form-context";
export function SaveFormButton({
    id
}: {
    id: string
}) {

    const { fields } = formContext();

    const save = async () => {
        await PutFormsById(id, fields);
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