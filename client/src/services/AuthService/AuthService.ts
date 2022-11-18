import IAuthService from "./IAuthService";

export default class AuthService implements IAuthService {
   Login(payload: any): Promise<any> {
      // TODO: Login Function
      return Promise.resolve(undefined);
   }

   Logout(): Promise<any> {
      // TODO: Logout function
      return Promise.resolve(undefined);
   }

   Register(payload: any): Promise<any> {
      // TODO: Register function
      return Promise.resolve(undefined);
   }
}