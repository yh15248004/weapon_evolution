jest.dontMock('../../src/model/player-pk');
jest.dontMock('../../src/model/player');

describe('PlayerPk', function() {

  describe('#pk()', function() {

    it('should return correct text', function() {
      var Player = require('../../src/model/player');
      var PlayerPk = require('../../src/model/player-pk');
      var playerOne = new Player('张三',50,9);
      var playerTwo = new Player('李四',49,8);

      var playerPk = new PlayerPk(playerOne, playerTwo);
      var result = playerPk.pk();

      expect(result).toBe('李四攻击了张三,张三受到了8点伤害，张三生命值还剩42\n' +
      '张三攻击了李四,李四受到了9点伤害，李四生命值还剩40\n' +
      '李四攻击了张三,张三受到了8点伤害，张三生命值还剩34\n' +
      '张三攻击了李四,李四受到了9点伤害，李四生命值还剩31\n' +
      '李四攻击了张三,张三受到了8点伤害，张三生命值还剩26\n' +
      '张三攻击了李四,李四受到了9点伤害，李四生命值还剩22\n' +
      '李四攻击了张三,张三受到了8点伤害，张三生命值还剩18\n' +
      '张三攻击了李四,李四受到了9点伤害，李四生命值还剩13\n' +
      '李四攻击了张三,张三受到了8点伤害，张三生命值还剩10\n' +
      '张三攻击了李四,李四受到了9点伤害，李四生命值还剩4\n' +
      '李四攻击了张三,张三受到了8点伤害，张三生命值还剩2\n' +
      '张三攻击了李四,李四受到了9点伤害，李四生命值还剩-5\n' +
      '李四被打败了！');

    });

  });

});
