import { IUserDTO } from './IUserDTO'

export interface ISignInUseCase {
    signin (user: IUserDTO): Promise<IUserDTO>
}
