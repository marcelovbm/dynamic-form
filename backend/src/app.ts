import fastify from 'fastify'

import formRoutes from './infrastructure/routes/controller/FormController'
import errorHandler from './infrastructure/routes/exception/errors'
import { serializer } from 'infrastructure/routes/middleware/pre_serializer'

function build(opts = {}) {
  const app = fastify(opts)
  app.setReplySerializer(serializer)

  app.register(formRoutes, { prefix: '/form' })

  app.setErrorHandler(errorHandler)

  return app
}
export default build
