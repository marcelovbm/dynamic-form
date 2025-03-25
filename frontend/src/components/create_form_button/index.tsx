'use client'

import * as React from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { joiResolver } from "@hookform/resolvers/joi";
import { toast } from "sonner";
import { FormeSchema, joiSchema } from "@/schemas/create_form_schema";
import { CreateForm } from "@/actions/form";
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation";

export default function CreateFormButton() {
    const router = useRouter();
    const form = useForm<FormeSchema>({
        resolver: joiResolver(joiSchema),
    });

    const onSubmit = async (data: FormeSchema) => {
        try {
            const FORM_ID = await CreateForm(data);
            toast.success("Form created successfully");
            router.push(`/forms/${FORM_ID}`)
        } catch (error) {
            toast.error("Somithing went wrong, please try again later");
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild >
                <Button className="cursor-pointer"> Create new form</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] border-[#e5e7eb]">
                <DialogHeader>
                    <DialogTitle>Create new form</DialogTitle>
                    <DialogDescription>
                        Create a new form to collect the data you desire.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="form name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                    <DialogFooter>
                        <Button
                            className="w-full mt-4 cursor-pointer"
                            onClick={form.handleSubmit(onSubmit)}>
                            {!form.formState.isSubmitting && <span>Save</span>}
                            {form.formState.isSubmitting && (
                                <div className="flex items-center justify-center gap-2">
                                    <Loader2 className="animate-spin" />
                                    Saving...
                                </div>
                            )}
                        </Button>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    );
}
