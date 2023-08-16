import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
    const { token } = req.cookies

    if (!token)
        return res.status(401).json({ message: "TOKEN no autentificado" });

    jwt.verify(token, TOKEN_SECRET, (err, Usuario) => {
        if (err) return res.status(401).json({ message: "Token Invalido" });

        req.Usuario = Usuario;

        next();
    })
};