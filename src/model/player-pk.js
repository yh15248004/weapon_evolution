function PlayerPk(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
}

PlayerPk.prototype.pk = function() {
  var message = '';

  while(true) {

    message += this.pkText(this.playerTwo, this.playerOne);

    if (this.playerOne.hp <= 0) {
      message += this.playerOne.name + '被打败了！';
      break;
    }

    message += this.pkText(this.playerOne, this.playerTwo);

    if (this.playerTwo.hp <= 0) {
      message += this.playerTwo.name + '被打败了！';
      break;
    }

  }

  return message;
};

PlayerPk.prototype.pkText = function(attacker, defencer) {
  var result = attacker.occupation + attacker.name + attacker.getWeaponMosaic() +
               '攻击了' + defencer.occupation + defencer.name + ',';

  result += attacker.getSpecialAttrackText();

  this.getPlayerNewHp(attacker, defencer);

  result += defencer.name + '受到了' + this.calculateDamage(attacker, defencer) +
               '点伤害，' + defencer.name + '剩余生命：' + defencer.hp + '\n';

  return result;
};

PlayerPk.prototype.getPlayerNewHp = function(attacker, defencer) {
  defencer.hp -= this.calculateDamage(attacker, defencer);
};

PlayerPk.prototype.calculateDamage = function(attacker, defencer) {
  return attacker.getAttackPoint() - defencer.getDefPoint();
};

module.exports = PlayerPk;
