keepkeyfishing
==============

Takes any javascript object that is 'typeof object' and returns an array of all its enumerable keys that contain simple data (non object/array). One could then use the the keys to access the values of the all properties off an object regardless of the complexity. 

The idea was conceived due to the need to flatten and render a table of data based on an Elastic Search return result.

run "node example/elasticsearch.js" from the root to see it in action.