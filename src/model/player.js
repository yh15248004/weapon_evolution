function Player(name, occupation, hp, attackPoint, state) {
    this.name = name;
    this.occupation = occupation;
    this.hp = hp;
    this.attackPoint = attackPoint;
    this.state = state || null;
}

Player.prototype.attack = function(defender) {
    var result = '';
    defender.hp -= this.getAttackPoint(defender.getDefensePoint());
    result += this.occupation + this.name + '攻击了' + defender.occupation + defender.name +
              ',' + defender.name + '受到了' + this.getAttackPoint(defender.getDefensePoint()) + '点伤害,' + defender.name + '剩余生命：' +
              defender.hp + '\n';

    if (defender.hp <= 0) {
        result += defender.name + '被打败了。';
    }

    return result;

};

Player.prototype.getAttackPoint = function(defenderPoint) {
    return this.attackPoint - defenderPoint;
};

Player.prototype.getDefensePoint = function() {
    return 0;
};

module.exports = Player;