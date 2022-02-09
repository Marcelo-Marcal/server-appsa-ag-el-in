import { Appointment } from "../model/Appointment";

interface IAppointmentsRepository {
  list(): Appointment[];
}

export { IAppointmentsRepository }