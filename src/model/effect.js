function Effect(name, probability, attackPoint, times) {
    this.name = name;
    this.probability = probability;
    this.attackPoint = attackPoint || 0;
    this.times = times || 0;
}

module.exports = Effect;