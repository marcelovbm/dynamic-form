'use client';

import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { BiSolidTrash } from "react-icons/bi";
export interface FormField {
    id: string;
    question: string;
    type: "text" | "email" | "password" | "textarea";
    required: boolean;
}

interface DynamicFormProps {
    fields: FormField[],
    handleRemoveField: (fieldId: string) => void;
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
                {
                fields.map((field) => (
                    
                    <div key={field.id} className="flex justify-between border-[#e5e7eb] rounded-md mb-3 border-1">
                        <div className="p-2 grid w-full max-w-sm items-center gap-1.5">
                            <Label className="p-2" htmlFor={field.question}>{field.question}</Label>
                            {field.type === "text" || field.type === "email" || field.type === "password" ? (
                                <Input
                                    id={field.question}
                                    type={field.type}
                                    name={field.question}
                                    className="p-2 border rounded cursor-not-allowed"
                                    placeholder={field.type}
                                    required={field.required}
                                    readOnly
                                />
                            ) : field.type === "textarea" ? (
                                <Textarea
                                    id={field.question}
                                    name={field.question}
                                    className="p-2 border rounded w-full"
                                    placeholder={field.type}
                                    required={field.required}
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