import type { Request, Response } from "express";

export const profileView = (req: Request, res: Response) => {
    res.render("profile", {
        user: {
            name: "Andrey",
            age: 42,
        },
    });
};
