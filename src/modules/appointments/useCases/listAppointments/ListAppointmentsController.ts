import { Request, Response } from "express";

import { ListAppointmentsUseCase } from "./ListAppointmentsUseCase";


class ListAppointmentsController {
  constructor(private listAppointmentsUseCase: ListAppointmentsUseCase) { }

  handle(request: Request, response: Response): Response {
    const all = this.listAppointmentsUseCase.execute();

    return response.json(all);
  }
}

export { ListAppointmentsController }