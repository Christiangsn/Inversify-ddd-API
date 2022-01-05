import { User } from '@domain/entities/UserEntity'
import { IUserRepository } from '@infra/repositories/IUserRepository'
import { ISignInUseCase } from './ISignUseCase'
import { IUserDTO } from './IUserDTO'

export class SignInUseCase implements ISignInUseCase {
  constructor (
    private readonly userRepository: IUserRepository
  ) {}

  public async signin (userDTO: IUserDTO): Promise<IUserDTO> {
    const user = new User(userDTO.id, userDTO.name, userDTO.email, userDTO.password, userDTO.type)
    const saveUser = await this.userRepository.fetch(user)
    return saveUser
  }
}
