function PlayerPk(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
}

PlayerPk.prototype.pk = function() {
  var message = '';

  while(true) {

    this.getPlayerNewHp(this.playerTwo,this.playerOne);
    message += this.pkTexts()[0];

    if (this.playerOne.hp <= 0) {
      message += this.playerOne.name + '被打败了！';
      break;
    }

    this.getPlayerNewHp(this.playerOne,this.playerTwo);
    message += this.pkTexts()[1];

    if (this.playerTwo.hp <= 0) {
      message += this.playerTwo.name + '被打败了！';
      break;
    }

  }

  return message;
};

PlayerPk.prototype.pkTexts = function() {

  var playerOneText = this.playerTwo.occupation + this.playerTwo.name + '攻击了' +
                      this.playerOne.occupation + this.playerOne.name +','+ this.playerOne.name +
                      '受到了' + (this.playerTwo.attack - this.playerOne.getArmorDef()) + '点伤害，' +
                      this.playerOne.name + '剩余生命：' + this.playerOne.hp + '\n';

  var playerTwoText = this.playerOne.occupation + this.playerOne.name + '用' + this.playerOne.getWeaponName() +
                      '攻击了' + this.playerTwo.occupation + this.playerTwo.name + ',' +
                      this.playerTwo.name + '受到了' +
                      (this.playerOne.attack + this.playerOne.getWeaponAttack()) + '点伤害，' +
                      this.playerTwo.name + '剩余生命：' + this.playerTwo.hp + '\n';
  var playerText = [playerOneText, playerTwoText];

  return playerText;

};

PlayerPk.prototype.getPlayerOneNewHp = function() {
  return this.getPlayerNewHp(this.playerTwo,this.playerOne);
};

PlayerPk.prototype.getPlayerTwoNewHp = function() {
  return this.getPlayerNewHp(this.playerOne,this.playerTwo);
};

PlayerPk.prototype.getPlayerNewHp = function(attacker, defencer) {
  defencer.hp -= attacker.getAttackPoint() - defencer.getDefPoint();
  return defencer.hp;
};

module.exports = PlayerPk;
