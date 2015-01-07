function PoisonEffect(times) {
    this.times = times;
}

PoisonEffect.prototype.trigger = function() {
    return {
        state : new PoisonState(this.times),
        info : '受到了毒性攻击，'
    }
};
