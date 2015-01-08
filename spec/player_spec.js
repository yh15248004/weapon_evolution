var m = require('jsmockito').JsMockito;
var Player = require('../src/player.js');
var Game = require('../src/game.js');
var Soldier = require('../src/soldier.js');
var Weapon = require('../src/weapon');
var Armor = require('../src/armor');

describe("player", function(){
    it("game spec", function(){
        var zhang_san = new Player("张三", 100, 10);
        var li_si = new Player("李四", 100, 8);
        var mocked_console = m.spy(console);
        var game = new Game(zhang_san, li_si, mocked_console);
        game.fight();
        m.verify(mocked_console).log("李四被打败了.");
    });

    it("attack reduce hp", function(){
        var zhangsan = new Player("张三", 100, 10);
        var lisi = new Player("李四", 100, 8);
        zhangsan.attack(lisi);
        expect(lisi.hp).toBe(90);
    });


    it("normal person vs normal person attack string", function(){
        var zhangsan = new Player("张三", 100, 10);
        var lisi = new Player("李四", 100, 8);
        var attack_string = zhangsan.attack(lisi);
        expect(attack_string).toBe("普通人张三攻击了普通人李四,李四受到了10点伤害,李四剩余生命：90");
    });

    it("soldier vs normal person attack string", function () {
        var zhangsan = new Soldier("张三", 100, 10, new Weapon("优质木棒", 2));
        var lisi = new Player("李四", 100, 8);
        var attack_string = zhangsan.attack(lisi);
        expect(attack_string).toBe("战士张三用优质木棒攻击了普通人李四,李四受到了12点伤害,李四剩余生命：88");
    });

    it("soldier vs soldier attack string", function(){
        var zhangsan = new Soldier("张三", 100, 10, new Weapon("优质木棒", 2));
        var lisi = new Soldier("李四", 100, 8);
        var attack_string = zhangsan.attack(lisi);
        expect(attack_string).toBe("战士张三用优质木棒攻击了战士李四,李四受到了12点伤害,李四剩余生命：88");
    });

    it("normal person vs soldier attack string", function(){
        var zhangsan = new Player("张三", 100, 10);
        var lisi = new Soldier("李四", 100, 8);
        var attack_string = zhangsan.attack(lisi);
        expect(attack_string).toBe("普通人张三攻击了战士李四,李四受到了10点伤害,李四剩余生命：90");
    });

    it("soldier with no weapon vs soldier attack string", function(){
        var zhangsan = new Soldier("张三", 100, 10);
        var lisi = new Soldier("李四", 100, 8);
        var attack_string = zhangsan.attack(lisi);
        expect(attack_string).toBe("战士张三攻击了战士李四,李四受到了10点伤害,李四剩余生命：90");
    });


    describe("Armor", function(){
        it("soldier vs soldier with armor attack string", function(){
            var zhangsan = new Soldier("张三", 100, 10, new Weapon("优质木棒",2));
            var lisi = new Soldier("李四", 100, 8, null, new Armor("皮甲", 2));
            var attack_string = zhangsan.attack(lisi);

            expect(attack_string).toBe("战士张三用优质木棒攻击了战士李四,李四受到了10点伤害,李四剩余生命：90");
        });

        it("normal person vs soldier with armor attack string", function () {
            var zhangsan = new Player("张三", 100, 10);
            var lisi = new Soldier("李四", 100, 8, null, new Armor("皮甲", 2));
            var attack_string = zhangsan.attack(lisi);

            expect(attack_string).toBe("普通人张三攻击了战士李四,李四受到了8点伤害,李四剩余生命：92");
        });

        it("soldier with no weapon vs soldier with armor attack string", function(){
            var zhangsan = new Soldier("张三", 100, 10);
            var lisi = new Soldier("李四", 100, 8, null, new Armor("皮甲", 2));
            var attack_string = zhangsan.attack(lisi);

            expect(attack_string).toBe("战士张三攻击了战士李四,李四受到了8点伤害,李四剩余生命：92");
        });

    });

});
