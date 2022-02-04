import { Router } from "express";

import { unitsRoutes } from "./unitsRoutes";
import { professionalsRoutes } from "./professionalsRoutes";

const router = Router();

router.use('/api/v1', unitsRoutes);
router.use('/api/v1', professionalsRoutes);

export { router };