import e from "express";
import ITransactionController from "./ITransactionController";

export default class TransactionController implements ITransactionController {
    public GetTransaction(req: e.Request, res: e.Response): Promise<void> {
        return Promise.resolve(undefined);
    }

    public Transactions(req: e.Request, res: e.Response): Promise<void> {
        return Promise.resolve(undefined);
    }

    public Transfer(req: e.Request, res: e.Response): Promise<void | e.Response> {
        return Promise.resolve(undefined);
    }

}