// referência -> https://pt.stackoverflow.com/questions/513192/como-criar-um-tipo-a-partir-de-uma-vari%C3%A1vel-em-typescript
const mana = 'mana';
const stamina = 'stamina';
export type EnergyType = typeof mana | typeof stamina;

interface Energy {
  type_: EnergyType,
  amount: number,
}

export default Energy;