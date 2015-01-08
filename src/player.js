function Player(name, hp, ap) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}

Player.prototype.isAlive = function () {
    return this.hp > 0;
};

Player.prototype.build_attack_with_string = function() {
    return "攻击了";
};

Player.prototype.build_pre_damage_string = function(){
    return "";
};

Player.prototype.build_after_damage_string = function(attack_impact){
    if(attack_impact && attack_impact.is_impact_after_damage){
        return attack_impact.build_effect_string(this.name) + ",";
    }
    return "";
};

Player.prototype.build_attack_string = function (defencer, attack_result) {
    return this.role() + this.name + this.build_attack_with_string() + defencer.role() + defencer.name + ","
        + this.build_pre_damage_string(attack_result.attack_impact)
        + defencer.name + "受到了" + attack_result.damage + "点伤害,"
        + defencer.build_after_damage_string(attack_result.attack_impact)
        + defencer.name + "剩余生命：" + defencer.hp;
};

Player.prototype.getAP = function(){
    return this.ap;
};

Player.prototype.do_attack = function(defencer) {
    var damage = defencer.be_attacked(this.getAP());
    return  {
        damage: damage
    };
}

Player.prototype.attack = function (defencer) {
    var attack_result = this.do_attack(defencer);
    return this.build_attack_string(defencer, attack_result);
};

Player.prototype.origin_damage = function(ap) {
    return ap;
};

Player.prototype.calculate_impacted_damage = function(ap, attack_impact){
    var damage = this.origin_damage(ap);
    if(attack_impact && attack_impact.is_impact_before_damage){
        return attack_impact.impact(damage);
    }
    return damage;
}

Player.prototype.be_attacked = function (ap, attack_impact) {
    var damage = this.calculate_impacted_damage(ap, attack_impact);
    this.hp -= damage;
    return damage;
};

Player.prototype.role = function () {
    return "普通人"
};

module.exports = Player;
