import { SourceRecord } from "@prisma/client";
import prisma from "../db_client";
import { CreateSourceData, SourceData, SourceDataGateway } from "domain/source_data/SourceDataGateway";

class SourceDataPrisma implements SourceDataGateway {

    async create(data: CreateSourceData): Promise<SourceRecord> {
        return prisma.sourceRecord.create({
                data: {
                    formId: data.formId,
                    sourceData: {
                        create: data.data.map(d => {
                            return {
                                question: d.question,
                                answer: d.answer
                            }
                        }
                        )
                    }
                }
            });
    }
}

export { SourceDataPrisma }