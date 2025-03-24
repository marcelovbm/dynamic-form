import { GetForms } from "@/actions/form";
import CreateFormButton from "@/components/create_form_button";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardFooter } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";

export default function Home() {
  return (
      <div className="p-10 min-h-screen">
        <Toaster richColors />
        <CreateFormButton />
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          <FormCards />
        </div>
      </div>
  );
}

async function FormCards() {
  const forms = await GetForms();
  return <>
    {
      forms.map(({ id, name }) => (
        <Card key={id} className="border-[#e5e7eb]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-between">
              {name}
            </CardTitle>
          </CardHeader>
          {/* <CardContent/> */}
          <CardFooter>
            <Button asChild className="w-full mt-4 cursor-pointer text-white">
              <Link href={`forms/${id}`}>View Form</Link>
            </Button>
          </CardFooter>
        </Card>
      ))
    }
  </>
}