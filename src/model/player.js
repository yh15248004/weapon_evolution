function Player(name, occupation, hp, attack, weapon, armor) {
  this.name = name;
  this.occupation = occupation;
  this.hp = hp;
  this.attack = attack;
  this.weapon = weapon||null;
  this.armor = armor||null;
}

module.exports = Player;
