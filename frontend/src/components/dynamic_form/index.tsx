'use client';

import React, { useState } from "react";

export interface FormField {
    id: number;
    name: string;
    label: string;
    type: "text" | "email" | "password" | "checkbox" | "radio" | "select" | "textarea";
    options?: string[]; // Used for select & radio button
}

interface DynamicFormProps {
    fields: FormField[];
    onSubmit: (data: Record<string, any>) => void;
}

export function DynamicForm({ fields, onSubmit }: DynamicFormProps) {
    const [formData, setFormData] = useState<Record<string, any>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg space-y-4 max-w-md mx-auto">
            {fields.map((field) => (
                <div key={field.id} className="flex flex-col">
                    <label className="font-medium">{field.label}</label>

                    {field.type === "text" || field.type === "email" || field.type === "password" ? (
                        <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            className="p-2 border rounded"
                        />
                    ) : field.type === "textarea" ? (
                        <textarea
                            name={field.name}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                            className="p-2 border rounded"
                        />
                    ) : field.type === "checkbox" ? (
                        <input
                            type="checkbox"
                            name={field.name}
                            checked={formData[field.name] || false}
                            onChange={handleChange}
                            className="mt-1"
                        />
                    ) : field.type === "select" && field.options ? (
                        <select name={field.name} value={formData[field.name] || ""} onChange={handleChange} className="p-2 border rounded">
                            {field.options.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                    ) : field.type === "radio" && field.options ? (
                        <div className="space-y-2">
                            {field.options.map((option) => (
                                <label key={option} className="flex items-center space-x-2">
                                    <input type="radio" name={field.name} value={option} onChange={handleChange} />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    ) : null}
                </div>
            ))}

            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Submit</button>
        </form>
    );
};