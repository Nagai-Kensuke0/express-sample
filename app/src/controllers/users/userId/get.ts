import { prisma } from "@/includes/prisma"
import { Request, Response, NextFunction } from "express";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try{
    const userId = req.params.userId

    const user = await prisma.user.findUnique({
      where: {
        id: userId
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
      rejectOnNotFound: true
    })

    res.status(200).json(user)
  } catch(error) {
    next(error)
  }
}