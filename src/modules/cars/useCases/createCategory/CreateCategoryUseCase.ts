import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  shortName: string;
  address: {
    postalCode: string,
    neighborhood: string,
    city: string,
    state: string,
    street: string,
  }
  phone: string;
  descriptionOperation: string;
  // latitude:,
  // longitude:,
  // type: VIRTUAL,
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {

  }
  execute({ name, shortName, address, phone, descriptionOperation }: IRequest): void {

    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    
    if(categoryAlreadyExists) {
      throw new Error('Category Already exists!');
    }

    this.categoriesRepository.create({name, shortName, address, phone, descriptionOperation});
  }
}
export { CreateCategoryUseCase };
