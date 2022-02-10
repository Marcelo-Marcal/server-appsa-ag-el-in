import { Professional } from '../../model/Professional';
import { IProfessionalsRepository } from '../../repositories/IProfessionalsRepository';

type TListProfessionalsUseCase = { data: Professional[] }

class ListProfessionalsUseCase {

  constructor(private professionalsRoutes: IProfessionalsRepository) { }

  execute(): TListProfessionalsUseCase {
    const professionals = this.professionalsRoutes.list();

    const data: TListProfessionalsUseCase = { data: professionals }
    return data;
  }
}

export { ListProfessionalsUseCase }