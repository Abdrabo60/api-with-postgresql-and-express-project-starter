import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const verifyAuthToken = (req: Request, res: Response, next: () => void) => {
  try {
    const authorizationHeader = req.headers.authorization + "";
    const token = authorizationHeader.split(" ")[1];
    //console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET + "");
    next();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(error);
    }
    res.status(401);
    res.send("invalid token");
  }
};
export default verifyAuthToken;
