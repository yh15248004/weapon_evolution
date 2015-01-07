function State(times) {
    this.times = times;
}

State.prototype.equal = function(state) {
    return this.name() === state.name();
};

State.prototype.expire = function() {
    return times < 0;
};

State.prototype.impact = function(player) {

};


module.exports = State;