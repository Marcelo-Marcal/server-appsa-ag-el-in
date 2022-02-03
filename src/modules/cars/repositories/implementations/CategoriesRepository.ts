import { Category } from '../../model/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';


class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }
  public static getInstance(): CategoriesRepository {
    if(!CategoriesRepository.INSTANCE){
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  //Criar uma função para cadastra a categoria
  create({ name, shortName, address, phone, descriptionOperation }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      shortName,
      address,
      phone,
      descriptionOperation,
      // latitude:,
      // longitude:,
      // type: VIRTUAL,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}

export { CategoriesRepository }