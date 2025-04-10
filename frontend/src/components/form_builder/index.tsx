'use client';

import { useState } from "react";
import { DynamicForm, FormField } from "../dynamic_form";
import { Card, CardHeader, CardContent, CardTitle, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { SelectGroup } from "@radix-ui/react-select";
import formContext from "@/hooks/form-context";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

export function FormBuilderComponent() {

  const { fields, addField, removeField } = formContext();

  const [newField, setNewField] = useState({ label: "", type: "", required: false });
  const id = `fields-${fields.length}`

  return (
    <div className="flex gap-4 items-baseline mt-4">
      <div>
        <Card className="w-[350px] border-[#e5e7eb]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-between">
              Add a Field
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Label className="mb-2" htmlFor="question">Question</Label>
            <Input
              id="question"
              type="text"
              placeholder="Field Label"
              value={newField.label}
              onChange={(e) => setNewField({ ...newField, label: e.target.value })}
              className="p-2 border rounded w-full mb-2"
            />
            <div className="flex items-center gap-2 mb-2">
              <Switch
                id="required"
                checked={newField.required}
                typeof="boolean"
                onCheckedChange={(checked) => {
                  return checked
                    ? setNewField({ ...newField, required: true })
                    : setNewField({ ...newField, required: false })
                }}
              />
              <Label htmlFor="required">Required</Label>
            </div>
            <Label className="mb-2" htmlFor="type">Type</Label>
            <Select onValueChange={(value) => setNewField({ ...newField, type: value })}>
              <SelectTrigger className="w-full mb-2">
                <SelectValue placeholder="Select a type"></SelectValue>
              </SelectTrigger>
              <SelectContent id="type">
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
            <Button onClick={() => addField({ id: id, question: newField.label, type: newField.type as FormField["type"], required: newField.required })} className="px-4 py-2 rounded-lg w-full">
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