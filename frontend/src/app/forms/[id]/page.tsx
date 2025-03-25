import { GetFormsById } from "@/actions/form";
import FormBuilderComponent from "@/components/form_builder";
import FormSubmited from "@/components/form_submited";
import { SaveFormButton } from "@/components/save_form_button";

export default async function FormBuilder({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { name, fields } = await GetFormsById(id);

  console.log(fields)

  return (
    <main className="flex w-full flex-col">
      <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
        <h2 className="truncate font-medium">
          <span className="text-muted-foreground mr-2">Form: </span>
          <b>{name}</b>
        </h2>
        <div className="flex items-center gap-2">
          {/* <PreviewForm></PreviewForm> */}
          { (fields === null || Object.keys(fields).length === 0) && <SaveFormButton id={id} /> }
        </div>
      </nav>
      <div className="flex items-center justify-center">
        { (fields === null || Object.keys(fields).length === 0) && <FormBuilderComponent/> }
        { (fields !== null && Object.keys(fields).length !== 0) && <FormSubmited id={id} elements={fields}/> }
      </div> 

    </main>
  );
}

