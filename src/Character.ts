import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

class Chararter implements Fighter {
  private readonly _race: Race;
  private readonly _archetype: Archetype;
  private readonly _maxLifePoints: number;
  private readonly _lifePoints: number;
  private readonly _strength: number;
  private readonly _defense: number;
  private readonly _dexterity: number;
  private readonly _energy: Energy;

  constructor (name: string) {
    this._race = new Elf(name, );
    this._archetype = new Mage(name);
    this._maxLifePoints =
    this._lifePoints =
    this._strength = 
    this._defense = 
    this._dexterity =
    this._energy =
  }
}

export default Chararter;