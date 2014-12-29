function PlayerPk(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
}

PlayerPk.prototype.pk = function() {
  var message = '';

  for (var i = 0; i < this.playerOne.hp; i++) {

    this.playerOne.hp -= this.playerTwo.attack;
    message += this.playerTwo.name + '攻击了' +
      this.playerOne.name + ','+ this.playerOne.name +
      '受到了' + this.playerTwo.attack + '点伤害，' +
      this.playerOne.name + '生命值还剩' + this.playerOne.hp + '\n';

    this.playerTwo.hp -= this.playerOne.attack;
    message += this.playerOne.name + '攻击了' +
      this.playerTwo.name + ','+ this.playerTwo.name +
      '受到了' + this.playerOne.attack + '点伤害，' +
      this.playerTwo.name + '生命值还剩' + this.playerTwo.hp + '\n';

    if (this.playerOne.hp <= 0) {
      message += this.playerOne.name + '被打败了！';
      break;
    } else if (this.playerTwo.hp <= 0) {
      message += this.playerTwo.name + '被打败了！';
      break;
    }

  }

  return message;
};

module.exports = PlayerPk;
