var MichaelJacksonDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('mcj');

  this.left = left;

};

MichaelJacksonDancer.prototype = Object.create(MakeDancer.prototype);
MichaelJacksonDancer.prototype.constructor = MichaelJacksonDancer;


MichaelJacksonDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({left: this.left}, 'slow');
  this.$node.animate({left: this.left + 100}, 'slow');
};

MichaelJacksonDancer.prototype.lineUp = function() {
  this.$node.animate({top: $("body").height() * 0.2}, 'slow');

};