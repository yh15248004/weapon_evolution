var _ = require('lodash');
var EffectHouse = require('./effect-house');
function Effect(name, probability, attack, times) {
  this.name = name;
  this.probability = probability;
  this.attack = attack || 0;
  this.times = times || 0;
}

Effect.prototype.getEffectHouse = function(attackerName, damage) {
  var isDelay = false;
  var message = '';

  if (this.probability * 100 > _.random(0, 99) && this.name === '致命一击') {
    message = attackerName +'发动了' + this.name + ',';
    damage = damage * 3;
  }

  if (this.probability * 100 > _.random(0, 99) && this.name === '中毒') {
    isDelay = true;
    message = '中毒了，';
  }

  if (this.probability * 100 > _.random(0, 99) && this.name === '火焰') {
    isDelay = true;
    message = '着火了，';
  }

  if (this.probability * 100 > _.random(0, 99) && this.name === '冰冻') {
    isDelay = true;
    message = '冻僵了，';
  }

  return new EffectHouse(isDelay, message, damage, this.times);
};

module.exports = Effect;

