import { Professional } from '../../model/Professional';
import { IProfessionalsRepository } from '../IProfessionalsRepository';

class ProfessionalsRepository implements IProfessionalsRepository {
  private static INSTANCE: IProfessionalsRepository;

  private constructor() { }

  public static getInstance(): ProfessionalsRepository {
    if (!ProfessionalsRepository.INSTANCE) {
      ProfessionalsRepository.INSTANCE = new ProfessionalsRepository();
    }
    return ProfessionalsRepository.INSTANCE;
  }

  list(): Professional[] {
    return [
      {
        id: "10001",
        unitId: "1",
        name: "Leandro Augusto Franco Nascimento",
        gender: "MALE",
        document: {
          type: "CRM",
          state: "SP",
          number: "129128"
        },
        photo: "https://s2pics-dev.s3.amazonaws.com/profissionais/fotos/103038_s.jpg"
      }
    ];
  }
}

export { ProfessionalsRepository }