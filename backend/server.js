import express from "express";
import cors from "cors";
import { DatabasePostgress } from "./databasePostgres";
import "./crateTable";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const database = new DatabasePostgress();



app.post('/auth/register', async(req, res) => {
    const { name, email, password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({ msg: 'Email já está cadastrado!'});
    }

    await database.create({ name, email, password});
    res.status(201).json({msg: 'Usuário criado!'});
});

app.post('/auth/login', async(req, res) => {
    const { email, password } = req.body;
    if(!email|| !password){
        return res.status(400).json({ msg: 'Preencha email e senha!'});
    }

    const user = await database.findByEmail(email);
    if(!user){
        return res.status(400).json({ msg: 'Usuário não encontrado!'});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(isPasswordValid){
        return res.status(401).json({ msg: 'Senha Inválida!'});
    }

    const token = jwt.sign(
        { id: user.id, email: user.email},
        process.env.JWT_SECRET || 'minhaChaveUltraSecreta',
        { expiresIn: 'id' }
    );

    res.json({
        msg: 'Login realizado!',
        token,
        user: { id: user.id, name: user.name, email: user.email}
    });
});