var darling = require('darlingjs');
var chai = require('chai');
var expect = chai.expect;
var repeat = require('..').repeat;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('repeat', function() {
  var p;

  beforeEach(function() {
    p = darling.world();
    p.entity({});
  });

  it('should have method pipe', function() {
    var r = repeat();
    expect(r).to.have.property('pipe');
    expect(r.pipe).to.be.a('function');
  });

  it('should runs updateAll of one system 3 times on repeat(3)', function() {
    var handler = sinon.spy();
    p = p.pipe(
      repeat(3)
        .pipe({
          updateAll: handler
        })
    );

    p.step(100);

    expect(handler).to.have.been.calledThrice;
  });
});
