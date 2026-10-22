import { Request, Response, NextFunction } from 'express';
import { ICreateEnvironmentDTO } from '../DTOs/environment.dto';

const isCreateEnvironmentDTO = (value: unknown): value is ICreateEnvironmentDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const environment = value as Record<string, unknown>;
  return (
    typeof environment.numero === 'number' && Number.isInteger(environment.numero)&&
    typeof environment.capacidad === 'number' && Number.isInteger(environment.numeroPC) &&
    typeof environment.numeroEquipos === 'number' && Number.isInteger(environment.numeroPC) &&
    typeof environment.instructorRecibe === 'string' && environment.instructorRecibe.trim() !== ''
  );
};

export const validateEnvironmentPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isCreateEnvironmentDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos del ambiente inválidos.'
    });
    return;
  }

  next();
};
