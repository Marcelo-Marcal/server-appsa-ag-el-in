import { Category } from "../model/Category";

interface ICreateCategoryDTO {
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

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, shortName, address, phone, descriptionOperation }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO }