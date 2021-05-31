"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.genProfile = exports.genHTMLString = exports.writeToFile = exports.genSingleTag = exports.genTag = exports.validateJSON = exports.parseJSON = void 0;
var fs = require('fs');
var ora = require('ora');
/**
 * Returns new spinner used for logging events.
 * @returns a new ora spinner.
 */
var newSpinner = function () {
    return new ora({ color: 'yellow' });
};
/**
 * Given the filename from the CLI, it will read and parse the JSON file to return the data.
 * @param file – the file name from the CLI args containing the name of the JSON file.
 * @returns the JSON data provided in the file.
 */
var parseJSON = function (file) {
    var spinner = newSpinner();
    spinner.start('Parsing JSON file');
    try {
        var json = JSON.parse(fs.readFileSync("./" + file, 'utf8'));
    }
    catch (error) {
        spinner.fail("File " + file + " does not exist.");
        process.exit(1);
    }
    spinner.succeed();
    return json;
};
exports.parseJSON = parseJSON;
var validateJSON = function () {
    var spinner = newSpinner();
    spinner.start('Validating JSON file');
    // TODO: validate
    // if missing optional, spinner.warn("Missing x");
    // if missing required, spinner.fail("Missing x"); exit(1);
    spinner.succeed();
};
exports.validateJSON = validateJSON;
/**
 * Will generate both the start and end tag, as well as putting
 * the text in between. If an attribute for the tag is provided, it
 * is included as well.
 * @param tag – the tag to be used in the html.
 * @param text – the text to belong inside the tags.
 * @param attributes – attributes that exist for the html tags.
 * @returns the full tag and text to be added to the html string.
 */
var genTag = function (tag, text, attributes) {
    var _a;
    var string = "<" + tag;
    (_a = Object.keys(attributes !== null && attributes !== void 0 ? attributes : {})) === null || _a === void 0 ? void 0 : _a.map(function (k) { return (string += " " + k + "=\"" + attributes[k] + "\""); });
    return string + (">" + text + "</" + tag + ">");
};
exports.genTag = genTag;
/**
 * Will generate only a single tag. To make it an ending tag, the \
 * should be prepended to the provided string. If an attribute for the
 * tag is provided, it is included as well.
 * @param tag – the tag to be used in the html.
 * @param attributes – attributes that exist for the html tags.
 * @returns the full tag to be added to the html string.
 */
var genSingleTag = function (tag, attributes) {
    var string = "<" + tag;
    Object.keys(attributes !== null && attributes !== void 0 ? attributes : {}).map(function (k) { return (string += " " + k + "=\"" + attributes[k] + "\""); });
    return string + ">";
};
exports.genSingleTag = genSingleTag;
/**
 * Will write the given data to the provided file.
 * @param path – the path to the file to be written to.
 * @param data – the data to be written.
 */
var writeToFile = function (path, data) { return __awaiter(void 0, void 0, void 0, function () {
    var filehandle;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                filehandle = null;
                _a.label = 1;
            case 1:
                _a.trys.push([1, , 4, 7]);
                return [4 /*yield*/, fs.promises.open(path, 'w')];
            case 2:
                filehandle = _a.sent();
                return [4 /*yield*/, filehandle.writeFile(data)];
            case 3:
                _a.sent();
                return [3 /*break*/, 7];
            case 4:
                if (!filehandle) return [3 /*break*/, 6];
                return [4 /*yield*/, filehandle.close()];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6: return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.writeToFile = writeToFile;
/**
 * Generates the HTML string from the data provided in the json.
 * @returns a string that represents the HTML code for the profile site.
 */
var genHTMLString = function (data) {
    var spinner = newSpinner();
    spinner.start('Building site');
    var htmlString = "\n  <!DOCTYPE html>\n  <html lang=\"en\">\n\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"main.css\">\n    <style>\n      :root {\n        --primary: " + data.theme.color + ";\n      }\n    </style>";
    htmlString += exports.genTag('title', data.name);
    htmlString += exports.genSingleTag('/head');
    htmlString += exports.genSingleTag('body');
    htmlString += exports.genSingleTag('header');
    htmlString += exports.genTag('img', '', {
        src: data.image,
        alt: data.name + " profile picture"
    });
    htmlString += exports.genTag('h1', data.name);
    htmlString += exports.genSingleTag('/header');
    htmlString += exports.genSingleTag('main');
    htmlString += exports.genTag('p', data.tagline, { "class": 'subtitle' });
    for (var _i = 0, _a = data.sections; _i < _a.length; _i++) {
        var section = _a[_i];
        htmlString += exports.genSingleTag('section');
        htmlString += exports.genTag('h2', section.sectionName);
        htmlString += exports.genSingleTag('ul');
        for (var _b = 0, _c = section.points; _b < _c.length; _b++) {
            var point = _c[_b];
            htmlString += exports.genSingleTag('li');
            htmlString += exports.genTag('h3', point.sectionPointName);
            htmlString += exports.genTag('h4', point.sectionTime);
            htmlString += exports.genTag('p', point.sectionDescription);
            htmlString += exports.genSingleTag('/li');
        }
        htmlString += exports.genSingleTag('/ul');
        htmlString += exports.genSingleTag('/section');
    }
    htmlString += exports.genSingleTag('/main');
    htmlString += exports.genSingleTag('footer');
    htmlString += exports.genTag('p', 'Copyright 2021');
    htmlString += exports.genSingleTag('ul');
    for (var i = 0; i < data.footerLinks.length; i += 1) {
        htmlString += exports.genSingleTag('li');
        htmlString += exports.genTag('a', data.footerLinks[i].linkName, {
            href: data.footerLinks[i].link
        });
        htmlString += exports.genSingleTag('/li');
    }
    htmlString += exports.genSingleTag('/ul');
    htmlString += exports.genSingleTag('/footer');
    htmlString += exports.genSingleTag('/body');
    htmlString += exports.genSingleTag('/html');
    spinner.succeed();
    return htmlString;
};
exports.genHTMLString = genHTMLString;
/**
 * Will generate complete profile site by creating new directory called
 * profile-site, and writing html code to index.html and copying relevant
 * css theme into main.css.
 * @param htmlString – the html code to be copied into index.html.
 * @param cssTheme – the name of the css theme to be used for the site.
 */
var genProfile = function (htmlString, cssTheme) { return __awaiter(void 0, void 0, void 0, function () {
    var spinner, dir;
    return __generator(this, function (_a) {
        spinner = newSpinner();
        spinner.start('Generating directory contents');
        dir = './profile-site';
        if (!fs.existsSync(dir))
            fs.mkdirSync(dir);
        exports.writeToFile('./profile-site/index.html', htmlString);
        fs.readFile(__dirname + ("/themes/" + cssTheme + ".css"), 'utf8', function (err, data) {
            if (err) {
                console.error(err);
                return;
            }
            exports.writeToFile('./profile-site/main.css', data);
        });
        spinner.succeed();
        return [2 /*return*/];
    });
}); };
exports.genProfile = genProfile;
