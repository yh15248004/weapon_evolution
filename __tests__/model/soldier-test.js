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

      qualityStick.isTrigger = jest.genMockFn();
      qualityStick.isTrigger.mockReturnValue(true);
      var result = soldier.getAttackPoint();

      expect(result).toBe(30);

    });

    it('should return correct attrackPoint', function() {

      var qualityStick = new Weapon('利剑', 2, new Effect('致命一击', 1));
      var bronzeArmor = new Armor('青铜铠甲', 4);
      var soldier = new Soldier('张三', '战士', 50, 8, qualityStick, bronzeArmor);

      qualityStick.isTrigger = jest.genMockFn();
      qualityStick.isTrigger.mockReturnValue(false);
      var result = soldier.getAttackPoint();

      expect(result).toBe(10);

    });

  });

});
