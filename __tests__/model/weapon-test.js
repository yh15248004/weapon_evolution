jest.dontMock('../../src/model/weapon');

describe('Weapon', function() {
  var Weapon;
  var weapon;
  beforeEach(function() {
    Weapon = require('../../src/model/weapon');
    weapon = new Weapon('xuanyuan', 20);
  });

  describe('#getWeaponName()', function() {
    it('should return correct name', function() {
      var result = weapon.getWeaponName();

      expect(result).toBe('xuanyuan');
    });
  });

  describe('#getWeaponAttack()', function() {

    it('should return correct attack', function() {

      var result = weapon.getWeaponAttack();

      expect(result).toBe(20);
    });

  });

});
