interface FormGateway { 
    createForm(data: any): Promise<any>
    getForm(id: string): Promise<any>
}

export { FormGateway }