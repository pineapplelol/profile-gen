#! /usr/bin/env node
var util = require('./util');
var _a = process.argv, args = _a.slice(2);
var data = util.parseJSON(args);
// util.validateJSON(data);
var htmlString = util.genHTMLString(data);
util.genProfile(htmlString, data.theme.name);
