var assert = require("assert")

var deepkeyfisher = require('../');
var TestData = require('./data.js')


function myObj() {
    this.name = 'Chris';
    this.howdy = 'howdy';
}

myObj.prototype.newProp = 'yay new property';
myObj.prototype.newFunc = function() {console.log('yes');}
myObj.prototype.newNull = null;
myObj.prototype.newUndefined = undefined;


describe('deepkeyfisher getting object keys', function(){
  
  it('should return empty array when passed data null or not an object', function(){
    assert.equal("[]", deepkeyfisher(''));
    assert.equal("[]", deepkeyfisher(null));
  })


  it('should include all enumerable keys including those added to the prototype chain', function(){
    TestData.prototype.myFunkyData = 'funky';
    var testDatum = new TestData();
    testDatum['howdy'] = 'howdy';
    assert.equal(28, deepkeyfisher(testDatum).length);
  })


  it('should include keys that are array indicies', function(){
    var keyArray = new deepkeyfisher(new TestData().esData);
    assert.equal(true, keyArray.indexOf('hits.hits[1]._source.genres[0]') > -1);
  })


  it('should return correct number of items in array', function(){
    var testData = new TestData().esData;
    assert.equal(26, deepkeyfisher(testData).length);
  })


  it('should exclude properties that are null, undefined and functions', function(){
    function MyObj() {
      this.name = 'Chris';
      this.yeaow = 'yessir';
      this.noway = 'no';
    }

    MyObj.prototype.newProp = 'yay new property';
    MyObj.prototype.newFunc = function() {console.log('yes');}
    MyObj.prototype.newNull = null;
    MyObj.prototype.newUndefined = undefined;
    assert.equal(4, deepkeyfisher(new MyObj).length);
  })  
})