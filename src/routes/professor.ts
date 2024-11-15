// routes/usuarios.ts
import { Router } from "express";
import {
  createProfessor,
  deleteProfessor,
  getProfessor,
  updateProfessor,
} from "../controllers/professor";
import validate from "../middlewares/validate";
import { professorSchema } from "../schemas/professor";

const router = Router();

// Regresa todos los alumnos en la base de datos
router.get("/", getProfessor);
router.post("/", validate(professorSchema), createProfessor);
router.put("/:id", validate(professorSchema), updateProfessor);
router.delete("/:id", deleteProfessor);

export default router;
