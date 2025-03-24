"use server"

import { FormField } from "@/components/dynamic_form";
import { FormeSchema } from "@/schemas/create_form_schema";

interface FieldsProps {
    type: string,
    question: string,
    required: boolean,
  }
  
  interface FieldsMapProps {
    [key: string]: FieldsProps;
  }
  
  interface DataProps {
    id: string,
    name: string,
    fields: FieldsMapProps
  }
  
  interface ResponseProps {
    statusCode: number,
    data: DataProps,
    message: string
  }

export async function CreateForm(data : FormeSchema) {
    try {
        const URL = `${process.env.API_HOST}/forms`;
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: data.name, fields: null }),
        });

        if (!response.ok) {
            throw new Error("Something went wrong, please try again later");
        }
        const body: ResponseProps = await response.json();
        return body.data.id;
    } catch (error) {
        throw new Error("Something went wrong, please try again later");
    }
}

export async function GetForms() {
    try {
        const URL = `${process.env.API_HOST}/forms`;
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Something went wrong, please try again later");
        }

        const body: {
            statusCode: number,
            data: {id: string, name: string}[],
            message: string
          } = await response.json();
        return body.data;
    } catch (error) {
        throw new Error("Something went wrong, please try again later");
    }
}

export async function GetFormsById(id: string) {
    try {
        const URL = `${process.env.API_HOST}/forms/${id}`;
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Something went wrong, please try again later");
        }
        const body: ResponseProps = await response.json();
        return body.data;
    } catch (error) {
        throw new Error("Something went wrong, please try again later");
    }
}

export async function PutFormsById(id: string, fields: FormField[]) {
    try {
        const URL = `${process.env.API_HOST}/forms/${id}`;
        const response = await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fields: fields }),

        });

        if (!response.ok) {
            throw new Error("Something went wrong, please try again later");
        }
        const body: ResponseProps = await response.json();
        return body.data;
    } catch (error) {
        throw new Error("Something went wrong, please try again later");
    }
}