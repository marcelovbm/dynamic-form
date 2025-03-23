import fastify from 'fastify'

import formRoutes from './infrastructure/routes/controller/FormController'
import errorHandler from './infrastructure/routes/exception/errors'
import { serializer } from 'infrastructure/routes/middleware/pre_serializer'
import sourceDataRoutes from 'infrastructure/routes/controller/SourceDataController'

function build(opts = {}) {
  const app = fastify(opts)
  app.setReplySerializer(serializer)

  app.register(formRoutes, { prefix: '/forms' })
  app.register(sourceDataRoutes, { prefix: '/forms/:formId/data' })

  app.setErrorHandler(errorHandler)

  return app
}
export default build
