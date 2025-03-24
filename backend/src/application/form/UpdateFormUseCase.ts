import { FormGateway, FormInterface, UpdateFormInterface } from "domain/form/FormGateway";

class UpdateFormUseCase {

    constructor(private gateway: FormGateway) {}
    
    async execute(data: UpdateFormInterface): Promise<FormInterface | null> {
        return this.gateway.updateForm(data);
    }
}

export { UpdateFormUseCase }