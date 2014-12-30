jest.autoMockOff();

var Effect = require('../../src/model/effect');
var Player = require('../../src/model/player');
var Soldier = require('../../src/model/soldier');
var PlayerPk = require('../../src/model/player-pk');
var Armor = require('../../src/model/armor');
var Weapon = require('../../src/model/weapon');

describe('PlayerPk', function() {
  var qualityStick,bronzeArmor,playerOne,playerTwo,playerPk;

  beforeEach(function() {

  });

  describe('#pk()', function() {

    it('should return correct critical', function() {

      qualityStick = new Weapon('优质的木棒', 8, new Effect('致命一击', 1));
      bronzeArmor = new Armor('青铜铠甲', 4);
      playerOne = new Soldier('张三', '战士', 50, 9, qualityStick, bronzeArmor);
      playerTwo = new Player('李四', '普通人', 50, 8);
      playerPk = new PlayerPk(playerOne, playerTwo);

      var result = playerPk.pk();
      expect(result).toBe(
        '普通人李四攻击了战士张三,张三受到了4点伤害，张三剩余生命：46\n' +
        '战士张三用优质的木棒攻击了普通人李四,张三发动了致命一击,李四受到了51点伤害，李四剩余生命：-1\n' +
        '李四被打败了！'
      );

    });

    it('should return correct poisoning', function() {

      qualityStick = new Weapon('优质的毒剑', 8, new Effect('中毒', 1));
      bronzeArmor = new Armor('青铜铠甲', 4);
      playerOne = new Soldier('张三', '战士', 50, 9, qualityStick, bronzeArmor);
      playerTwo = new Player('李四', '普通人', 50, 8);
      playerPk = new PlayerPk(playerOne, playerTwo);

      var result = playerPk.pk();
      expect(result).toBe(
        '普通人李四攻击了战士张三,张三受到了4点伤害，张三剩余生命：46\n' +
        '战士张三用优质的毒剑攻击了普通人李四,李四受到了17点伤害，李四中毒了,李四剩余生命：33\n' +
        '普通人李四攻击了战士张三,张三受到了4点伤害，张三剩余生命：42\n' +
        '战士张三用优质的毒剑攻击了普通人李四,李四受到了17点伤害，李四中毒了,李四剩余生命：16\n' +
        '普通人李四攻击了战士张三,张三受到了4点伤害，张三剩余生命：38\n' +
        '战士张三用优质的毒剑攻击了普通人李四,李四受到了17点伤害，李四中毒了,李四剩余生命：-1\n' +
        '李四被打败了！'
      );

    });

    it('should return correct oblaze', function() {

      qualityStick = new Weapon('火焰剑', 8, new Effect('着火', 1));
      bronzeArmor = new Armor('青铜铠甲', 4);
      playerOne = new Soldier('张三', '战士', 50, 9, qualityStick, bronzeArmor);
      playerTwo = new Player('李四', '普通人', 50, 8);
      playerPk = new PlayerPk(playerOne, playerTwo);

      var result = playerPk.pk();
      expect(result).toBe(
        '普通人李四攻击了战士张三,张三受到了4点伤害，张三剩余生命：46\n' +
        '战士张三用火焰剑攻击了普通人李四,李四受到了17点伤害，李四着火了,李四剩余生命：33\n' +
        '普通人李四攻击了战士张三,张三受到了4点伤害，张三剩余生命：42\n' +
        '战士张三用火焰剑攻击了普通人李四,李四受到了17点伤害，李四着火了,李四剩余生命：16\n' +
        '普通人李四攻击了战士张三,张三受到了4点伤害，张三剩余生命：38\n' +
        '战士张三用火焰剑攻击了普通人李四,李四受到了17点伤害，李四着火了,李四剩余生命：-1\n' +
        '李四被打败了！'
      );

    });

  });

  describe('#pkText()', function() {

    it('should return correct text', function() {

      qualityStick = new Weapon('利剑', 8, new Effect('致命一击', 1));
      bronzeArmor = new Armor('青铜铠甲', 4);
      playerOne = new Soldier('张三', '战士', 50, 9, qualityStick, bronzeArmor);
      playerTwo = new Player('李四', '普通人', 49, 8);

      playerOne.getSpecialAttrackText = jest.genMockFn();
      playerOne.getSpecialAttrackText.mockReturnValue('张三发动了致命一击,');
      playerPk.calculateDamage = jest.genMockFn();
      playerPk.calculateDamage.mockReturnValue(51);

      var result = playerPk.pkText(playerOne, playerTwo);

      expect(result).toBe(
        '战士张三用利剑攻击了普通人李四,张三发动了致命一击,李四受到了51点伤害，李四剩余生命：-2'
      );

    });

    it('should return correct poisoning', function() {

      qualityStick = new Weapon('优质毒剑', 8, new Effect('中毒', 1));
      bronzeArmor = new Armor('青铜铠甲', 4);
      playerOne = new Soldier('张三', '战士', 50, 9, qualityStick, bronzeArmor);
      playerTwo = new Player('李四', '普通人', 49, 8);

      playerPk.getSpecialDamageText = jest.genMockFn();
      playerPk.getSpecialDamageText.mockReturnValue('李四中毒了,');

      playerPk.calculateDamage = jest.genMockFn();
      playerPk.calculateDamage.mockReturnValue(51);

      var result = playerPk.pkText(playerOne, playerTwo);

      expect(result).toBe(
        '战士张三用优质毒剑攻击了普通人李四,李四受到了51点伤害，李四中毒了,李四剩余生命：-2'
      );

    });

    it('should return correct oblaze', function() {

      qualityStick = new Weapon('火焰剑', 8, new Effect('着火', 1));
      bronzeArmor = new Armor('青铜铠甲', 4);
      playerOne = new Soldier('张三', '战士', 50, 9, qualityStick, bronzeArmor);
      playerTwo = new Player('李四', '普通人', 49, 8);

      playerPk.getSpecialDamageText = jest.genMockFn();
      playerPk.getSpecialDamageText.mockReturnValue('李四着火了,');

      playerPk.calculateDamage = jest.genMockFn();
      playerPk.calculateDamage.mockReturnValue(51);

      var result = playerPk.pkText(playerOne, playerTwo);

      expect(result).toBe(
        '战士张三用火焰剑攻击了普通人李四,李四受到了51点伤害，李四着火了,李四剩余生命：-2'
      );

    });

  });

});
