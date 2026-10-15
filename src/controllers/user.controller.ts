import { Request, Response } from 'express';

export class UserController {
  public static list = (_req: Request, res: Response): void => {
    // TODO: llamar al servicio que consulta todos los usuarios.
    res.status(501).json({
      success: false,
      message: 'El listado de usuarios todavía no está implementado.'
    });
  };

  public static create = (_req: Request, res: Response): void => {
    // TODO: tomar los datos de req.body, llamar al servicio y responder 201.
    res.status(501).json({
      success: false,
      message: 'El registro de usuarios todavía no está implementado.'
    });
  };

  public static getById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: pasar id al servicio de consulta y responder con el usuario encontrado.
    res.status(501).json({
      success: false,
      message: `La consulta del usuario ${id} todavía no está implementada.`
    });
  };

  public static updatePartial = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: tomar los campos de req.body y llamar al servicio de actualización parcial.
    res.status(501).json({
      success: false,
      message: `La actualización parcial del usuario ${id} todavía no está implementada.`
    });
  };

  public static remove = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: pasar id al servicio de eliminación lógica del usuario.
    res.status(501).json({
      success: false,
      message: `La eliminación del usuario ${id} todavía no está implementada.`
    });
  };
}
