import { randomUUID } from "node:crypto"
import { sql } from "./sql.js";
import bcrypt from "bcrypt"

export class DatabasePostgress{
    async list(){
        try {
            const result = await sql `SELECT * FROM users`;
            return result;
        }catch (err){
            console.log("Erro ao listar usuários: ", err);
            return [];
        }
    }

    async create(user){
        const userId = randomUUId();
        const { name, email, password } = user;
        const hashedPassword = await bcrypt.hash(password, 10);

        await sql`
            INSERT INTO users (id, name, email, password) VALUE (${userId}, ${name}, ${email}, ${hashedPassword
            })
        `;
    }

    async findByEmail(email){
        const result = await
    }
}