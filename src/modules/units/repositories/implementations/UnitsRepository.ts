import { Unit } from '../../model/Unit';
import { IUnitsRepository } from '../IUnitsRepository';


class UnitsRepository implements IUnitsRepository {

  private static INSTANCE: UnitsRepository;

  private constructor() {
  }
  public static getInstance(): UnitsRepository {
    if (!UnitsRepository.INSTANCE) {
      UnitsRepository.INSTANCE = new UnitsRepository();
    }
    return UnitsRepository.INSTANCE;
  }

  list(): Unit[] {
    return [
      {
        id: "1",
        name: "Metrô Sacomã",
        shortName: "Sacomã",
        address: {
          postalCode: "04208002",
          neighborhood: "Ipiranga",
          city: "São Paulo",
          state: "SP",
          street: "Rua Silva Bueno, 2201 - Próximo ao terminal Sacomã - Ipiranga"
        },
        phone: "1140101210",
        descriptionOperation: "2ª a sábado das 6:55 às 19h",
        latitude: -23.19943700,
        longitude: -46.20031300,
        type: "VIRTUAL"
      }
    ];
  }
}

export { UnitsRepository }