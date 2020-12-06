import { v4 as uuid } from 'uuid';

class Appointment {
  id: string;

  serviceProvider: string;

  date: Date;

  constructor(serviceProvider: string, date: Date) {
    this.id = uuid();
    this.serviceProvider = serviceProvider;
    this.date = date;
  }
}

export default Appointment;
