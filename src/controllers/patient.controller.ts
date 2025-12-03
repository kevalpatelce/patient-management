import { Request, Response } from "express";
import {
  createPatient,
  getPatient,
  getAllPatients,
  updatePatient,
  deletePatient
} from "../services/patient.service";

export async function create(req: Request, res: Response) {
  const result = await createPatient(req.body);
  res.json(result);
}

export async function getOne(req: Request, res: Response) {
  const result = await getPatient(req.params.id);
  res.json(result || {});
}

export async function getAll(_req: Request, res: Response) {
  const result = await getAllPatients();
  res.json(result);
}

export async function update(req: Request, res: Response) {
  const result = await updatePatient(req.params.id, req.body);
  res.json(result);
}

export async function remove(req: Request, res: Response) {
  const result = await deletePatient(req.params.id);
  res.json(result);
}
