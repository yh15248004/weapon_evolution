jest.dontMock('../../src/model/player-pk');
jest.dontMock('../../src/model/player');
jest.dontMock('../../src/model/weapon');
jest.dontMock('../../src/model/armor');

describe('PlayerPk', function() {

  describe('#pk()', function() {

    it('should return correct text', function() {

      var Player = require('../../src/model/player');
      var PlayerPk = require('../../src/model/player-pk');
      var Weapon = require('../../src/model/weapon');
      var Armor = require('../../src/model/armor');
      var qualityStick = new Weapon('优质的木棒', 8);
      var bronzeArmor = new Armor('青铜铠甲', 4);
      var playerOne = new Player('张三','战士',50,9,qualityStick,bronzeArmor);
      var playerTwo = new Player('李四','普通人',49,8);

      var playerPk = new PlayerPk(playerOne, playerTwo);
      var result = playerPk.pk();

      expect(result).toBe(
        '普通人李四攻击了战士张三,张三受到了4点伤害，张三剩余生命：46\n' +
        '战士张三用优质的木棒攻击了普通人李四,李四受到了17点伤害，李四剩余生命：32\n' +
        '普通人李四攻击了战士张三,张三受到了4点伤害，张三剩余生命：42\n' +
        '战士张三用优质的木棒攻击了普通人李四,李四受到了17点伤害，李四剩余生命：15\n' +
        '普通人李四攻击了战士张三,张三受到了4点伤害，张三剩余生命：38\n' +
        '战士张三用优质的木棒攻击了普通人李四,李四受到了17点伤害，李四剩余生命：-2\n' +
        '李四被打败了！'
      );

    });

  });

});
