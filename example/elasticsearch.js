var deepkeyfisher = require('../');
//var deepkeyfisher = require('../asyncfishing.js');
var data = require('./elasticsearchdata.js')

function myObj() {
    this.name = 'Chris';
    this.howdy = 'howdy';
}

myObj.prototype.newProp = 'yay new property';
myObj.prototype.newFunc = function() {console.log('yes');}
myObj.prototype.newNull = null;
myObj.prototype.newUndefined = undefined;
//console.log(deepkeyfisher(new myObj));
//console.log('starting a new object');

for (var i=0; i < 1000; i++) {
    var newRec = {
        "_index":"movies",
            "_type":"movie",
            "_id":"2",
            "_score":1.0, 
            "_source" : 
            {
                "title": "Lawrence of Arabia",
                "director": "David Lean",
                "year": 1962,
                "genres": ["Adventure", "Biography", "Drama"]
            }
    };
    data.hits.hits.push(newRec);
}
data["love"] = 'love'; // add a member.


var start = new Date().getTime();

var keys = deepkeyfisher(data);

var end = new Date().getTime();
var time = end - start;
//console.log(keys);
console.log('Execution time: ' + time + 'ms');


/*
var end, start;
start = new Date();
setTimeout(function() {
    deepkeyfisher(data);
    end = new Date();
    console.log("Operation took " + (end.getTime() - start.getTime()) + " msec");
},5400);
*/


//console.log(fulldatakeys);
//console.log(fulldatakeys[10]);
//console.log(typeof fulldatakeys[10]);
//console.log(fulldatakeys[10]);

//console.log(eval('data.' + keys[10]));

//console.log(eval('data.' + fulldatakeys[10]));

//console.log(deepkeyfisher(data.hits.hits)); // try passing an array as first level

