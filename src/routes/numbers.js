import { Router } from "express";
import { getPrimeNumber } from "../controllers/numbers.js";

const router = Router()

router.get('/prime/:base', getPrimeNumber)

export default router;
