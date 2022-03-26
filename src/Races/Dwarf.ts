import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private _racesInstances: number;
  static _racesInstances: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    this._racesInstances = 0;
  }

  static createdRacesInstances(): number {
    this._racesInstances += 1;
    return this._racesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;