#! /usr/bin/env node
var util = require('./generators');
// const data = require('./data.json');
var _a = process.argv, args = _a.slice(2);
var data = require("./" + args);
var htmlString = "\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link rel=\"stylesheet\" href=\"main.css\">\n  <style>\n    :root {\n      --primary: " + data.theme.color + ";\n    }\n  </style>";
htmlString += util.genTag('title', data.name);
htmlString += util.genSingleTag('/head');
htmlString += util.genSingleTag('body');
htmlString += util.genSingleTag('header');
htmlString += util.genTag('img', '', {
    src: data.image,
    alt: data.name + " profile picture"
});
htmlString += util.genTag('h1', data.name);
htmlString += util.genSingleTag('/header');
htmlString += util.genSingleTag('main');
htmlString += util.genTag('p', data.tagline, { "class": 'subtitle' });
for (var _i = 0, _b = data.sections; _i < _b.length; _i++) {
    var section = _b[_i];
    htmlString += util.genSingleTag('section');
    htmlString += util.genTag('h2', section.sectionName);
    htmlString += util.genSingleTag('ul');
    for (var _c = 0, _d = section.points; _c < _d.length; _c++) {
        var point = _d[_c];
        htmlString += util.genSingleTag('li');
        htmlString += util.genTag('h3', point.sectionPointName);
        htmlString += util.genTag('h4', point.sectionTime);
        htmlString += util.genTag('p', point.sectionDescription);
        htmlString += util.genSingleTag('/li');
    }
    htmlString += util.genSingleTag('/ul');
    htmlString += util.genSingleTag('/section');
}
htmlString += util.genSingleTag('/main');
htmlString += util.genSingleTag('footer');
htmlString += util.genTag('p', 'Copyright 2021');
htmlString += util.genSingleTag('ul');
for (var i = 0; i < data.footerLinks.length; i += 1) {
    htmlString += util.genSingleTag('li');
    htmlString += util.genTag('a', data.footerLinks[i].linkName, {
        href: data.footerLinks[i].link
    });
    htmlString += util.genSingleTag('/li');
}
htmlString += util.genSingleTag('/ul');
htmlString += util.genSingleTag('/footer');
htmlString += util.genSingleTag('/body');
htmlString += util.genSingleTag('/html');
util.genProfile(htmlString, data.theme.name);
