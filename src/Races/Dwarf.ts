import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80 ;
  private static _racesInstances = 0;

  static createdRacesInstances(): number {
    this._racesInstances += 1;
    return this._racesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;