import { CreateFormInterface, FormGateway, FormInterface } from "domain/form/FormGateway";

class CreateFormUseCase {

  constructor(private gateway: FormGateway) {}

  async execute({ name, fields } : CreateFormInterface): Promise<FormInterface> {
    return await this.gateway.create({ name, fields });
  }
}

export { CreateFormUseCase }