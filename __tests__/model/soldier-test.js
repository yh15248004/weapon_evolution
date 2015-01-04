jest.dontMock('../../src/model/player');
jest.dontMock('../../src/model/soldier');
jest.dontMock('../../src/model/weapon');
jest.dontMock('../../src/model/armor');

var Soldier = require('../../src/model/soldier');
var Weapon = require('../../src/model/weapon');
var Effect = require('../../src/model/effect');
var Armor = require('../../src/model/armor');

describe('Soldier', function() {

  describe('#getAttackPoint()', function() {

    it('should return correct attrackPoint', function() {

      var qualityStick = new Weapon('利剑', 2, new Effect('致命一击', 1));
      var bronzeArmor = new Armor('青铜铠甲', 4);
      var soldier = new Soldier('张三', '战士', 50, 8, qualityStick, bronzeArmor);

      var result = soldier.getAttackPoint();

      expect(result).toBe(10);

    });

  });

  describe('#getIsPoisoning()', function() {

    it('should return correct boolean', function() {
      var qualityStick = new Weapon('优质毒剑', 2, new Effect('中毒', 1));
      var bronzeArmor = new Armor('青铜铠甲', 4);
      var soldier = new Soldier('张三', '战士', 50, 8, qualityStick, bronzeArmor);

      qualityStick.isPoisoning = jest.genMockFn();
      qualityStick.isPoisoning.mockReturnValue(true);

      var result = soldier.getIsPoisoning();

      expect(result).toBe(true);
    });

    it('should return correct boolean', function() {
      var qualityStick = new Weapon('优质毒剑', 2, new Effect('中毒', 1));
      var bronzeArmor = new Armor('青铜铠甲', 4);
      var soldier = new Soldier('张三', '战士', 50, 8, qualityStick, bronzeArmor);

      qualityStick.isPoisoning = jest.genMockFn();
      qualityStick.isPoisoning.mockReturnValue(false);

      var result = soldier.getIsPoisoning();

      expect(result).toBe(false);
    });

  });

  describe('#getIsPoisoning()', function() {

    it('should return correct boolean', function() {
      var qualityStick = new Weapon('火焰剑', 2, new Effect('着火', 1));
      var bronzeArmor = new Armor('青铜铠甲', 4);
      var soldier = new Soldier('张三', '战士', 50, 8, qualityStick, bronzeArmor);

      qualityStick.isOblaze = jest.genMockFn();
      qualityStick.isOblaze.mockReturnValue(true);

      var result = soldier.getIsOblaze();

      expect(result).toBe(true);
    });

    it('should return correct boolean', function() {
      var qualityStick = new Weapon('火焰剑', 2, new Effect('着火', 1));
      var bronzeArmor = new Armor('青铜铠甲', 4);
      var soldier = new Soldier('张三', '战士', 50, 8, qualityStick, bronzeArmor);

      qualityStick.isOblaze = jest.genMockFn();
      qualityStick.isOblaze.mockReturnValue(false);

      var result = soldier.getIsOblaze();

      expect(result).toBe(false);
    });

  });

});
