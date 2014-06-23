deepkeyfishing
==============

Takes any javascript object that is 'typeof object' and returns an array of strings representing all its enumerable keys that terminate at simple values (non object/array). 

The idea was conceived due to the need to flatten complex ElasticSearch json results to enable rendering of a table for easy human consumption and csv output.

run "node example/elasticsearch.js" from the root to see it in action.
