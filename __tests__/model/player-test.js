jest.dontMock('../../src/model/player');
jest.dontMock('../../src/model/weapon');
jest.dontMock('../../src/model/armor');

describe('Player', function() {

  var Player,player,Weapon,qualityStick,Armor,bronzeArmor;
  beforeEach(function() {
    Player = require('../../src/model/player');
    Weapon = require('../../src/model/weapon');
    Armor = require('../../src/model/armor');
    qualityStick = new Weapon('优质的木棒', 8);
    bronzeArmor = new Armor('青铜铠甲', 4);
    player = new Player('张三', 'warrior', 50, 9, qualityStick, bronzeArmor);
  });

  describe('#getWeaponName()', function() {

    it('should return correct weaponName', function() {
      var result = player.getWeaponName();

      expect(result).toBe('优质的木棒');
    });

  });

  describe('#getWeaponAttack()', function() {

    it('should return correct attack', function() {

      var result = player.getWeaponAttack();

      expect(result).toBe(8);
    });

  });

  describe('#getArmorName()', function() {

    it('should return correct armorName', function() {

      var result = player.getArmorName();

      expect(result).toBe('青铜铠甲');
    });

  });

  describe('#getArmorDef()', function() {

    it('should return correct def', function() {

      var result = player.getArmorDef();

      expect(result).toBe(4);
    });

  });

});
