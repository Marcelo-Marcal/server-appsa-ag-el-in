import { ISpecificationsRepository } from "../../repositories/ISpecificatiosRepository";

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

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {

  }
  execute({name, shortName, address, phone, descriptionOperation}: IRequest): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(name);
    if(specificationAlreadyExists) {
      throw new Error('Specification already exists!');
    }    

    this.specificationsRepository.create({
      name,
      shortName,
      address,
      phone,
      descriptionOperation,
      // latitude:,
      // longitude:,
      // type: VIRTUAL,
    });
  }
}

export { CreateSpecificationUseCase };