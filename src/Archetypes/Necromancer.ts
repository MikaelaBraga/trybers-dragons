import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana' ;
  private static _archetypesInstances = 0;

  static createdArchetypeInstances(): number {
    this._archetypesInstances += 1;
    return this._archetypesInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;