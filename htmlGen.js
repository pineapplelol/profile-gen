"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var util = require("./utils/generators");
var data_json_1 = require("./data.json");
var subtitle = "subtitle goes here";
var section1 = "experiences";
var exp = "experience 1";
var time = "june 1";
var desc = "description";
var copyright = "copyright";
var footer_link = "footer link";
var htmlString = "\n<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">";
htmlString += util.genTag(templateObject_1 || (templateObject_1 = __makeTemplateObject(["title", ""], ["title", ""])), data_json_1["default"].name);
htmlString += util.genSingleTag(templateObject_2 || (templateObject_2 = __makeTemplateObject(["/head"], ["/head"])));
htmlString += util.genSingleTag(templateObject_3 || (templateObject_3 = __makeTemplateObject(["body"], ["body"])));
htmlString += util.genSingleTag(templateObject_4 || (templateObject_4 = __makeTemplateObject(["header"], ["header"])));
htmlString += util.genTag(templateObject_5 || (templateObject_5 = __makeTemplateObject(["h1", ""], ["h1", ""])), data_json_1["default"].name);
htmlString += util.genTag(templateObject_6 || (templateObject_6 = __makeTemplateObject(["p", "subtitle"], ["p", "subtitle"])), subtitle);
htmlString += util.genSingleTag(templateObject_7 || (templateObject_7 = __makeTemplateObject(["/header"], ["/header"])));
htmlString += util.genSingleTag(templateObject_8 || (templateObject_8 = __makeTemplateObject(["section"], ["section"])));
htmlString += util.genTag(templateObject_9 || (templateObject_9 = __makeTemplateObject(["h2", ""], ["h2", ""])), section1);
htmlString += util.genSingleTag(templateObject_10 || (templateObject_10 = __makeTemplateObject(["ul"], ["ul"])));
for (var i = 0; i < 3; i += 1) {
    htmlString += util.genSingleTag(templateObject_11 || (templateObject_11 = __makeTemplateObject(["li"], ["li"])));
    htmlString += util.genTag(templateObject_12 || (templateObject_12 = __makeTemplateObject(["h3", ""], ["h3", ""])), exp);
    htmlString += util.genTag(templateObject_13 || (templateObject_13 = __makeTemplateObject(["h4", ""], ["h4", ""])), time);
    htmlString += util.genTag(templateObject_14 || (templateObject_14 = __makeTemplateObject(["p", ""], ["p", ""])), desc);
    htmlString += util.genSingleTag(templateObject_15 || (templateObject_15 = __makeTemplateObject(["/li"], ["/li"])));
}
htmlString += util.genSingleTag(templateObject_16 || (templateObject_16 = __makeTemplateObject(["/ul"], ["/ul"])));
htmlString += util.genSingleTag(templateObject_17 || (templateObject_17 = __makeTemplateObject(["footer"], ["footer"])));
htmlString += util.genTag(templateObject_18 || (templateObject_18 = __makeTemplateObject(["p", ""], ["p", ""])), copyright);
htmlString += util.genSingleTag(templateObject_19 || (templateObject_19 = __makeTemplateObject(["ul"], ["ul"])));
for (var i = 0; i < 2; i += 1) {
    htmlString += util.genSingleTag(templateObject_20 || (templateObject_20 = __makeTemplateObject(["li"], ["li"])));
    htmlString += util.genTag(templateObject_21 || (templateObject_21 = __makeTemplateObject(["p", ""], ["p", ""])), footer_link);
    htmlString += util.genSingleTag(templateObject_22 || (templateObject_22 = __makeTemplateObject(["/li"], ["/li"])));
}
htmlString += util.genSingleTag(templateObject_23 || (templateObject_23 = __makeTemplateObject(["/ul"], ["/ul"])));
htmlString += util.genSingleTag(templateObject_24 || (templateObject_24 = __makeTemplateObject(["/footer"], ["/footer"])));
htmlString += util.genSingleTag(templateObject_25 || (templateObject_25 = __makeTemplateObject(["/body"], ["/body"])));
htmlString += util.genSingleTag(templateObject_26 || (templateObject_26 = __makeTemplateObject(["/html"], ["/html"])));
util.writeToFile("lol.html", htmlString);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26;
