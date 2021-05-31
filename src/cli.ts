#! /usr/bin/env node

const cla = require('command-line-args');
const util = require('./util');

const argDefinitions = [
  { name: 'file', type: String, multiple: false, defaultOption: true },
  { name: 'theme', type: String, multiple: false },
  { name: 'dir', type: String, multiple: false },
  { name: 'minify', alias: 'm', type: Boolean },
];
const args = cla(argDefinitions);

const data = util.parseJSON(args.file);
// util.validateJSON(data);
let htmlString: string = util.genHTMLString(data);
util.genProfile(htmlString, args.theme ?? 'neeraj', args.dir ?? 'profile-site');
if (args.minify) util.minifyFiles();
