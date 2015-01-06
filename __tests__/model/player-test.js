jest.autoMockOff();

var Weapon = require('../../src/model/weapon');
var Armor = require('../../src/model/armor');
var Soldier = require('../../src/model/soldier');
var Player = require('../../src/model/player');

describe('Player', function() {
    var qualityStick, bronzeArmor, playerOne, playerTwo;
    describe('#attack()', function() {

        it('should return attacker attactText correct', function() {
            qualityStick = new Weapon('优质的木棒', 8);
            bronzeArmor = new Armor('青铜铠甲', 4);
            playerOne = new Soldier('张三', '战士', 50, 9, qualityStick, bronzeArmor);
            playerTwo = new Player('李四', '普通人', 50, 8);

            var result = playerTwo.attack(playerOne);

            expect(result).toBe('普通人李四攻击了战士张三,张三受到了4点伤害,张三剩余生命：46\n');

        });

    });
});