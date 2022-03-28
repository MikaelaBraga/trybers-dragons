import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _character1: Fighter;
  private _character2: Fighter;

  constructor(character1: Fighter, character2: Fighter) {
    super(character1);
    this._character1 = character1;
    this._character2 = character2;
  }

  fight(): number {
    do { // faça isso
      this._character1.attack(this._character2); // personagem ataca personagem 2
      this._character2.attack(this._character1);
    } while // enquanto essa condição for verdadeira
    (this._character1.lifePoints > 0 && this._character2.lifePoints > 0); // os pontos de vida de ambos precisam ser maio que 0

    return this._character1.lifePoints === -1 ? -1 : 1; // conforme utilizado na classe Battle
  }
}

export default PVP;