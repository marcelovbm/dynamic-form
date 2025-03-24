'use client';

import { createContext, useState } from "react";
import { FormField } from "../dynamic_form";

type FormContextType = {
    fields: FormField[],
    addField: (field: FormField) => void,
    removeField: (id: string) => void,
}

export const FormContext = createContext<FormContextType | null>(null);
export default function FormContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [fields, setFields] = useState<FormField[]>([]);

    const addField = (field: FormField) => {
        if (!field.question) return;
        setFields((prevFields) => [
            ...prevFields,
            field,
        ]);
    };

    const removeField = (id: string) => {
        setFields(fields.filter((field) => field.id !== id));
    }

    return (
        <FormContext.Provider
            value={{ fields, addField, removeField }}>
            {children}
        </FormContext.Provider>
    )
}