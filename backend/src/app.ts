import fastify from 'fastify'

import formRoutes from './infrastructure/routes/form'
import errorHandler from './infrastructure/routes/exception/errors'

function build(opts = {}) {
  const app = fastify(opts)

  app.register(formRoutes, { prefix: '/form' })

  app.setErrorHandler(errorHandler)

  return app
}
export default build
