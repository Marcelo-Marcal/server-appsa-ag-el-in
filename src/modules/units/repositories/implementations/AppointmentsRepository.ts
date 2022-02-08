import { Appointment } from '../../model/Appointment';
import { IAppointmentsRepository } from '../IAppointmentsRepository';


class AppointmentsRepository implements IAppointmentsRepository {
  private static INSTANCE: IAppointmentsRepository;

  private constructor() { }

  public static getInstance(): AppointmentsRepository {
    if (!AppointmentsRepository.INSTANCE) {
      AppointmentsRepository.INSTANCE = new AppointmentsRepository();
    }
    return AppointmentsRepository.INSTANCE;
  }

  list(): Appointment[] {
    return [
      {
        id: "20001",
        professionalId: "10001",
        unitId: "1",
        productId: "9000001",
        healthPlan: "DiretoSP",
        date: "2021-01-01T11:30:00",
        requirement: {
          gender: "MALE",
          minAge: 18,
          maxAge: 50
        }
      }
    ];
  }
}

export { AppointmentsRepository }