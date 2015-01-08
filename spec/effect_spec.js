var Player = require('../src/player.js');
var Soldier = require('../src/soldier.js');
var Weapon = require('../src/weapon');
var Armor = require('../src/armor');
var DeadlyAttackEffect = require("../src/effect/deadly-attack-effect.js");
var PoisonEffect = require("../src/effect/poison-effect.js");

describe("Effect", function(){
    describe("deadly attack effect", function(){

        it("soldier with weapon vs soldier with armor trigger effect attack string", function(){
            var zhangsan = new Soldier("张三", 100, 10, new Weapon("利剑",2, new DeadlyAttackEffect()));
            var lisi = new Soldier("李四", 100, 8, null, new Armor("皮甲", 2));
            var attack_string = zhangsan.attack(lisi);

            expect(attack_string).toBe("战士张三用利剑攻击了战士李四,张三发动了致命一击,李四受到了30点伤害,李四剩余生命：70");
        });

        it("soldier with weapon vs soldier no armor trigger effect attack string", function(){
            var zhangsan = new Soldier("张三", 100, 10, new Weapon("利剑",2, new DeadlyAttackEffect()));
            var lisi = new Soldier("李四", 100, 8);
            var attack_string = zhangsan.attack(lisi);

            expect(attack_string).toBe("战士张三用利剑攻击了战士李四,张三发动了致命一击,李四受到了36点伤害,李四剩余生命：64");
        });

        it("soldier with weapon vs soldier with armor trigger effect attack string", function(){
            var zhangsan = new Soldier("张三", 100, 10, new Weapon("利剑",2, new DeadlyAttackEffect()));
            var lisi = new Player("李四", 100, 8);
            var attack_string = zhangsan.attack(lisi);

            expect(attack_string).toBe("战士张三用利剑攻击了普通人李四,张三发动了致命一击,李四受到了36点伤害,李四剩余生命：64");
        });

    });

    describe("poison effect", function(){
        it("attack soldier with armor trigger effect attack string", function(){
            var zhangsan = new Soldier("张三", 100, 10, new Weapon("毒剑",2, new PoisonEffect(2)));
            var lisi = new Soldier("李四", 100, 8, null, new Armor("皮甲", 2));
            var attack_string = zhangsan.attack(lisi);

            expect(attack_string).toBe("战士张三用毒剑攻击了战士李四,李四受到了10点伤害,李四中毒了,李四剩余生命：90");
        });

        it("attack normal person with armor trigger effect attack string", function(){
            var zhangsan = new Soldier("张三", 100, 10, new Weapon("毒剑",2, new PoisonEffect(2)));
            var lisi = new Player("李四", 100, 8);
            var attack_string = zhangsan.attack(lisi);

            expect(attack_string).toBe("战士张三用毒剑攻击了普通人李四,李四受到了12点伤害,李四中毒了,李四剩余生命：88");
        });
    });
});
