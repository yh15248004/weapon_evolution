var Player = require('./player');

function Soldier(name, occupation, hp, attackPoint, weapon, armor, state) {
    Player.call(this, name, occupation, hp, attackPoint, state);
    this.weapon = weapon || null;
    this.armor = armor || null;
}

Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.attack = function(defender) {
    var result = '';

    var activedEffect = this.weapon.effects[0].getActivedEffect();

    //defender.hp -= this.getAttackPoint(defender.getDefensePoint());
    //
    //result += this.occupation + this.name + '用' + this.weapon.name + '攻击了' + defender.occupation + defender.name +
    //          ',';
    //
    //result += defender.name + '受到了' + this.getAttackPoint(defender.getDefensePoint()) + '点伤害,' + defender.name + '剩余生命：' +
    //          defender.hp + '\n';
    //
    //if (defender.hp <= 0) {
    //    result += defender.name + '被打败了。';
    //}

    return result;

};

Soldier.prototype.getAttackPoint = function(defenderPoint) {
    return this.attackPoint + this.weapon.attackPoint - defenderPoint;
};

Soldier.prototype.getDefensePoint = function() {
    return this.armor.defensePoint;
};

module.exports = Soldier;