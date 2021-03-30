import * as util from "./utils/generators";

const name = "neeraj";
const subtitle = "subtitle goes here";
const section1 = "experiences";
const exp = "experience 1";
const time = "june 1";
const desc = "description";
const copyright = "copyright";
const footer_link = "footer link";

let htmlString: string = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">`;

htmlString += util.genTag`title${name}`;
htmlString += util.endTag`head`;

htmlString += util.startTag`body`;
htmlString += util.startTag`header`;
htmlString += util.genTag`h1${name}`;
htmlString += util.genTag`p${subtitle}`;
htmlString += util.endTag`header`;

htmlString += util.startTag`section`;
htmlString += util.genTag`h2${section1}`;

htmlString += util.startTag`ul`;

for (let i: number = 0; i < 3; i += 1) {
  htmlString += util.startTag`li`;
  htmlString += util.genTag`h3${exp}`;
  htmlString += util.genTag`h4${time}`;
  htmlString += util.genTag`p${desc}`;
  htmlString += util.endTag`li`;
}

htmlString += util.endTag`ul`;

htmlString += util.startTag`footer`;
htmlString += util.genTag`p${copyright}`;
htmlString += util.startTag`ul`;
for (let i: number = 0; i < 2; i += 1) {
  htmlString += util.startTag`li`;
  htmlString += util.genTag`p${footer_link}`;
  htmlString += util.endTag`li`;
}
htmlString += util.endTag`ul`;
htmlString += util.endTag`footer`;

htmlString += util.endTag`body`;
htmlString += util.endTag`html`;

util.writeToFile("lol.html", htmlString);
