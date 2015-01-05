var _ = require('lodash');
function Weapon(name, attack, effect) {
  this.name = name;
  this.attack = attack;
  this.effect = effect || null;
}
Weapon.prototype.getWeaponName = function() {
  return this.name;
};
Weapon.prototype.getWeaponAttack = function() {
  return this.attack;
};

module.exports = Weapon;
