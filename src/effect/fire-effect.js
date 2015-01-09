function FireEffect(damage){
    this.damage = damage;
}

FireEffect.prototype.trigger = function(){
    return {
        is_impact_after_damage: true,
        build_effect_string: function(name){
            return name + "着火了";
        }
    };
};

module.exports = FireEffect;