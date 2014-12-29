jest.dontMock('../../src/model/armor');

describe('PlayerPk', function() {
  var Armor;
  var armor;
  beforeEach(function() {
    Armor = require('../../src/model/armor');
    armor = new Armor('qingtong', 10);
  });
  describe('#getArmorName()', function() {

    it('should return correct name', function() {

      var result = armor.getArmorName();

      expect(result).toBe('qingtong');
    });

  });

  describe('#getArmorDef()', function() {

    it('should return correct def', function() {

      var result = armor.getArmorDef();

      expect(result).toBe(10);
    });

  });

});
