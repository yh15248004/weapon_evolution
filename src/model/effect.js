function Effect(name, probability, attack, times) {
  this.name = name;
  this.probability = probability;
  this.attack = attack || 0;
  this.times = times || 0;
}

Effect.prototype.getEffectHouse = function(player) {
  var isTrigger = false;
  var message = '';
  if (this.probability * 100 > _.random(0, 99) && this.name === '致命一击') {
    isTrigger = true;
    message = player + '发动了' + this.name + ',';
    damange = damange * 3;
  }
  return new EffectHouse(isTrigger, message, damange);
};

module.exports = Effect;

