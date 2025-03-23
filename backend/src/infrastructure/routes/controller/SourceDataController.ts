import { FastifyInstance } from 'fastify'
import { ApiError } from '../exception/errors'
import { CreateSourceData, SourceData } from 'domain/source_data/SourceDataGateway'
import { CreateSourceDataUseCase } from 'application/source_data/CreateSourceDataUseCase'
import { SourceDataPrisma } from 'infrastructure/db/prisma/source_data/SourceDataPrisma'


async function sourceDataRoutes(app: FastifyInstance) {

  const log = app.log.child({ component: 'sourceDataRoutes' })

  app.post<{
    Body: CreateSourceData
    Reply: SourceData
  }>('/', {
    async handler(req, reply) {
      const useCase = new CreateSourceDataUseCase(new SourceDataPrisma());
      const { formId, question, answer } = req.body
      try {
        const form = await useCase.execute({ formId, question, answer });
        reply.send(form)
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to create source data', 400)
      }
    },
  })

}

export default sourceDataRoutes
