import { FastifyInstance } from 'fastify'

import { Form } from '@prisma/client'

import { IEntityId } from '../schemas/common'
import { ApiError } from '../exception/errors'
import { GetFormUserCase } from 'application/form/GetFormUseCase'
import { FormPrisma } from 'infrastructure/db/form/FormPrisma'

async function formRoutes(app: FastifyInstance) {

  const log = app.log.child({ component: 'formRoutes' })
  const useCase = new GetFormUserCase(new FormPrisma());
  app.get<{
    Params: IEntityId
    Reply: Form
  }>('/:id', {
    async handler(req, reply) {
      const { params } = req
      const { id } = params
      log.debug('get form by id')
      try {
        const form = await useCase.execute(id);
        reply.send(form)
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to fetch form', 400)
      }
    },
  })
}

export default formRoutes
