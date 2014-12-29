function Weapon(name, attack) {
  this.name = name;
  this.attack = attack;
}
Weapon.prototype.getWeaponName = function() {
  return this.name;
};
Weapon.prototype.getWeaponAttack = function() {
  return this.attack;
};

module.exports = Weapon;
