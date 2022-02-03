import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";



class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response): Response {
    const { name, shortName, address, phone, descriptionOperation } = request.body;
    
    this.createSpecificationUseCase.execute({ name, shortName, address, phone, descriptionOperation });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
