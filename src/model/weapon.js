function Weapon(name, attack, effects) {
  this.name = name;
  this.attack = attack;
  this.effects = effects || [];
}
Weapon.prototype.getWeaponName = function() {
  return this.name;
};
Weapon.prototype.getWeaponAttack = function() {
  return this.attack;
};

module.exports = Weapon;
