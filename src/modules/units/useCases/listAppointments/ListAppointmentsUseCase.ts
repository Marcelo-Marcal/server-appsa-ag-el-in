import { Professional } from '../../model/Professional';
import { IAppointmentsRepository } from '../../repositories/IAppointmentsRepository';

type TListAppointmentsUseCase = { data: Professional[] }

class ListAppointmentsUseCase {

  constructor(private appointmentsRoutes: IAppointmentsRepository) { }

  execute(): TListAppointmentsUseCase {
    const appointments = this.appointmentsRoutes.list();

    const data: TListAppointmentsUseCase = { data: appointments }
    return data;
  }
}

export { ListAppointmentsUseCase }