import { FormGateway } from "domain/form/FormGateway";
import prisma from "../prisma/db_client";

class FormPrisma implements FormGateway {
    async createForm(data: any): Promise<any> {
        // Prisma create form
    }

    async getForm(id: string): Promise<any> {
        return await prisma.form.findUnique({
            where: {
                id: id
            }
        });
    }
}

export { FormPrisma }