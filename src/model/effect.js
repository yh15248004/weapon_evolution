function Effect(name, probability, attack, times) {
  this.name = name;
  this.probability = probability;
  this.attack = attack || 0;
  this.times = times || 0;
}
module.exports = Effect;
