import express, {RequestHandler} from "express";

export default interface IUserController {
    Users(req: express.Request, res: express.Response): Promise<void>

    Register(req: express.Request, res: express.Response): Promise<void | express.Response>

    Login(req: express.Request, res: express.Response): Promise<void | express.Response>

    Logout(req: express.Request, res: express.Response): Promise<void | express.Response>
}