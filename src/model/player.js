function Player(name, occupation, hp, attack, weapon, armor) {
  this.name = name;
  this.occupation = occupation;
  this.hp = hp;
  this.attack = attack;
  this.weapon = weapon || null;
  this.armor = armor || null;
}

Player.prototype.getWeaponName = function() {
  return this.weapon.name;
};

Player.prototype.getWeaponAttack = function() {
  return this.weapon.attack;
};

Player.prototype.getArmorName = function() {
  return this.armor.name;
};

Player.prototype.getArmorDef = function() {
  return this.armor.def;
};

module.exports = Player;
