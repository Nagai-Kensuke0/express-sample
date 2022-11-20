import { prisma } from "@/includes/prisma"
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {

  const { email, name, password } = req.body;

  const saltRounds = 10
  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword
    }
  })  

  res.status(200).json({
    status: hashedPassword,
  });
}