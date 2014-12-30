function PlayerPk(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
}

PlayerPk.prototype.pk = function() {
  var message = '';

  while(true) {

    this.getPlayerNewHp(this.playerTwo, this.playerOne);
    message += this.pkTexts(this.playerTwo, this.playerOne);

    if (this.playerOne.hp <= 0) {
      message += this.playerOne.name + '被打败了！';
      break;
    }

    this.getPlayerNewHp(this.playerOne,this.playerTwo);
    message += this.pkTexts(this.playerOne, this.playerTwo);

    if (this.playerTwo.hp <= 0) {
      message += this.playerTwo.name + '被打败了！';
      break;
    }

  }

  return message;
};

PlayerPk.prototype.pkTexts = function(attacker, defencer) {
  return attacker.occupation + attacker.name + attacker.getWeaponMosaic() +
         '攻击了' + defencer.occupation + defencer.name + ',' + defencer.name +
         '受到了' + (attacker.getAttackPoint() - defencer.getDefPoint()) +
         '点伤害，' + defencer.name + '剩余生命：' + defencer.hp + '\n';
};

PlayerPk.prototype.getPlayerNewHp = function(attacker, defencer) {
  defencer.hp -= attacker.getAttackPoint() - defencer.getDefPoint();
};

module.exports = PlayerPk;
