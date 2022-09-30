describe('flashDancer', function() {

  var flashDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    flashDancer = new FlashDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(flashDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(flashDancer, 'step');
      expect(flashDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(flashDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(flashDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('michaelJacksonDancer', function() {

  var michaelJacksonDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    michaelJacksonDancer = new MichaelJacksonDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(michaelJacksonDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its traverse back and forth', function() {
    sinon.spy(michaelJacksonDancer.$node, 'animate');
    michaelJacksonDancer.step();
    expect(michaelJacksonDancer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(michaelJacksonDancer, 'step');
      expect(michaelJacksonDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(michaelJacksonDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(michaelJacksonDancer.step.callCount).to.be.equal(2);
    });
  });
});
