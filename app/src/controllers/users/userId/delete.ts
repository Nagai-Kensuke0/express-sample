import { prisma } from "@/includes/prisma";
import { Request, Response, NextFunction } from "express";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.params.userId;

    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    res.status(200).json();
  } catch (error) {
    next(error);
  }
};
