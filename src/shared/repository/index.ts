import type { ServiceRepository } from './interfaces/service.repository'

import { MockServiceRepository } from './mock/service.mock.repository'


export const serviceRepository: ServiceRepository =
  new MockServiceRepository()