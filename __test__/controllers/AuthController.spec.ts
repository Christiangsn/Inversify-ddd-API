/* eslint-disable no-undef */
import { it } from 'mocha'
import chai from 'chai'
import sinon, { SinonSandbox } from 'sinon'
import sinonChai from 'sinon-chai'
import { AuthController } from '@main/controller/AuthController'
import { AuthServiceLocator } from '@config/useCases/AuthServiceLocator'
import { FakeUserRepository } from '../helpers/FakeRepository'

const { expect } = chai

chai.use(sinonChai)

describe('Auth Controller', () => {
  const sut: AuthController
  const sandbox: SinonSandbox = null
  const serviceLocator: AuthServiceLocator
  const fakeRepository: FakeUserRepository

  const user = {
    email: 'christian@gg.com',
    id: '123',
    name: 'christian',
    password: 'pass',
    type: 'admin'
  }
})
