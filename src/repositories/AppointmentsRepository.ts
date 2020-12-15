import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

// Data Transfer Object - DTO
interface CreateAppointmentDTO {
  serviceProvider: string;
  date: Date;
}

// DETENTOR DA OPERAÇÕES FEITAS EM CIMA DOS DADOS DA APLICAÇÃO
class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }

  public create({ serviceProvider, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ serviceProvider, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
