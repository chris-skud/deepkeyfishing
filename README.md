keepkeyfishing
==============

Takes any javascript object that is 'typeof object' and returns an array of strings representing all its enumerable keys that contain simple data (non object/array). 

The idea was conceived due to the need to flatten and render a table of data based on an ElasticSearch json result which can have an arbitrarily deep object hierarchy.

run "node example/elasticsearch.js" from the root to see it in action.