import { EnergyType } from '../Energy';

abstract class Archetype {
  private readonly _name: string;
  private readonly _special: number ;
  private readonly _cost: number;

  constructor(name: string, special: number, cost: number) {
    this._name = name;
    this._special = special;
    this._cost = cost;
  }

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;