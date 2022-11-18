export default interface IAuthService {
    Login(payload: any): Promise<any>
    Register(payload: any): Promise<any>
    Logout(): Promise<any>
}