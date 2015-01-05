function PlayerPk(playerOne, playerTwo) {
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
  this.roundResult = null;
  this.roundTimes = 0;
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

  if (this.roundResult !== null && this.roundResult.defencerName === attacker.name && this.roundResult.times !== 0 &&
      (this.roundResult.effect === '中毒' || this.roundResult.effect === '火焰')) {
    result += this.roundResult.defencerName + '受到' + this.roundResult.damage +'点'+ this.roundResult.effect +
    '伤害，' + this.roundResult.defencerName + '剩余生命：' +
    this.getPlayerNewHp(this.roundResult.damage, attacker) + '\n';
    this.roundResult.times --;
  }

  if (this.roundResult !== null && this.roundResult.effect === '冰冻' && this.roundResult.times !== 0 &&
      this.roundResult.defencerName === attacker.name) {
    this.roundTimes --;
    if (this.roundTimes % 3 === 0) {
      result += attacker.name + '冻得直哆嗦，没有击中' + defencer.name;
      return result;
    }

  }

  this.getPlayerNewHp(effectObject.damange, defencer);

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
  this.getRoundTimes(effectObject);

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

PlayerPk.prototype.getRoundTimes = function(effectObject) {
  if (effectObject.message === '冻僵了，') {
    this.roundTimes += 3;
  }
};

module.exports = PlayerPk;
