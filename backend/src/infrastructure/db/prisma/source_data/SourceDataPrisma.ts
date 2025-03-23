import prisma from "../db_client";
import { CreateSourceData, SourceData, SourceDataGateway } from "domain/source_data/SourceDataGateway";

class SourceDataPrisma implements SourceDataGateway {

    async create(data: CreateSourceData): Promise<SourceData> {
        const sourceRecord = await prisma.sourceRecord.create({
            data: {
                formId: data.formId
            }
        })

        return await prisma.sourceData.create({
            data: {
                sourceRecordId: sourceRecord.id,
                question: data.question,
                answer: data.answer
            }
        });
    }
}

export { SourceDataPrisma }