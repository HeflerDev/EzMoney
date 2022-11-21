import Users from "../../models/User";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"
import IUserController from "./IUserController";
import e from "express";

dotenv.config()

export default class UserController implements IUserController {
    public async Login(req: e.Request, res: e.Response): Promise<void | e.Response> {
        try {
            const user: Array<any> = await Users.findAll({
                where: {
                    username: req.body.username
                }
            });
            const match = await bcrypt.compare(req.body.password, user[0].password);
            if (!match) return res.status(400).json({msg: "Wrong Password"});
            const userId = user[0].id;
            const name = user[0].name;
            // @ts-ignore
            const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            });
            // @ts-ignore
            const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET, {
                expiresIn: '1d'
            });
            await Users.update({refresh_token: refreshToken}, {
                where: {
                    id: userId
                }
            });
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            });
            res.json({accessToken});
        } catch (error) {
            res.status(404).json({msg: "Email not found"});
        }
    }

    public async Logout(req: e.Request, res: e.Response): Promise<void | e.Response> {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(204);
        const user: Array<any> = await Users.findAll({
            where: {
                refresh_token: refreshToken
            }
        });
        if (!user[0]) return res.sendStatus(204);
        const userId = user[0].id;
        // await Users.update({refresh_token: null}, {
        //     where: {
        //         id: userId
        //     }
        // });
        res.clearCookie('refreshToken');
        return res.sendStatus(200);
        return Promise.resolve(undefined);
    }

    public async Register(req: e.Request, res: e.Response): Promise<void | e.Response> {
        const {name, accountId, password, confPassword} = req.body;
        if (password !== confPassword) return res.status(400).send("Password and Confirm Password do not match");
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        try {
            await Users.create({
                username: name,
                password: hashPassword,
                account_id: accountId
            });
            res.json({msg: "Registration Successful"})
        } catch (error) {
            console.log(error);
        }
    }

    public async Users(req: e.Request, res: e.Response): Promise<void> {
        try {
            const users = await Users.findAll({
                attributes: ['id', 'name', 'email']
            });
            res.json(users)
        } catch (error) {
            console.log(error);
        }
    }
}