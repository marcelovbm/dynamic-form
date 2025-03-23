import { CreateSourceData, SourceData, SourceDataGateway } from "domain/source_data/SourceDataGateway";

class CreateSourceDataUseCase {

    constructor(private gateway: SourceDataGateway) { }

    async execute(data: CreateSourceData): Promise<SourceData> {
        return await this.gateway.create(data);
    }

}

export  { CreateSourceDataUseCase }