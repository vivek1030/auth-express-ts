import express, { Request, Response, NextFunction } from "express";
import { sequelize } from "../config/database";

export default async function healthCheck(
  req: Request,
  res: Response,
  next: NextFunction
) {
  sequelize
    .authenticate()
    .then((e) => {
      res.status(201).json({ message: "Connection successfull" });
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ message: "Unable to connect with DB" });
    });
}
