function DeadlyAttackEffect(){

}

DeadlyAttackEffect.prototype.trigger = function() {
    return {
        is_impact_before_damage: true,
        impact: function (damage) {
            return damage * 3;

        },
        build_effect_string: function(name){
            return name + "发动了致命一击";
        }
    };
}

module.exports = DeadlyAttackEffect;