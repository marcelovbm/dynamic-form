import { CreateFormInterface } from "domain/form/CreateFormInterface";
import { FormGateway } from "domain/form/FormGateway";
import { FormInterface } from "domain/form/FormInterface";

class CreateFormUseCase {

  constructor(private gateway: FormGateway) {}

  async execute({ name, fields } : CreateFormInterface): Promise<FormInterface> {
    return await this.gateway.create({ name, fields });
  }
}

export { CreateFormUseCase }