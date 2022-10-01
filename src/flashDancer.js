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

  if (this.$node.css('width').substr(0, 2) === '10') {
    this.$node.css('width', '30px');
    this.$node.css('height', '30px');
  } else if (this.$node.css('width').substr(0, 2) === '30') {
    this.$node.css('width', '50px');
    this.$node.css('height', '50px');
  } else if (this.$node.css('width').substr(0, 2) === '50') {
    this.$node.css('width', '40px');
    this.$node.css('height', '40px');
  } else if (this.$node.css('width').substr(0, 2) === '40') {
    this.$node.css('width', '20px');
    this.$node.css('height', '20px');
  } else if (this.$node.css('width').substr(0, 2) === '20') {
    this.$node.css('width', '10px');
    this.$node.css('height', '10px');
  }

};

FlashDancer.prototype.lineUp = function() {
  clearTimeout(this.timer);
  this.$node.animate({top: $("body").height() * 0.45}, 'slow');

};