import { SourceRecord } from "@prisma/client";

export interface SourceData {
    id: string,
    sourceRecordId: string, 
    question: string,
    answer: string,
}

export interface SourceDataInterface {
    question: string,
    answer: string,
}

export interface CreateSourceData {
    formId: string, 
    data: SourceDataInterface[],
}

interface SourceDataGateway {
    create(data: CreateSourceData): Promise<SourceRecord>;
}

export { SourceDataGateway }