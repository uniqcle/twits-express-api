import type { Request, Response, NextFunction } from "express"; 
 
export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authHeaders = req.headers.authorization;

    if (!authHeaders) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    next();
};