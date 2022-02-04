
import { Request, Response } from "express";

import { ListProfessionalsUseCase } from "./ListProfessionalsUseCase";


class ListProfessionalsController {
  constructor(private listProfessionalsUseCase: ListProfessionalsUseCase) { }

  handle(request: Request, response: Response): Response {
    const all = this.listProfessionalsUseCase.execute();

    return response.json(all);
  }
}

export { ListProfessionalsController }