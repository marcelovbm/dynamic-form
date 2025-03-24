export interface CreateFormInterface {
    name: string,
    fields: any,
}

export interface FormInterface {
    id: string,
    name: string,
    fields: any
}

export interface FormIdAndNameInterface {
    id: string,
    name: string
}

export interface UpdateFormInterface {
    id: string,
    fields: any,
}

interface FormGateway { 
    create(data: CreateFormInterface): Promise<FormInterface>
    getForm(id: string): Promise<FormInterface | null>
    getForms(): Promise<FormIdAndNameInterface[] | null>
    updateForm(data: UpdateFormInterface): Promise<FormInterface>
}

export { FormGateway }