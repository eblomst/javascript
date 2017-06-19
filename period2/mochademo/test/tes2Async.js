//var expect = require("chai").expect;
const {expect} = require("chai");  //specific feature

describe("Testing async behaviour", function(){
  var foo = false;
  before(function(done){
    setTimeout(function(){
      foo = true;
      done();  //Test will fail without this
    }, 1000);
  });
  it("should pass (with done called)", function(){
    expect(foo).to.equal(true);
  });
});   