import { Appointment } from "../model/Appointment";

interface IAppointmentRepository {
  list(): Appointment[];
}

export { IAppointmentsRepository }