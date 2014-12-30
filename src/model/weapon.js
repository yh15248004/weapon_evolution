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

  if (this.effect.probability * 100 > _.random(0, 99) && this.effect.name === '致命一击') {
    result = true;
  }

  return result;
};

Weapon.prototype.isPoisoning = function() {
  var result = false;

  if (this.effect.probability * 100 > _.random(0, 99) && this.effect.name === '中毒') {
    result = true;
  }

  return result;
};

Weapon.prototype.isOblaze = function() {
  var result = false;

  if (this.effect.probability * 100 > _.random(0, 99) && this.effect.name === '着火') {
    result = true;
  }

  return result;
};

module.exports = Weapon;
