const util = require("./utils/generators");
const data = require("./data.json");

let htmlString: string = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <style>
    :root {
      --primary: ${data.theme.color}};
    }
  </style>`;

htmlString += util.genTag("title", data.name);
htmlString += util.genSingleTag("/head");

htmlString += util.genSingleTag("body");
htmlString += util.genSingleTag("header");
htmlString += util.genTag("h1", data.name);
htmlString += util.genTag("p", data.tagline, { class: "subtitle" });
htmlString += util.genSingleTag("/header");

for (const section of data.sections) {
  htmlString += util.genSingleTag("section");
  htmlString += util.genTag("h2", section.sectionName);
  htmlString += util.genSingleTag("ul");

  for (const point of section.points) {
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
for (let i: number = 0; i < data.footerLinks.length; i += 1) {
  htmlString += util.genSingleTag("li");
  htmlString += util.genTag("p", data.footerLinks[i].link);
  htmlString += util.genSingleTag("/li");
}
htmlString += util.genSingleTag("/ul");
htmlString += util.genSingleTag("/footer");

htmlString += util.genSingleTag("/body");
htmlString += util.genSingleTag("/html");

util.writeToFile("lol.html", htmlString);
