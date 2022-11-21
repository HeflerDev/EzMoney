import express from "express";

export default interface ITokenController {
    RefreshToken(req: express.Request, res: express.Response): Promise<void | express.Response>
}