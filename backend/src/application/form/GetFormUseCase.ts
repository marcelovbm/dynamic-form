import { Form } from "@prisma/client";
import { FormGateway } from "domain/form/FormGateway";

class GetFormUserCase {

    constructor(private gateway: FormGateway) {}
    
    async execute(formId: string): Promise<Form> {
        return this.gateway.getForm(formId);
    }

}

export { GetFormUserCase }