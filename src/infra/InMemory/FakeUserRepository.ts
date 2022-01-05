import { User } from '@domain/entities/UserEntity'
import { IUserRepository } from '@infra/repositories/IUserRepository'

export class UserRepository implements IUserRepository {
  public async fetch (user: User): Promise<User> {

  }
}
