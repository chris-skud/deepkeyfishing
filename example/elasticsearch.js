var deepkeyfisher = require('../');

var jsObj = {
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
        "hits": [
            {
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
            }
        ]
    }
};

// add more records for perf profiling
/*
for (var i=0; i < 10000; i++) {
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
    jsObj.hits.hits.push(newRec);
}
*/


var keyArray = deepkeyfisher(jsObj);
console.log(keyArray);
console.log("the value of key: '" + keyArray[11] + "' is: ");
console.log(eval('jsObj.' + keyArray[11]));



/*  If you want to measure perf */
//var start = new Date().getTime();
//var keys = deepkeyfisher(jsObj);
//var end = new Date().getTime();
//var time = end - start;
//console.log('Execution time: ' + time + 'ms');
//console.log(keys);