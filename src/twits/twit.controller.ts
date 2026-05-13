import { Router } from "express";
import { z } from "zod";
import type { Request, Response } from "express";
import { TwitsService } from "./twit.service";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createTwitDto } from "./twit.dto";

const router = Router();
const twitsService = new TwitsService();

router.post("/twits", authMiddleware, async (req: Request, res: Response) => {
    const validation = createTwitDto.safeParse(req.body);

    // была валадация данных
    //if(!req.body?.text?.length){

    if (!validation.success) {
        const flattened = z.flattenError(validation.error);
        // { formErrors: string[], fieldErrors: { [key: string]: string[] } }

        return res.status(400).json({
            message: "Validation failed",
            errors: flattened.fieldErrors, // { text: ["Text is required"] }
        });
    }

    const twit = await twitsService.createTwit(validation.data);
    res.status(201).json(twit);
});

export const TwitsRouter = router;
