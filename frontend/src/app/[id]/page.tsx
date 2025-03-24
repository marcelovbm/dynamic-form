import { GetFormsById } from "@/actions/form";
import FormBuilderComponent from "@/components/form_builder";
import { SaveFormButton } from "@/components/save_form_button";
import formContext from "@/hooks/form-context";

export default async function FormBuilder({ params }: { params: { id: string } }) {
  const { id } = await params;
  const form = await GetFormsById(id);


  return (
    <main className="flex w-full flex-col">
      <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
        <h2 className="truncate font-medium">
          <span className="text-muted-foreground mr-2">Form: </span>
          <b>{form.name}</b>
        </h2>
        <div className="flex items-center gap-2">
          {form.fields === null && (<SaveFormButton />)}
        </div>
      </nav>
      <div className="flex flex-grow items-center justify-center mt-4">
        {form.fields === null && (<FormBuilderComponent />)}
      </div>

    </main>
  );
}

