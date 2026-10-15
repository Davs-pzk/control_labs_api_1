import { Request, Response } from 'express';

export class EnvironmentController {
  public static list = (_req: Request, res: Response): void => {
    // TODO: llamar al servicio que consulta todos los ambientes.
    res.status(501).json({
      success: false,
      message: 'El listado de ambientes todavía no está implementado.'
    });
  };

  public static create = (_req: Request, res: Response): void => {
    // TODO: tomar los datos de req.body, llamar al servicio y responder 201.
    res.status(501).json({
      success: false,
      message: 'El registro de ambientes todavía no está implementado.'
    });
  };

  public static updatePartial = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: tomar los campos de req.body y llamar al servicio de actualización parcial.
    res.status(501).json({
      success: false,
      message: `La actualización parcial del ambiente ${id} todavía no está implementada.`
    });
  };
}
