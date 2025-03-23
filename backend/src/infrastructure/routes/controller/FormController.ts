import { FastifyInstance } from 'fastify'

import { Form } from '@prisma/client'

import { IEntityId } from '../schemas/common'
import { ApiError } from '../exception/errors'
import { GetFormUserCase } from 'application/form/GetFormUseCase'
import { CreateFormUseCase } from 'application/form/CreateFormUseCase'
import { CreateFormInterface, FormIdAndNameInterface } from 'domain/form/FormGateway'
import { GetFormsUserCase } from 'application/form/GetFormsUserCase'
import { FormPrisma } from 'infrastructure/db/prisma/form/FormPrisma'

async function formRoutes(app: FastifyInstance) {

  const log = app.log.child({ component: 'formRoutes' })
  app.get<{
    Params: IEntityId
    Reply: Form | null
  }>('/:id', {
    async handler(req, reply) {
      const useCase = new GetFormUserCase(new FormPrisma());
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

  app.post<{
    Body: CreateFormInterface
    Reply: Form
  }>('/', {
    async handler(req, reply) {
      const useCase = new CreateFormUseCase(new FormPrisma());
      const { name, fields } = req.body
      log.debug('get form by id')
      try {
        const form = await useCase.execute({ name, fields});
        reply.send(form)
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to create form', 400)
      }
    },
  })

  app.get<{
    Reply: FormIdAndNameInterface[] | null
  }>('/', {
    async handler(req, reply) {
      const useCase = new GetFormsUserCase(new FormPrisma());
      log.debug('get form by id')
      try {
        const form = await useCase.execute();
        reply.send(form)
      } catch (err: any) {
        log.error({ err }, err.message)
        throw new ApiError('failed to fetch forms', 400)
      }
    },
  })
}

export default formRoutes
