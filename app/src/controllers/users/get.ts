import { prisma } from "@/includes/prisma";
import { Request, Response, NextFunction } from "express";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
