interface FieldsProps {
    type: string,
    question: string,
    required: boolean,
}

interface Props {
    key: string,
    field: FieldsProps,
}

export function Input({ key, field }: Props) {
    return (
        <div className="sm:col-span-3" key={key}>
            <label
                htmlFor={key}
                className="block text-sm/6 font-medium text-gray-900">
                {field.question}
            </label>
            <div className="mb-2">
                <input
                    id={key}
                    name={key}
                    type={field.type == 'datetime' ? 'datetime-local' : field.type}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
            </div>
        </div>
    )
}