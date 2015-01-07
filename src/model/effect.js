var _ = require('lodash');
var ActivedEffect = require('./state');
function Effect(name, probability, attackPoint, times) {
    this.name = name;
    this.probability = probability;
    this.attackPoint = attackPoint || 0;
    this.times = times || 0;
}

Effect.prototype.getActivedEffect = function() {

    var isDelay = false;
    var state = '';

    if (this.probability * 100 > _.random(0, 99) && this.name === '致命一击') {
        state = this.name;
    }

    if (this.probability * 100 > _.random(0, 99) && this.name === '中毒') {
        isDelay = true;
        state = this.name;
    }

    if (this.probability * 100 > _.random(0, 99) && this.name === '火焰') {
        isDelay = true;
        state = this.name;
    }

    if (this.probability * 100 > _.random(0, 99) && this.name === '冰冻') {
        isDelay = true;
        state = this.name;
    }

    if (this.probability * 100 > _.random(0, 99) && this.name === '眩晕') {
        isDelay = true;
        state = this.name;
    }

    return new ActivedEffect(isDelay, state);
};

module.exports = Effect;