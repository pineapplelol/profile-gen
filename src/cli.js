#! /usr/bin/env node
var _a;
var cla = require('command-line-args');
var util = require('./util');
var argDefinitions = [
    { name: 'file', type: String, multiple: false, defaultOption: true },
    { name: 'theme', type: String, multiple: false },
    { name: 'dir', type: String, multiple: false },
    { name: 'minify', alias: 'm', type: Boolean },
];
var args = cla(argDefinitions);
var data = util.parseJSON(args.file);
// util.validateJSON(data);
var htmlString = util.genHTMLString(data);
util.genProfile(htmlString, (_a = args.theme) !== null && _a !== void 0 ? _a : 'neeraj');
if (args.minify)
    util.minifyFiles();
