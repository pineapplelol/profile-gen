#! /usr/bin/env node
var cla = require('command-line-args');
var util = require('./util');
var argDefinitions = [
    { name: 'file', type: String, multiple: false, defaultOption: true },
    { name: 'minify', alias: 'm', type: Boolean },
];
var args = cla(argDefinitions);
var data = util.parseJSON(args.file);
// util.validateJSON(data);
var htmlString = util.genHTMLString(data);
util.genProfile(htmlString, data.theme.name);
if (args.minify)
    util.minifyFiles();
