import { User } from '@domain/entities/UserEntity'

export interface IUserRepository {
    fetch(user: User): Promise<User>
}
