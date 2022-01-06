import { Request, Response } from 'express'
import { inject } from 'inversify'
import { controller, httpPost, interfaces, request } from 'inversify-express-utils'

import { IUserDTO } from './../../app/useCases/IUserDTO'
import { TYPES } from '@app/@types/types'
import { ISignInUseCase } from '@app/useCases/ISignUseCase'
import { AuthServiceLocator } from '@config/useCases/AuthServiceLocator'

@controller('/auth')
export class AuthController implements interfaces.Controller {
    private readonly signInUseCase: ISignInUseCase

    constructor (
        @inject(TYPES.AuthServiceLocator) serviceLocator: AuthServiceLocator
    ) {
      this.signInUseCase = serviceLocator.GetSignInUseCase()
    }

    @httpPost('/signin')
    public async signIn (@request() req: Request, res: Response): Promise<Response> {
      const userDTO: IUserDTO = req.body

      try {
        const foundUserDTO = await this.signInUseCase.signin(userDTO)
        return res.status(200).json(foundUserDTO)
      } catch (error) {
        return res.status(400).json({ error: error.message })
      }
    }
}
