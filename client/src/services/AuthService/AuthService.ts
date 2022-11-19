import IAuthService, {LoginPayload} from "./IAuthService";

export default class AuthService implements IAuthService {
    public success!: boolean;

    public Login(payload: LoginPayload): Promise<any> {
        return Promise.resolve(undefined);
    }

    public Logout(): Promise<any> {
        // TODO: Logout function
        return Promise.resolve(undefined);
    }

    public Register(payload: any): Promise<any> {
        // TODO: Register function
        return Promise.resolve(undefined);
    }
}