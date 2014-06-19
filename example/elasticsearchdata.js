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
            },
            {
                "_index":"movies",
                "_type":"movie",
                "_id":"1",
                "_score":1.0,
                "_source" : 
                {
                    "title": "The Godfather",
                    "director": "Francis Ford Coppola",
                    "year": 1972,
                    "genres": ["Crime", "Drama"]
                }
            }
        ]
    }
};

module.exports = data;