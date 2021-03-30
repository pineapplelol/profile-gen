"use strict";
exports.__esModule = true;
var util = require("./utils/generators");
var data = require("./data.json");
var htmlString = "\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">";
htmlString += util.genTag("title", data.name);
htmlString += util.genSingleTag("/head");
htmlString += util.genSingleTag("body");
htmlString += util.genSingleTag("header");
htmlString += util.genTag("h1", data.name);
htmlString += util.genTag("p", data.tagline, { "class": "subtitle" });
htmlString += util.genSingleTag("/header");
for (var i = 0; i < data.sections.length; i++) {
    htmlString += util.genSingleTag("section");
    htmlString += util.genTag("h2", data.sections[i].sectionName);
    htmlString += util.genSingleTag("ul");
    for (var j = 0; j < data.sections[i].points.length; j += 1) {
        var point = data.sections[i].points[j];
        htmlString += util.genSingleTag("li");
        htmlString += util.genTag("h3", point.sectionPointName);
        htmlString += util.genTag("h4", point.sectionTime);
        htmlString += util.genTag("p", point.sectionDescription);
        htmlString += util.genSingleTag("/li");
    }
    htmlString += util.genSingleTag("/ul");
    htmlString += util.genSingleTag("/section");
}
htmlString += util.genSingleTag("/footer");
htmlString += util.genTag("p", "Copyright 2021");
htmlString += util.genSingleTag("ul");
for (var i = 0; i < data.footerLinks.length; i += 1) {
    htmlString += util.genSingleTag("li");
    htmlString += util.genTag("p", data.footerLinks[i].link);
    htmlString += util.genSingleTag("/li");
}
htmlString += util.genSingleTag("/ul");
htmlString += util.genSingleTag("/footer");
htmlString += util.genSingleTag("/body");
htmlString += util.genSingleTag("/html");
util.writeToFile("lol.html", htmlString);
