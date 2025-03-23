export interface SourceData {
    id: string,
    sourceRecordId: string, 
    question: string,
    answer: string,
}

export interface CreateSourceData {
    formId: string, 
    question: string,
    answer: string,
}

interface SourceDataGateway {
    create(data: CreateSourceData): Promise<SourceData>;
}

export { SourceDataGateway }