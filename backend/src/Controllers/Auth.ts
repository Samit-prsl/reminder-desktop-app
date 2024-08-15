import { Request, Response } from "express";
import User from "../Models/Auth";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const isUser = await User.findOne({ email: email });
    if (isUser)
      return res.status(400).json({ message: "User already exists!" });

    const salt: string = await bcrypt.genSalt(10);
    const hashedPassword: any = await bcrypt.hash(password, salt);

    const newUser = new User({ email: email, password: hashedPassword });
    await newUser.save();

    return res.status(200).json({ message: "User created Successfully" });
  } catch (error) {
    return error;
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const isUser = await User.findOne({ email: email });
    if (!isUser) return res.status(401).json({ message: "Incorrect email" });

    const passMatch: boolean = await bcrypt.compare(password, isUser.password);
    if (!passMatch)
      return res.status(401).json({ message: `Incorrect password` });

    const SECRET_KEY: string = process.env.SECRET_KEY!;

    const token: string = jwt.sign(
      { email: isUser.email, role: "email" },
      SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );

    res.status(200).json({ token });
  } catch (error) {
    return error;
  }
};

export default { register, login };
