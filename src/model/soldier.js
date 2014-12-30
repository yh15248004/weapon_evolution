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
  var attackTotal = this.weapon.attack + this.attack;
  if (this.weapon.isTrigger()) {
    attackTotal = (this.weapon.attack + this.attack) * 3;
  }
  return attackTotal;
};

Soldier.prototype.getDefPoint = function() {
  return this.armor.def;
};

Soldier.prototype.getWeaponMosaic = function() {
  return '用' + this.weapon.name;
};

Soldier.prototype.getSpecialAttrackText = function() {
  var result = '';
  if (this.weapon.isTrigger()) {
    result = this.name + '发动了' + this.weapon.effect.name + ',';
  }

  return result;

};

Soldier.prototype.getSpecialDamageText = function() {
  return '';
};

module.exports = Soldier;
