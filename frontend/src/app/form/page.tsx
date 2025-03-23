import { SubmitButton } from "@/components/button/submit";
import { Input } from "@/components/input";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

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

export default async function Form() {
  const response = await fetch("http://localhost:8080/forms/6b9eca42-1f08-42ee-8277-cf80efa31403")
  const body: ResponseProps = await response.json();

  console.log(body)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="my-4">
        <Listbox value={body.data.name}>
          <div className="relative mt-1">
            {/* Button */}
            <ListboxButton className="w-full p-2 border rounded-md bg-white flex justify-between items-center shadow">
              {body.data.name}
              <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            </ListboxButton>
            {/* Dropdown Menu */}
            <ListboxOptions className="absolute w-full mt-2 bg-white border rounded-md shadow-lg">
              {/* {options.map((option) => ( */}
              <ListboxOption
                key={body.data.id}
                value={body.data.name}
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
              >
                <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                <div className="text-sm/6 text-white">{body.data.name}</div>
              </ListboxOption>
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
      <div className="my-4">
        <form className="bg-white p-6 rounded-lg shadow-lg w-96">
          {
            Object.keys(body.data.fields).map((key) => (
              <Input key={key} field={body.data.fields[key]} />
            ))
          }
          <SubmitButton></SubmitButton>
        </form>
      </div>
    </div>
  );
}