import { Router } from "express";

import { unitsRoutes } from "./unitsRoutes";
import { professionalsRoutes } from "./professionalsRoutes";

import { appointmentsRoutes } from "./appointmentsRoutes";

const router = Router();

router.use('/api/v1', unitsRoutes);
router.use('/api/v1', professionalsRoutes);
router.use('/api/v1', appointmentsRoutes);

export { router };