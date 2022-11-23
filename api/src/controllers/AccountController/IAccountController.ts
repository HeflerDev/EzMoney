import express from "express";

export default interface IAccountController {
    AddCredits(req: express.Request, res: express.Response): Promise<void | express.Response>

    RemoveCredits(req: express.Request, res: express.Response): Promise<void | express.Response>
}