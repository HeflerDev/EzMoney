// TODO: Type accordingly
export interface LoginPayload {
    email: string
    password: string
}

export default interface IAuthService {
    success: boolean

    Login(payload: LoginPayload): Promise<any>

    Register(payload: any): Promise<any>

    Logout(): Promise<any>
}