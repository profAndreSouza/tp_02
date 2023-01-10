import { Request, Response } from "express";
import User from "../models/UserModel"

var users = [
    (new User()).getUserById(0),
    (new User()).getUserById(1),
    (new User()).getUserById(2),
    (new User()).getUserById(3)
];


export default {
    async index (req: Request, res: Response) {
        users[2].setEmail('danilo.oliveira@sp.senai.br');
        return res.json(users);
    }
};