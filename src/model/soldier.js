var Player = require('./player');
function Soldier (name, occupation, hp, attack, weapon, armor) {
  Player.call(this, name, occupation, hp, attack, weapon, armor);

}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.getWeaponName = function() {
  return this.weapon.name;
};

Soldier.prototype.getWeaponAttack = function() {
  return this.weapon.attack;
};

Soldier.prototype.getArmorName = function() {
  return this.armor.name;
};

Soldier.prototype.getArmorDef = function() {
  return this.armor.def;
};

Soldier.prototype.getAttackPoint = function() {
  return this.weapon.attack + this.attack;
};

Soldier.prototype.getDefPoint = function() {
  return this.armor.def;
};

Soldier.prototype.getWeaponMosaic = function() {
  return '用' + this.weapon.name;
};

module.exports = Soldier;
