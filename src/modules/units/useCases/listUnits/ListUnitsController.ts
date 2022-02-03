import { Request, Response } from "express";

import { ListUnitsUseCase } from './ListUnitsUseCase'

class ListUnitsController {
  constructor(private listUnitsUseCase: ListUnitsUseCase) {}
  
  handle(request: Request, response: Response): Response {    
    const all = this.listUnitsUseCase.execute();

    return response.json(all);
  }
}

export { ListUnitsController }