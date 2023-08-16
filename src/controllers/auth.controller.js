import Usuario from "../models/usuario.model.js";
import bcrypt from 'bcryptjs';
import { createAccesstoken } from "../libs/jwt.js";

export const register = async (req, res) => {
    const { name, password } = req.body;

    try {

        const passwordHash = await bcrypt.hash(password, 10)

        const newUsuario = new Usuario({
            name,
            password: passwordHash,
        });

        const usuarioSaved = await newUsuario.save();
        const token = await createAccesstoken({ id: usuarioSaved._id })
        res.cookie('token', token)
        res.json({
            id: usuarioSaved._id,
            name: usuarioSaved.name,
            createdAt: usuarioSaved.createdAt,
            updatedAt: usuarioSaved.updatedAt
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { name, password } = req.body;

    try {

        const usuarioFound = await Usuario.findOne({ name});
        if (usuarioFound)
        return res.status(400).json(["El nombre de usuario ya existe"]);

        const userFound = await Usuario.findOne({ name })

        if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });

        const isMatch = await bcrypt.compare(password, userFound.password);

        if (!isMatch) return res.status(400).json({ message: "Credenciales Invalidas" });


        const token = await createAccesstoken({ id: userFound._id })
        res.cookie('token', token)
        res.json({
            id: userFound._id,
            name: userFound.name,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    });
    return res.sendStatus(200);

}

export const profile = async (req, res) => {
  const userFound = await Usuario.findById(req.Usuario.id)

  if (!userFound) return res.status(401).json ({ message: "Usuario no encontrado"});
  
  return res.json({
    id: userFound._id,
    name: userFound.name,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt
  })
}