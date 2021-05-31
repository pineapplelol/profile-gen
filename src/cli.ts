#! /usr/bin/env node

const util = require('./util');
const [, , ...args] = process.argv;
const data = util.parseJSON(args);

// util.validateJSON(data);
let htmlString: string = util.genHTMLString(data);
util.genProfile(htmlString, data.theme.name);
