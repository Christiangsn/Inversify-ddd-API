import { SignInUseCase } from 'app/useCases/SignInUseCase'
import { inject, injectable } from 'inversify'
import { IUserRepository } from '@infra/repositories/IUserRepository'

@injectable()
export class AuthServiceLocator {
  constructor (
    @inject(TYPES.IUserRepository) private readRepository: IUserRepository
  ) {}

  public GetSignInUseCase () {
    return new SignInUseCase(this.readRepository)
  }
}
