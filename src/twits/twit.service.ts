import { ITwitProp } from "./twit.types";
import { PrismaClient, Twit } from "../generated/prisma";

const prisma = new PrismaClient();

export class TwitsService {
    async createTwit(twit: ITwitProp): Twit {
        return await twit;
    }
}
