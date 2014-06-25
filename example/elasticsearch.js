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

// add more embedded objs for perf profiling
var testRecordCount = 100000;
for (var i=0; i < testRecordCount; i++) {
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

/*  measures perf and prints one item in key array */
var start = new Date().getTime();
var keys = deepkeyfisher(jsObj);
var end = new Date().getTime();
var time = end - start;
console.log(testRecordCount + ' objects evaluated in ' + time + 'ms');
console.log("the value of key: '" + keys[11] + "' is: " + eval('jsObj.' + keys[11]));
