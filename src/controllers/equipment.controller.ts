import { Request, Response } from 'express';

export class EquipmentController {
  public static create = (_req: Request, res: Response): void => {
    // TODO: tomar los datos de req.body, llamar al servicio y responder 201.
    res.status(501).json({
      success: false,
      message: 'El registro de equipos todavía no está implementado.'
    });
  };

  public static list = (req: Request, res: Response): void => {
    const { environmentId } = req.query;
    // TODO: usar environmentId como filtro opcional y llamar al servicio de consulta.
    res.status(501).json({
      success: false,
      message: environmentId
        ? `La consulta de equipos del ambiente ${environmentId} todavía no está implementada.`
        : 'El listado de equipos todavía no está implementado.'
    });
  };

  public static updatePartial = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: tomar los campos de req.body y llamar al servicio de actualización parcial.
    res.status(501).json({
      success: false,
      message: `La actualización parcial del equipo ${id} todavía no está implementada.`
    });
  };
}
