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

Player.prototype.getAttackPoint = function() {
  return this.attack;
};

Player.prototype.getDefPoint = function() {
  return 0;
};

Player.prototype.getWeaponMosaic = function() {
  return '';
};

Player.prototype.getEffectObject = function() {
  return {damange : this.attack, message : ''};
};

Player.prototype.getSpecialAttrackText = function() {
  return '';
};

Player.prototype.getSpecialDamageText = function() {
  return '';
};

Player.prototype.getIsPoisoning = function() {
  return false;
};

Player.prototype.getIsOblaze = function() {
  return false;
};
module.exports = Player;
