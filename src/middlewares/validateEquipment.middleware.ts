import { Request, Response, NextFunction } from 'express';
import { ICreateEquipmentDTO } from '../DTOs/equipment.dto';

const isCreateEquipmentDTO = (value: unknown): value is ICreateEquipmentDTO => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return false;
  }

  const equipment = value as Record<string, unknown>;
  return (
    typeof equipment.numeroEquipo === 'number' && Number.isInteger(equipment.numeroEquipo)&&
    typeof equipment.marca === 'string' && equipment.marca.trim() !== ''&&
    typeof equipment.numeroDeEquipos === 'number' && Number.isInteger(equipment.numeroDeEquipos) 
  );
};

export const validateEquipementPayload = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const body: unknown = req.body;

  if (!isCreateEquipmentDTO(body)) {
    res.status(400).json({
      success: false,
      error: 'Datos de equipos inválidos.'
    });
    return;
  }

  next();
};
