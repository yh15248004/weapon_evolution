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

  this.getPlayerNewHp(effectObject.damange, defencer);

  if (this.roundResult !== null && this.roundResult.defencerName === attacker.name && this.roundResult.times != 0) {
    result += this.roundResult.defencerName + '受到' + this.roundResult.damage +'点'+ this.roundResult.effect +
    '伤害，' + this.roundResult.defencerName + '剩余生命：' +
    this.getPlayerNewHp(this.roundResult.damage, attacker) + '\n';
    this.roundResult.times --;
  }

  result += attacker.occupation + attacker.name + attacker.getWeaponMosaic() +
               '攻击了' + defencer.occupation + defencer.name + ',';

  if (effectObject.isDelay === false) {
    result += effectObject.message;
  }

  result += defencer.name + '受到了' + this.calculateDamage(effectObject.damange, defencer) +
               '点伤害，';

  if (effectObject.isDelay === true) {
    result += defencer.name + effectObject.message;
  }

  result += defencer.name + '剩余生命：' + defencer.hp;

  this.roundResult = this.getRoundResult(effectObject, attacker, defencer);

  return result;
};

PlayerPk.prototype.getPlayerNewHp = function(damange, defencer) {
  defencer.hp -= this.calculateDamage(damange, defencer);
  return defencer.hp;
};

PlayerPk.prototype.calculateDamage = function(damange, defencer) {
  return damange - defencer.getDefPoint();
};

PlayerPk.prototype.getRoundResult = function(effectObject, attacker, defencer) {
  var result = this.roundResult;
  if (effectObject.isDelay === true) {
    var times = effectObject.times;
    var damage = attacker.getWeaponEffectDamage();
    if (this.roundResult !== null && this.roundResult.times !== 0 ) {
      times = this.roundResult.times;
      damage = this.roundResult.damage + attacker.getWeaponEffectDamage();
    }
    result = {defencerName : defencer.name,
      damage : damage,
      effect : attacker.getWeaponEffectName(),
      times : times
    }
  }
  return result;

};

module.exports = PlayerPk;
