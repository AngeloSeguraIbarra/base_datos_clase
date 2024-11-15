import { Course } from "../interfaces/course";
import {
  deleteCourse,
  findAllCourse,
  insertCourse,
  updateCourse,
} from "../models/course";

// Obtener todos los alumnos
export const findAll = async (limit: number, offset: number) => {
  return await findAllCourse(limit, offset);
};

export const insert = async (professor: Course) => {
  return await insertCourse(professor);
};

export const update = async (id: number, profesor: Course) => {
  return await updateCourse(id, profesor);
};

export const deleteById = async (id: number) => {
  return await deleteCourse(id);
};
