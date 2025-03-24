'use client';

import { useState } from "react";
import { DynamicForm, FormField } from "../dynamic_form";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { SelectGroup } from "@radix-ui/react-select";
import formContext from "@/hooks/form-context";

export function FormBuilderComponent() {

  const { fields, addField, removeField } = formContext();
  const [newField, setNewField] = useState({ label: "", type: "" });

  return (
    <div className="flex gap-4 items-baseline">
      <div>
        <Card className="w-[350px] border-[#e5e7eb]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-between">
              Add a Field
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="text"
              placeholder="Field Label"
              value={newField.label}
              onChange={(e) => setNewField({ ...newField, label: e.target.value })}
              className="p-2 border rounded w-full mb-2"
            />
            <Select onValueChange={(value) => setNewField({ ...newField, type: value })}>
              <SelectTrigger className="w-full mb-2">
                <SelectValue placeholder="Select a type"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Types</SelectLabel>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="password">Password</SelectItem>
                  <SelectItem value="textarea">Textarea</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardContent>
          <CardFooter>
            <Button onClick={() => addField({ id: Date.now(), label: newField.label, type: newField.type as FormField["type"]})} className="px-4 py-2 rounded-lg w-full">
              Add Field
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div>
        {fields.length > 0 &&
          <DynamicForm
            fields={
              fields
            } handleRemoveField={removeField} />}
      </div>

    </div>
  );
};

export default FormBuilderComponent;