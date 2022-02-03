import { Router } from "express";

import { unitsRoutes } from "./unitsRoutes";

const router = Router();

router.use('/api/v1', unitsRoutes);

export { router };