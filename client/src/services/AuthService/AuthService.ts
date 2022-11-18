import IAuthService from "./IAuthService";

export default class AuthService implements IAuthService {
   Login(payload: any): Promise<any> {
      return Promise.resolve(undefined);
   }

   Logout(): Promise<any> {
      return Promise.resolve(undefined);
   }

   Register(payload: any): Promise<any> {
      return Promise.resolve(undefined);
   }
}