import { CreateFormInterface, FormGateway, FormIdAndNameInterface, FormInterface } from "domain/form/FormGateway";
import prisma from "../db_client";

class FormPrisma implements FormGateway {

    async getForms(): Promise<FormIdAndNameInterface[] | null> {
        const result = await prisma.form.findMany( {
            select: {
                id: true,
                name: true,}});
        return result;
    }

    async create({ name, fields }: CreateFormInterface): Promise<FormInterface> {
        const restul = await prisma.form.create({
            data: {
                name: name,
                fields: fields
            }
        });
        return restul;
    }

    async getForm(id: string): Promise<FormInterface | null> {
        return await prisma.form.findUnique({
            where: {
                id: id
            }
        });
    }
}

export { FormPrisma }