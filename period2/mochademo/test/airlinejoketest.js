var expect = require("chai").expect;          //run npm test
var jokes = require("../airline/airline");
var nock = require("nock");                   //HTTP mocking and expectations library, can test HTTP request in isolation
var testJoke = {"id": 1234, "joke": "ha ha ha", "reference": "unknown"};

var n = nock('http://jokes-plaul.rhcloud.com');

describe('Person API Get', function () {
  before(function (done) {
    n.get('/api/joke')
      .reply(200,testJoke);
    done();
  });

  it('should fetch the vampire joke', function (done) {
    jokes.getJoke(function (err, joke) {
      if (err) {
        throw err;
      }
      expect(joke.reference).to.be.equal("unknown");
      expect(joke).to.be.eql(testJoke);
      done();
    })
  });
});