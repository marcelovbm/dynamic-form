'use client';

import { useEffect, useState } from "react";
import { GetForms } from "@/actions/form";
import CreateFormButton from "@/components/create_form_button";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardFooter } from "@/components/ui/card";
import Link from "next/link";

// Define the type for a single form
interface Form {
  id: string;
  name: string;
}

export default function Home() {
  return (
    <div className="p-10 min-h-screen">
      <CreateFormButton />
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <FormCards />
      </div>
    </div>
  );
}

function FormCards() {
  const [forms, setForms] = useState<Form[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchForms() {
      try {
        const data = await GetForms();
        setForms(data);
      } catch (err) {
        console.error("Failed to fetch forms:", err);
        setError("Failed to load forms. Please try again later.");
      }
    }

    fetchForms();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <>
      {forms.map(({ id, name }) => (
        <Card key={id} className="border-[#e5e7eb]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-between">
              {name}
            </CardTitle>
          </CardHeader>
          <CardFooter>
            <Button asChild className="w-full mt-4 cursor-pointer text-white">
              <Link href={`forms/${id}`}>View Form</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}