import { v4 as uuid } from 'uuid';

class Appointment {
  id: string;

  serviceProvider: string;

  date: Date;

  constructor({ serviceProvider, date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.serviceProvider = serviceProvider;
    this.date = date;
  }
}

export default Appointment;
