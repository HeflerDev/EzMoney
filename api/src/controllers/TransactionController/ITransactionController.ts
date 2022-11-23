import express from "express";

export default interface ITransactionController {
    Transactions(req: express.Request, res: express.Response): Promise<void>

    GetTransaction(req: express.Request, res: express.Response): Promise<void>

    Transfer(req: express.Request, res: express.Response): Promise<void | express.Response>
}