module.exports = function(times) {
  var sequence = [];
  var api = {
    pipe: function(system) {
      sequence.push(system);
      return api;
    }
  };

  api.getSequence = function() {
    var result = [];
    while(--times >= 0) {
      Array.prototype.push.apply(result, sequence);
    }
    return result;
  };

  return api;
};
