jest.autoMockOff();

var Weapon = require('../../src/model/weapon');
var Armor = require('../../src/model/armor');
var Soldier = require('../../src/model/soldier');
var Player = require('../../src/model/player');

describe('Soldier', function() {
    var qualityStick, bronzeArmor, playerOne, playerTwo;
    describe('#attack()', function() {

        it('should return attacker attactText correct', function() {
            qualityStick = new Weapon('优质的木棒', 8);
            bronzeArmor = new Armor('青铜铠甲', 4);
            playerOne = new Soldier('张三', '战士', 50, 9, qualityStick, bronzeArmor);
            playerTwo = new Player('李四', '普通人', 50, 8);

            var result = playerOne.attack(playerTwo);

            expect(result).toBe('战士张三用优质的木棒攻击了普通人李四,李四受到了17点伤害,李四剩余生命：33\n');

        });

    });
});