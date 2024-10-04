import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import { createAccessToken } from "../libs/jwt.js";

export const register = (req, res) => {
  const { email, password } = req.body;

  res.send("Registering");
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ where: { email: email } });

    if (!userFound) {
      return res.status(404).json({ message: "User not Found." });
    }

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Credentials." });
    }

    const token = await createAccessToken({ id: userFound.id });

    res.cookie("token", token);

    res.json({
      user: userFound,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });

  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  try {
    const { id } = req.user.id;
    const userFound = await User.findByPk(id);

    if (!userFound) {
      return res.status(404).json({ message: "User not Found." });
    }

    //res.send(req.user);
    res.json({
      user: userFound,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);

    const { id } = user.id;

    const userFound = await User.findByPk(id);

    if (!userFound) return res.sendStatus(401);

    return res.json({
      id: userFound.id,
      email: userFound.email,
    });
  });
};
