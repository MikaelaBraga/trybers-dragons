import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static _racesInstances = 0;

  static createdRacesInstances(): number {
    this._racesInstances += 1;
    return this._racesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;