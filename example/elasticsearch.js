var deepkeyfisher = require('../');
//var deepkeyfisher = require('../asyncfishing.js');
var data = require('./elasticsearchdata.js')

var data = {
    "took":2,
    "timed_out":false,
    "_shards": {
        "total":5,
        "successful":5,
        "failed":0
    },
    "hits": {
        "total":6,
        "max_score":1.0,
        "hits": []
    }
};

for (var i=0; i < 10; i++) {
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

// 
var start = new Date().getTime();
var keys = deepkeyfisher(data);
var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time + 'ms');
console.log(keys);


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

