function Soldier (name, occupation, hp, attack, weapon, armor) {
  this.name = name;
  this.occupation = occupation;
  this.hp = hp;
  this.attack = attack;
  this.weapon = weapon || null;
  this.armor = armor || null;
}

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

module.exports = Soldier;
