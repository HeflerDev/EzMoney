import jwt from "jsonwebtoken";
import express, {RequestHandler} from "express";

export const verifyToken: RequestHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    // @ts-ignore
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: jwt.VerifyErrors, decoded: jwt.JwtPayload) => {
        if (err) return res.sendStatus(403);
        decoded ? req.body.email = decoded.email : console.error("No body received on Decode")
        next();
    })
}