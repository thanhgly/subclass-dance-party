var FlashDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.$node.addClass('flash');
};

FlashDancer.prototype = Object.create(MakeDancer.prototype);
FlashDancer.prototype.constructor = FlashDancer;


FlashDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.top = $("body").height() * Math.random();
  this.left = $("body").width() * Math.random();
  this.setPosition(this.top, this.left);

  if (this.$node.css('width').substr(0, 3) === '100') {
    this.$node.css('width', '300px');
    this.$node.css('height', '300px');
  } else if (this.$node.css('width').substr(0, 3) === '300') {
    this.$node.css('width', '500px');
    this.$node.css('height', '500px');
  } else if (this.$node.css('width').substr(0, 3) === '500') {
    this.$node.css('width', '400px');
    this.$node.css('height', '400px');
  } else if (this.$node.css('width').substr(0, 3) === '400') {
    this.$node.css('width', '200px');
    this.$node.css('height', '200px');
  } else if (this.$node.css('width').substr(0, 3) === '200') {
    this.$node.css('width', '100px');
    this.$node.css('height', '100px');
  }

};

FlashDancer.prototype.lineUp = function() {
  clearTimeout(this.timer);
  this.$node.animate({top: $("body").height() * 0.45}, 'slow');
};