function PoisonEffect(damage){
    this.damage = damage;
}

PoisonEffect.prototype.trigger = function(){
    return {
        is_impact_after_damage: true,
        build_effect_string: function(name){
            return name + "中毒了";
        }
    };
};

module.exports = PoisonEffect;