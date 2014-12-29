function PlayerPk(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
}

PlayerPk.prototype.pk = function() {
  var message = '';

  while(true) {

    this.playerOne.hp -= this.playerTwo.attack - this.playerOne.getArmorDef();
    message += this.playerTwo.occupation + this.playerTwo.name + '攻击了' +
               this.playerOne.occupation + this.playerOne.name +','+ this.playerOne.name +
               '受到了' + (this.playerTwo.attack - this.playerOne.getArmorDef()) + '点伤害，' +
               this.playerOne.name + '剩余生命：' + this.playerOne.hp + '\n';

    this.playerTwo.hp -= this.playerOne.attack + this.playerOne.getWeaponAttack();
    message += this.playerOne.occupation + this.playerOne.name + '用' + this.playerOne.getWeaponName() +
               '攻击了' + this.playerTwo.occupation + this.playerTwo.name + ',' +
               this.playerTwo.name + '受到了' +
               (this.playerOne.attack + this.playerOne.getWeaponAttack()) + '点伤害，' +
               this.playerTwo.name + '剩余生命：' + this.playerTwo.hp + '\n';

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
