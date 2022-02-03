import { Unit } from "../model/Unit";

interface IUnitsRepository {
  list(): Unit[];
}

export { IUnitsRepository }