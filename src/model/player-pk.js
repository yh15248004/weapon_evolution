function PlayerPk(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.roundResult = null;
}

PlayerPk.prototype.pk = function() {
  var message = '';

  while(true) {

    message += this.pkText(this.playerTwo, this.playerOne) + '\n';

    if (this.playerOne.hp <= 0) {
      message += this.playerOne.name + '被打败了！';
      break;
    }

    message += this.pkText(this.playerOne, this.playerTwo) + '\n';

    if (this.playerTwo.hp <= 0) {
      message += this.playerTwo.name + '被打败了！';
      break;
    }

  }

  return message;
};

PlayerPk.prototype.pkText = function(attacker, defencer) {

  var effectObject = attacker.getEffectObject();
  var result = '';

  //if (this.roundResult !== null && this.roundResult.times !== 0 && this.roundResult.defencerName == attacker.name) {
  //  result += this.roundResult.defencerName + '受到' + this.roundResult.damage + this.roundResult.effect +
  //  '伤害，' + this.roundResult.defencerName + '剩余生命：' +
  //  this.getPlayerNewHp(this.roundResult.damage, attacker);
  //}

  this.getPlayerNewHp(effectObject.damange, defencer);

  result += attacker.occupation + attacker.name + attacker.getWeaponMosaic() +
               '攻击了' + defencer.occupation + defencer.name + ',';

  //result += attacker.getSpecialAttrackText();
  if (effectObject.isDelay === false) {
    result += effectObject.message;
  }

  result += defencer.name + '受到了' + this.calculateDamage(effectObject.damange, defencer) +
               '点伤害，';

  result += this.getSpecialDamageText(attacker, defencer);


  result += defencer.name + '剩余生命：' + defencer.hp;

  return result;
};

PlayerPk.prototype.getPlayerNewHp = function(damange, defencer) {
  defencer.hp -= this.calculateDamage(damange, defencer);
};

PlayerPk.prototype.calculateDamage = function(damange, defencer) {
  return damange - defencer.getDefPoint();
};

PlayerPk.prototype.getSpecialDamageText = function(attacker, defencer) {
  var result = '';
  if (attacker.getIsPoisoning()) {
    result = defencer.name + '中毒了,';
  }
  if (attacker.getIsOblaze()) {
    result = defencer.name + '着火了,';
  }

  return result;
};

module.exports = PlayerPk;
