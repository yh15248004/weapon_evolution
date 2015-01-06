jest.autoMockOff();

var Effect = require('../../src/model/effect');
var Player = require('../../src/model/player');
var Soldier = require('../../src/model/soldier');
var PlayerPk = require('../../src/model/player-pk');
var Armor = require('../../src/model/armor');
var Weapon = require('../../src/model/weapon');

describe('PlayerPk', function() {
    var qualityStick, bronzeArmor, playerOne, playerTwo, playerPk;

    beforeEach(function () {

    });

    describe('#pk()', function () {

        it('should return correct critical', function () {

            qualityStick = new Weapon('优质的木棒', 4);
            bronzeArmor = new Armor('青铜铠甲', 4);
            playerOne = new Soldier('张三', '战士', 50, 10, qualityStick, bronzeArmor);
            playerTwo = new Player('李四', '普通人', 50, 10);
            playerPk = new PlayerPk(playerOne, playerTwo);

            var result = playerPk.pk();
            expect(result).toBe(
                '战士张三用优质的木棒攻击了普通人李四,李四受到了14点伤害,李四剩余生命：36' + '\n\n' +

                '普通人李四攻击了战士张三,张三受到了6点伤害,张三剩余生命：44' + '\n\n' +

                '战士张三用优质的木棒攻击了普通人李四,李四受到了14点伤害,李四剩余生命：22' + '\n\n' +

                '普通人李四攻击了战士张三,张三受到了6点伤害,张三剩余生命：38' + '\n\n' +

                '战士张三用优质的木棒攻击了普通人李四,李四受到了14点伤害,李四剩余生命：8' + '\n\n' +

                '普通人李四攻击了战士张三,张三受到了6点伤害,张三剩余生命：32' + '\n\n' +

                '战士张三用优质的木棒攻击了普通人李四,李四受到了14点伤害,李四剩余生命：-6' + '\n' +
                '李四被打败了。\n'
            );

        });
    });

});