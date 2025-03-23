import { FastifyInstance } from 'fastify'
import { ApiError } from '../exception/errors'
import { CreateSourceData, SourceData } from 'domain/source_data/SourceDataGateway'
import { CreateSourceDataUseCase } from 'application/source_data/CreateSourceDataUseCase'
import { SourceDataPrisma } from 'infrastructure/db/prisma/source_data/SourceDataPrisma'
import { SourceRecord } from '@prisma/client'

async function sourceDataRoutes(app: FastifyInstance) {

  const log = app.log.child({ component: 'sourceDataRoutes' })

  app.post<{
    Body: { question: string, answer: string }[]
    Params: { formId: string }
    Reply: SourceRecord
  }>('/', {
    async handler(req, reply) {
      const useCase = new CreateSourceDataUseCase(new SourceDataPrisma());
      const { formId } = req.params
      const data = req.body
      try {
        log.info(`Teste - ${formId}`)
        const form = await useCase.execute({ formId, data });
        reply.send(form)
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to create source data', 400)
      }
    },
  })

}

export default sourceDataRoutes
