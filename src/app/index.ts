import { UserRepository } from './../infra/InMemory/FakeUserRepository'
import { Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'
import 'reflect-metadata'
import express, { json, urlencoded } from 'express'

import { AuthServiceLocator } from '@config/useCases/AuthServiceLocator'
import { TYPES } from './@types/types'
import { IUserRepository } from '@infra/repositories/IUserRepository'

const container = new Container()
container.bind<AuthServiceLocator>(TYPES.AuthServiceLocator).to(AuthServiceLocator)
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository)

const server = new InversifyExpressServer(container)
server.setConfig((application: express.Application) => {
  application.use(json({ limit: '100mb' }))
  application.use(urlencoded({ limit: '100mb', extended: true }))
})

const app = server.build()
app.listen(5050, () => {
  console.log('server running')
})
