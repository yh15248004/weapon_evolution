function Player(name, occupation, hp, attackPoint, state) {
    this.name = name;
    this.occupation = occupation;
    this.hp = hp;
    this.attackPoint = attackPoint;
    this.state = state || null;
}

module.exports = Player;