import { v4 as uuidV4 } from 'uuid';

class Appointment {

  id: string;
  professionalId: string;
  unitId: string;
  productId?: string;
  healthPlan: string;
  date: string;
  requirement?: {
    gender: string;
    minAge: 18;
    maxAge: 50;
  }

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Appointment }