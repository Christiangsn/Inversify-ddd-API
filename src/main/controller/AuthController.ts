import { TYPES } from 'app/@types/types'
import { ISignInUseCase } from 'app/useCases/ISignUseCase'
import { AuthServiceLocator } from 'config/useCases/AuthServiceLocator'
import { inject } from 'inversify'
import { controller, httpPost, interfaces, request, response } from 'inversify-express-utils'

@controller('/auth')
export class AuthController implements interfaces.Controller {
    private readonly signInUseCase: ISignInUseCase

    constructor (
        @inject(TYPES.AuthServiceLocator) serviceLocator: AuthServiceLocator
    ) {
      this.signInUseCase = serviceLocator.GetSignInUseCase()
    }
}
