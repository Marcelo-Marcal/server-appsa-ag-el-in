import { Professional } from "../model/Professional";

interface IProfessionalsRepository {
  list(): Professional[];
}

export { IProfessionalsRepository }