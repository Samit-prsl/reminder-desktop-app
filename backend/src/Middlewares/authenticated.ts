import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const auth = async (req: any, res: Response, next: NextFunction) => {
  const SECRET_KEY: string = process.env.SECRET_KEY!;
  const header = req.headers.authorization;
  if (header) {
    const token: string = header.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
      if (err) {
        return res.status(403).json({ message: err });
      }
      req.user = user;
      next();
    });
  } else return res.status(401).json({ message: "Unauthorized" });
};

export default auth;
