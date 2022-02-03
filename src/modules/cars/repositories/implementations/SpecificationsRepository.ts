import { Specification } from '../../model/Specification';
import { ISpecificationsRepository, ICreateSpecificationDTO } from '../ISpecificatiosRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }
  
  create({ name, shortName, address, phone, descriptionOperation }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
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
    //Inserir na tabelo o specification
    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(specification => specification.name === name);
    return specification;
  }
} 

export { SpecificationsRepository };