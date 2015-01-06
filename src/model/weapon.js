function Weapon(name, attackPoint, effects) {
    this.name = name;
    this.attackPoint = attackPoint;
    this.effects = effects || [];
}

module.exports = Weapon;
