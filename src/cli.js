#! /usr/bin/env node
var _a, _b;
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
util.genProfile(htmlString, (_a = args.theme) !== null && _a !== void 0 ? _a : 'neeraj', (_b = args.dir) !== null && _b !== void 0 ? _b : 'profile-site');
if (args.minify)
    util.minifyFiles();
