'use client';

import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { BiSolidTrash } from "react-icons/bi";
export interface FormField {
    id: number;
    label: string;
    type: "text" | "email" | "password" | "checkbox" | "radio" | "select" | "textarea";
}

interface DynamicFormProps {
    fields: FormField[],
    handleRemoveField: (fieldId: number) => void;
}

export function DynamicForm({ fields, handleRemoveField }: DynamicFormProps) {
    return (
        <Card className="w-[350px] border-[#e5e7eb]">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-between">
                    Field Added
                </CardTitle>
            </CardHeader>
            <CardContent>
                {fields.map((field) => (
                    <div key={field.id} className="flex justify-between border-[#e5e7eb] rounded-md mb-3 border-1">
                        <div className="p-2 w-full">
                            <Label className="p-2">{field.label}</Label>
                            {field.type === "text" || field.type === "email" || field.type === "password" ? (
                                <Input
                                    type={field.type}
                                    name={field.label}
                                    className="p-2 border rounded"
                                    placeholder={field.type}
                                    disabled
                                />
                            ) : field.type === "textarea" ? (
                                <Textarea
                                    name={field.label}
                                    className="p-2 border rounded w-full"
                                    placeholder={field.type}
                                    disabled
                                />
                            ) : null}
                        </div>
                        <div>
                            <Button
                                className="flex justify-center h-full border rounded-md rounded-l-none bg-red-500 hover:bg-red-800"
                                onClick={() => handleRemoveField(field.id)}>
                                <BiSolidTrash className="text-white" />
                            </Button>
                        </div>
                    </div>
                ))}
            </CardContent>
            <CardFooter />
        </Card>
    );
};