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
Weapon.prototype.isTrigger = function() {
  var result = false;

  if (this.effect.probability * 100 > _.random(0, 99)) {
    result = true;
  }

  return result;
};

module.exports = Weapon;
