import Fighter from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  private _character: Fighter[];

  constructor(character: Fighter[], monster: Monster[]) {
    super(character);
    this._character = character;
  }

}

export default PVE;