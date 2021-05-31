#! /usr/bin/env node

const cla = require('command-line-args');
const util = require('./util');

const argDefinitions = [
  { name: 'file', type: String, multiple: false, defaultOption: true },
  { name: 'minify', alias: 'm', type: Boolean},
]
const args = cla(argDefinitions);

const data = util.parseJSON(args.file);
// util.validateJSON(data);
let htmlString: string = util.genHTMLString(data);
util.genProfile(htmlString, data.theme.name);
if (args.minify) console.log("Minifying");