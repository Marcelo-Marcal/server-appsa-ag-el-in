import { Specification } from '../model/Specification';
import { ICreateCategoryDTO } from './ICategoriesRepository'

interface ICreateSpecificationDTO {
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

interface ISpecificationsRepository {
  create({ name, shortName, address, phone, descriptionOperation }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };