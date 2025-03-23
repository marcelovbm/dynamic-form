'use client';

import { useState } from "react";
import { DynamicForm, FormField } from "../dynamic_form";
import { Button } from "@headlessui/react";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";

export function FormBuilderComponent() {
  const [fields, setFields] = useState<FormField[]>([]);
  const [newField, setNewField] = useState({ label: "", type: "text" });

  const handleAddField = () => {
    if (!newField.label) return;

    setFields((prevFields) => [
      ...prevFields,
      {
        id: Date.now(), // Unique ID
        name: newField.label.toLowerCase().replace(/\s+/g, "_"), // Generate name
        label: newField.label,
        type: newField.type as FormField["type"], // Ensure valid type
        options: newField.type === "select" || newField.type === "radio" ? [] : undefined, // Handle options if needed
      },
    ]);
    setNewField({ label: "", type: "text" });
  };

  const handleSubmit = (data: Record<string, any>) => {
    console.log("Form Submitted Data:", data);
  };

  const handleDeleteField = (id: number) => {
    setFields((prevFields) => prevFields.filter((field) => field.id !== id));
  };


  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          Form Builder
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto space-y-4">
          <h2 className="text-lg font-semibold">Add a Field</h2>
          <input
            type="text"
            placeholder="Field Label"
            value={newField.label}
            onChange={(e) => setNewField({ ...newField, label: e.target.value })}
            className="p-2 border rounded w-full"
          />
          <select
            value={newField.type}
            onChange={(e) => setNewField({ ...newField, type: e.target.value as FormField["type"] })}
            className="p-2 border rounded w-full"
          >
            <option value="text">Text</option>
            <option value="email">Email</option>
            <option value="password">Password</option>
            <option value="textarea">Textarea</option>
            <option value="checkbox">Checkbox</option>
          </select>
          <Button onClick={handleAddField} className="px-4 py-2 bg-green-600 text-white rounded-lg w-full">
            Add Field
          </Button>
        </div>

        {fields.length > 0 && <DynamicForm fields={fields} onSubmit={handleSubmit} />}
      </CardContent>
    </Card>

    // <div className="p-10 bg-gray-100 min-h-screen">
    //   {/* Form Customization */}
    //   <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto space-y-4">
    //     <h2 className="text-lg font-semibold">Add a Field</h2>
    //     <input
    //       type="text"
    //       placeholder="Field Label"
    //       value={newField.label}
    //       onChange={(e) => setNewField({ ...newField, label: e.target.value })}
    //       className="p-2 border rounded w-full"
    //     />
    //     <select
    //       value={newField.type}
    //       onChange={(e) => setNewField({ ...newField, type: e.target.value as FormField["type"] })}
    //       className="p-2 border rounded w-full"
    //     >
    //       <option value="text">Text</option>
    //       <option value="email">Email</option>
    //       <option value="password">Password</option>
    //       <option value="textarea">Textarea</option>
    //       <option value="checkbox">Checkbox</option>
    //     </select>
    //     <Button onClick={handleAddField} className="px-4 py-2 bg-green-600 text-white rounded-lg w-full">
    //       Add Field
    //     </Button>
    //   </div>

    //   {/* Render Dynamic Form */}
    //   {fields.length > 0 && <DynamicForm fields={fields} onSubmit={handleSubmit} />}
    // </div>
  );
};

export default FormBuilderComponent;