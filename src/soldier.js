var Player = require('./player.js');
var NoArmor = require('./no-armor.js');
var NoWeapon = require('./no-weapon.js');

function Soldier(name, hp, ap, weapon, armor){
    Player.call(this, name, hp, ap);
    this.weapon = weapon ? weapon : new NoWeapon();
    this.armor = armor ? armor : new NoArmor();
}
Soldier.prototype = Object.create(Player.prototype);
Soldier.prototype.constructor = Soldier;

Soldier.prototype.origin_damage = function(ap) {
    return ap - this.armor.dp;
};

Soldier.prototype.getAP = function() {
    return this.ap + this.weapon.ap;
};

Soldier.prototype.do_attack = function(defencer){
    var attack_impact = this.weapon.effect.trigger();
    var damage = defencer.be_attacked(this.getAP(), attack_impact);
    return  {
        attack_impact: attack_impact,
        damage: damage
    };
}

Soldier.prototype._super_build_attack_with_string  = Player.prototype.build_attack_with_string;

Soldier.prototype.build_attack_with_string = function() {
    return this.weapon.get_use_string() + this._super_build_attack_with_string();
};

Soldier.prototype.build_pre_damage_string = function(attack_impact){
    if(attack_impact && attack_impact.is_impact_before_damage){
        return attack_impact.build_effect_string(this.name) + ",";
    }
    return "";
};

Soldier.prototype.role = function(){
    return "战士"
};

module.exports = Soldier;
