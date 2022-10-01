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

  it('should have a lineUp method', function() {
    expect(flashDancer.lineUp).to.not.equal(undefined);
  });

  it('should be an instance of superclass MakeDancer', function() {
    expect(flashDancer instanceof MakeDancer).to.equal(true);
  });

  it('should not be an instance of other subclasses', function() {
    expect(flashDancer instanceof MakeBlinkyDancer).to.equal(false);
    expect(flashDancer instanceof MichaelJacksonDancer).to.equal(false);
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

  it('should have a lineUp method', function() {
    expect(michaelJacksonDancer.lineUp).to.not.equal(undefined);
  });

  it('should be an instance of superclass MakeDancer', function() {
    expect(michaelJacksonDancer instanceof MakeDancer).to.equal(true);
  });

  it('should not be an instance of other subclasses', function() {
    expect(michaelJacksonDancer instanceof FlashDancer).to.equal(false);
    expect(michaelJacksonDancer instanceof MakeBlinkyDancer).to.equal(false);
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
