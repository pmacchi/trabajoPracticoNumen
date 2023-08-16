import  jwt  from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export function createAccesstoken(payload) {
   return new Promise((resolve, reject) => {
        jwt.sign
            (payload,
                TOKEN_SECRET,
            {
                expiresIn: '24h',
            },
                (err, token) => {
                    if (err) reject(err)
                    resolve(token)
                });
    });
}

