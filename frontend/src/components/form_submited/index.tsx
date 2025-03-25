'use client'

import { toast } from "sonner";
import { FieldsProps, SubmitDataForm } from "@/actions/form";
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function FormSubmited({ id,
    elements
}: {
    id: string,
    elements: { [key: string]: FieldsProps }
}) {

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = async (data: any) => {
        try {
            const request: any = [];
            Object.keys(data).map((key) => {
                request.push(
                    {
                        question: key,
                        answer: data[key]
                    })
            })

            console.log(request)
            await SubmitDataForm(id, request);
            toast.success("Form created successfully");
            reset()
        } catch (error) {
            toast.error("Somithing went wrong, please try again later");
        }
    };

    return (
        <div className="flex items-center w-auto">
            <form onSubmit={handleSubmit(onSubmit)}
            className="w-2xs">
                {Object.keys(elements).map((element) => (
                    <div key={element} className="mb-4 w-auto">
                        <Label className="py-2">{elements[element].question}</Label>
                        {elements[element].type === "textarea" ? (
                            <Textarea
                                className="p-2 border rounded w-full"
                                required={elements[element].required}
                                {...register(elements[element].question)}
                            />
                        ) : elements[element].type === "checkbox" || elements[element].type === "radio" ? (
                            <Input
                                type={elements[element].type}
                                required={elements[element].required}
                                className="ml-2"
                                {...register(elements[element].question)} />
                        ) : (
                            <Input
                                type={elements[element].type}
                                required={elements[element].required}
                                className="p-2 border rounded w-full"
                                {...register(elements[element].question)} />
                        )}
                    </div>
                ))}
                <Button type="submit"
                    className="mt-3 px-4 py-2 rounded-lg w-full">
                    Submit
                </Button>
            </form>
        </div>
    )
}