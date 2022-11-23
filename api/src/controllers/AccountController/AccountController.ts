import IAccountController from "./IAccountController";
import e from "express";

export default class AccountController implements IAccountController {
    public AddCredits(req: e.Request, res: e.Response): Promise<void | e.Response> {
        return Promise.resolve(undefined);
    }

    public RemoveCredits(req: e.Request, res: e.Response): Promise<void | e.Response> {
        return Promise.resolve(undefined);
    }

}