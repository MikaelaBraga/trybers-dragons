import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static _racesInstances = 0;

  static createdRacesInstances(): number {
    this._racesInstances += 1;
    return this._racesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;