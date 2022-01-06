import { User } from '@domain/entities/UserEntity'
import { IUserRepository } from './../../src/infra/repositories/IUserRepository'

export class FakeUserRepository implements IUserRepository {
    public users = [
      {
        email: 'matheusms@gg.com',
        id: '123',
        name: 'matheusms',
        password: 'pass',
        type: 'norm'
      },
      {
        email: 'juliosm@gg.com',
        id: '123',
        name: 'juliosm',
        password: 'pass',
        type: 'admin'
      }
    ]

    public async fetch (user: User): Promise<User> {
      const res = this.users.find((userList) => userList.email === user.email)
      if (!res) {
        return null
      }

      if (res.password !== user.password) {
        throw Error('Invalid email or password')
      }

      user.id = res.id
      user.name = res.name
      return user
    }

    public async add (user: User): Promise<User> {
      const max = 9999
      const min = 1000
      user.id = (Math.floor(Math.random() * (+max - +min)).toString())

      this.users.push({
        email: user.email,
        id: user.id,
        name: user.name,
        password: user.password,
        type: user.type
      })

      return user
    }
}
