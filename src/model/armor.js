function Armor(name, def) {
  this.name = name;
  this.def = def;
}

Armor.prototype.getArmorName = function() {
  return this.name;
};

Armor.prototype.getArmorDef = function() {
  return this.def;
};

module.exports = Armor;
