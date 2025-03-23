import { Static, Type } from '@sinclair/typebox'

import { Uuid } from '../../routes/schemas/typebox_base'

export const EntityId = Type.Object({
  id: Uuid(),
})

export type IEntityId = Static<typeof EntityId>
