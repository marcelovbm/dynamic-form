import { FormGateway, FormInterface } from "domain/form/FormGateway";

class GetFormUserCase {

    constructor(private gateway: FormGateway) {}
    
    async execute(formId: string): Promise<FormInterface | null> {
        return this.gateway.getForm(formId);
    }

}

export { GetFormUserCase }