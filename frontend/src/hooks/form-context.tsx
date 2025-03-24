"use client";

import { FormContext } from "@/components/form_context";
import { useContext } from "react";

function formContext() {
    const context  = useContext(FormContext);

    if (!context) {
        throw new Error("useFormContext must be used within a FormContextProvider");
    }

    return context;
}

export default formContext;