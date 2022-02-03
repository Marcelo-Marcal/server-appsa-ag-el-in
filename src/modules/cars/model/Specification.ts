import { v4 as uuidV4  } from 'uuid';

class Specification {
  id?: string;
  name: string;
  shortName: string;
  address: {
    postalCode: string,
    neighborhood: string,
    city: string,
    state: string,
    street: string,
  }
  phone: string;
  descriptionOperation: string;
  // latitude:,
  // longitude:,
  // type: VIRTUAL,
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Specification }