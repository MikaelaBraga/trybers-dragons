import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _character: Fighter;
  private _monster: SimpleFighter[];

  constructor(character: Fighter, monster: SimpleFighter[]) {
    super(character);
    this._character = character;
    this._monster = monster;
  }

  fight(): number {
    // monster = [{monstro: SimpleFighter}, {monstro: SimpleFighter}]
    
    this._monster.forEach((monst) => this._character.attack(monst)); // personagem ataca monstro

    if (this._monster.every((monst) => monst.lifePoints <= 0)) { // caso os pontos de vida do monstro sejam 0, personagem ganhou e retorna 1
      return 1;
    }

    this._monster.forEach((monst) => monst.attack(this._character)); // monstro ataca personagem

    if (this._character.lifePoints <= 0) { // caso pontos de vida do personagem seja 0, retorna -1
      return -1; 
    }
  
    return 0;
  }
}

export default PVE;