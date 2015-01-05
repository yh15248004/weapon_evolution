//jest.dontMock('../../src/model/weapon');
//jest.dontMock('../../src/model/effect');
//jest.dontMock('lodash');
//
//var Effect = require('../../src/model/effect');
//var Weapon = require('../../src/model/weapon');
//describe('Weapon', function() {
//
//  beforeEach(function() {
//
//  });
//
//  describe('#getWeaponName()', function() {
//    it('should return correct name', function() {
//      var weapon = new Weapon('xuanyuan', 20, new Effect('致命一击', 1));
//
//      var result = weapon.getWeaponName();
//
//      expect(result).toBe('xuanyuan');
//    });
//  });
//
//  describe('#getWeaponAttack()', function() {
//
//    it('should return correct attack', function() {
//      var weapon = new Weapon('xuanyuan', 20, new Effect('致命一击', 1));
//
//      var result = weapon.getWeaponAttack();
//
//      expect(result).toBe(20);
//    });
//
//  });
//
//  describe('#isTrigger()', function() {
//
//    it('should return correct boolean', function() {
//      var weapon = new Weapon('xuanyuan', 20, new Effect('致命一击', 1));
//
//      var result = weapon.isTrigger();
//
//      expect(result).toBe(true);
//    });
//
//    it('should return correct boolean', function() {
//      var weapon = new Weapon('xuanyuan', 20, new Effect('致命一击', 0));
//
//      var result = weapon.isTrigger();
//
//      expect(result).toBe(false);
//    });
//
//  });
//
//  describe('#isPoisoning()', function() {
//
//    it('should return correct boolean', function() {
//      var weapon = new Weapon('xuanyuan', 20, new Effect('中毒', 1));
//
//      var result = weapon.isPoisoning();
//
//      expect(result).toBe(true);
//    });
//
//    it('should return correct boolean', function() {
//      var weapon = new Weapon('xuanyuan', 20, new Effect('中毒', 0));
//
//      var result = weapon.isPoisoning();
//
//      expect(result).toBe(false);
//    });
//
//  });
//
//  describe('#isOblaze()', function() {
//
//    it('should return correct boolean', function() {
//      var weapon = new Weapon('xuanyuan', 20, new Effect('着火', 1));
//
//      var result = weapon.isOblaze();
//
//      expect(result).toBe(true);
//    });
//
//    it('should return correct boolean', function() {
//      var weapon = new Weapon('xuanyuan', 20, new Effect('着火', 0));
//
//      var result = weapon.isOblaze();
//
//      expect(result).toBe(false);
//    });
//
//  });
//
//});
