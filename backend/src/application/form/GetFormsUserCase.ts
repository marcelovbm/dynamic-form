import { FormGateway, FormIdAndNameInterface } from "domain/form/FormGateway";

class GetFormsUserCase {
  constructor(private gateway: FormGateway) {}

  async execute(): Promise<FormIdAndNameInterface[] | null> {
    return await this.gateway.getForms();
  }
}

export { GetFormsUserCase };