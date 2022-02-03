import { Request, Response } from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';


class CreateCategoryController {

  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
  const { name, shortName, address, phone, descriptionOperation } = request.body;

  this.createCategoryUseCase.execute({ name, shortName, address, phone, descriptionOperation });

  return response.status(201).send();
  }
};

export { CreateCategoryController }