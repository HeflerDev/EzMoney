import IAuthService, {LoginPayload} from "./IAuthService";
import axios from "axios";

export default class AuthService implements IAuthService {
    public success!: boolean;
    public error!: string

    public async Login(payload: LoginPayload): Promise<any> {
        try {
            await axios.post("http://localhost:4000/login", {
                name: payload.name,
                password: payload.password
            }).then(() => this.success = true)
        } catch (err: any) {
            if (err.response) {
                this.error = err.response.data.msg
            } else {
                this.error = "Unknown Error"
            }
        }
    }

    public Logout(): Promise<any> {
        // TODO: Logout function
        return Promise.resolve(undefined);
    }

    public async Register(payload: any): Promise<any> {
        try {
            await axios.post("http://localhost:/4000/users", {
                name: payload.name,
                password: payload.password,
                confPassword: payload.confPassword
            }).then(() => this.success = true)
        } catch (err: any) {
            if (err.response) {
                this.error = err.res.data.msg
            } else {
                this.error = "Unknown Error"
            }
        }
    }
}